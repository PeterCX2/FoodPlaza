'use server'

import { PrismaClient } from '@/app/generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg';
import { redirect } from 'next/navigation';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

export async function getCategories(id?: number) {
    try{
        const categories = await prisma.categories.findMany()
        return categories
    } catch (error) {
        console.error("Failed to fetch category:", error)
        return []
    }
}

export async function createCategory(formData: FormData) {
  try {
    const name = formData.get('name') as string

    const category = await prisma.categories.createMany({
      data: { name }
    })

    return redirect('/admin/categories')
  } catch (error) {
    console.error("Failed to create category:", error)
    throw error
  }
}

export async function deleteCategory($id: number) {
  try{
    const category = await prisma.categories.deleteMany({
      where: {
        id: $id
      }
    })
  } catch (error) {
    console.error("Failed to delete category:", error)
    throw error
  }
}