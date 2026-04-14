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
                id: id
            },
        })
        return sales
    } catch (error) {
        console.error("Failed to fetch sales:", error)
        return []
    }
}

export async function getDetailedSales(id?: number) {
    try{
        const detailedSales = await prisma.detailedSales.findMany({
            where: {
                sales_id: id
            },
            include: {
                sales: true,
            }
        })
        return detailedSales
    } catch (error) {
        console.error("Failed to fetch sales:", error)
        return []
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