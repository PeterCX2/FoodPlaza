'use server'

import { PrismaClient } from '@/app/generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg';
import { redirect } from 'next/navigation';

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
    const price = Number(formData.get('price'))
    const description = formData.get('description') as string
    const category_id = Number(formData.get('category_id'))

    const product = await prisma.products.createMany({
      data: { name, price, description, category_id }
    })

    return redirect('/admin/menus')
  } catch (error) {
    console.error("Failed to create user:", error)
    throw error
  }
}

export async function updateProduct(formData: FormData) {
  try {
    const id = Number(formData.get('id'))
    const name = formData.get('name') as string
    const price = Number(formData.get('price'))
    const description = formData.get('description') as string
    const category_id = Number(formData.get('category_id'))

    const product = await prisma.products.updateMany({
      where: { id: id },
      data: { name, price, description, category_id }
    })

    return redirect('/admin/menus')
  } catch (error) {
    console.error("Failed to edit user:", error)
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