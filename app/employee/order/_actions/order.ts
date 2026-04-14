'use server'

import { PrismaClient } from '@/generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg';
import { redirect } from 'next/navigation';

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
})

const prisma = new PrismaClient({ adapter });

export async function getSales(id?: number) {
    try{
        const sales = await prisma.sales.findMany({
            where: {
                id: id,
                status: "pending"
            },
            include: {
                detailedSales: true,
            }
        })
        return sales
    } catch (error) {
        console.error("Failed to fetch sales:", error)
        return []
    }
}

export async function serveOrder(id: number) {
    try {
        await prisma.sales.update({
            where: { id },
            data: { status: "served" },
        })
        redirect('/employee/order')
    } catch (error) {
        console.error("Failed to update order status:", error)
    }
}