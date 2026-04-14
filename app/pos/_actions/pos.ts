'use server'

import { PrismaClient } from '@/generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg';
import { revalidatePath } from 'next/cache';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });


export async function getProducts(category_id?: number,id?: number) {
    try{
        const products = await prisma.products.findMany({
          where: {
            id: id,
            category_id: category_id,
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

type CartItem = {
  id: number
  name: string
  price: number
  qty: number
}

export async function createSales(cart: CartItem[], totalAmount: number, tax: number, discount: number) {
  try {
    const taxAmount = (totalAmount - discount) * tax
    const total = totalAmount

    const sales = await prisma.sales.create({
      data: {
        tax: taxAmount,
        discount: discount,
        total_amount: total,
        detailedSales: {
          create: cart.map(item => ({
            product_id: item.id,
            product_name: item.name,
            product_price: item.price,
            quantity: item.qty,
            total_price: item.price * item.qty
          }))
        }
      },
      include: {
        detailedSales: true
      }
    })

    revalidatePath('/pos')
    
    return { success: true, data: sales,message: 'Transaksi berhasil disimpan' }
  } catch (error) {
    console.error("Failed to create sales:", error)
    return { success: false, message: 'Gagal menyimpan transaksi' }
  }
}

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