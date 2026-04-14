'use server'

import { PrismaClient } from '@/generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg';
import { redirect } from 'next/navigation';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });


export async function getPromos(id?: number) {
    try{
        const promos = await prisma.promos.findMany({
          where: {
            id: id
          },
        })
        return promos
    } catch (error) {
        console.error("Failed to fetch promos:", error)
        return []
    }
}

export async function createPromo(formData: FormData) {
  try {
    const name = formData.get('name') as string
    const description = formData.get('description') as string
    const rawDiscount = formData.get('discount') as string
    const discount = Number(rawDiscount.replace(/\D/g, ""))

    const promo = await prisma.promos.createMany({
      data: { name, description, discount }
    })

    return redirect('/admin/promos')
  } catch (error) {
    console.error("Failed to create promo:", error)
    throw error
  }
}

export async function updatePromo(formData: FormData) {
  try {
    const id = Number(formData.get('id'))
    const name = formData.get('name') as string
    const description = formData.get('description') as string
    const rawDiscount = formData.get('discount') as string
    const discount = Number(rawDiscount.replace(/\D/g, ""))

    const promo = await prisma.promos.updateMany({
      where: { id: id },
      data: { name, description, discount }
    })

    return redirect('/admin/promos')
  } catch (error) {
    console.error("Failed to edit promo:", error)
    throw error
  }
}

export async function deletePromo($id: number) {
  try{
    const promo = await prisma.promos.deleteMany({
      where: {
        id: $id
      }
    })
  } catch (error) {
    console.error("Failed to delete promo:", error)
    throw error
  }
}