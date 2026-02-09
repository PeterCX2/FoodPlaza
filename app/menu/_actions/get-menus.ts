'use server'

import { PrismaClient } from '@/app/generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

export async function getProducts() {
    try{
        const products = await prisma.products.findMany()
        return products
    } catch (error) {
        console.error("Failed to fetch products:", error)
        return []
    }
}