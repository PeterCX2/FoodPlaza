'use server'

import { PrismaClient } from '@/generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg';
import { redirect } from 'next/navigation';
import fs from "fs"
import path from "path"

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });


export async function getProducts(id?: number) {
    try{
        const products = await prisma.products.findMany({
          where: {
            id: id
          },
          include: { 
            categories: true,
          }

        })
        return products
    } catch (error) {
        console.error("Failed to fetch products:", error)
        return []
    }
}

export async function getCategories(id?: number) {
    try{
        const categories = await prisma.categories.findMany()
        return categories
    } catch (error) {
        console.error("Failed to fetch category:", error)
        return []
    }
}

export async function createProduct(formData: FormData) {
  try {
    const name = formData.get('name') as string
    const rawPrice = formData.get('price') as string
    const price = Number(rawPrice.replace(/\D/g, ""))
    const description = formData.get('description') as string
    const category_id = Number(formData.get('category_id'))
    const file = formData.get("image") as File
    const imageName = `${Date.now()}-${file.name}`
    const imagePath = path.join(process.cwd(), "public", "images", imageName)
    fs.writeFileSync(imagePath, Buffer.from(await file.arrayBuffer()))


    const product = await prisma.products.createMany({
      data: { name, price, description, category_id, image: imageName }
    })

    return redirect('/admin/menus')
  } catch (error) {
    console.error("Failed to create menu:", error)
    throw error
  }
}

export async function updateProduct(formData: FormData) {
  try {
    const id = Number(formData.get('id'))
    const name = formData.get('name') as string
    const rawPrice = formData.get('price') as string
    const price = Number(rawPrice.replace(/\D/g, ""))
    const description = formData.get('description') as string
    const category_id = Number(formData.get('category_id'))
    const category = await prisma.categories.findUnique({
      where: { id: category_id }
    })
    console.log("Category:", category)
    const file = formData.get("image") as File
    
    let imageName = undefined
    if (file && file.size > 0) {
      imageName = `${Date.now()}-${file.name}`
      const imagePath = path.join(process.cwd(), "public", "images", imageName)
      fs.writeFileSync(imagePath, Buffer.from(await file.arrayBuffer()))
    }

    if (category !== null) {
      const product = await prisma.products.updateMany({
        where: { id: id },
        data: { category_id }
      })
    }

    const product = await prisma.products.updateMany({
      where: { id: id },
      data: { name, price, description, image: imageName }
    })

    return redirect('/admin/menus')
  } catch (error) {
    console.error("Failed to edit menu:", error)
    throw error
  }
}

export async function deleteProduct($id: number) {
  try{
    const product = await prisma.products.deleteMany({
      where: {
        id: $id
      }
    })
  } catch (error) {
    console.error("Failed to delete product:", error)
    throw error
  }
}