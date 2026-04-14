'use client'

import { useEffect, useState } from "react";
import { getSales, serveOrder } from "./_actions/order"
import Link from "next/link"
import { HandPlatter, RefreshCw, Search, Clock } from 'lucide-react';
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react"

export default function SalesPage() {
    const { data: session } = useSession()
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [Sales, setSales] = useState<any[]>([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        loadSales();
    }, []);

    const formatRupiah = (amount: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount);
    };

    const serveOrderHandler = async (id: number) => {
        await serveOrder(id);
        loadSales();
    };

    const loadSales = async () => {
        setLoading(true);
        try {
            const sales = await getSales();
            const formattedSales = Array.isArray(sales)
                ? sales.map((sales: any) => ({
                    created_at: new Date(sales.createdAt).toLocaleDateString('en-ID', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                    }),
                    id: sales.id,
                    status: sales.status,
                    items: sales.detailedSales.map((detailedSale: any) => ({
                        id: detailedSale.id,
                        name: detailedSale.product_name,
                        quantity: detailedSale.quantity,
                    })),
                }))
                : [];

            setSales(formattedSales);
        } catch (error) {
            console.error("Error loading sales:", error);
        } finally {
            setLoading(false);
        }
    };

    const filteredSales = Sales.filter((sales) =>
        sales.created_at.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (loading) {
        return (
            <div className="p-6">
                <div className="bg-white rounded-lg shadow p-8 text-center">
                <RefreshCw className="w-8 h-8 animate-spin mx-auto text-gray-400 mb-2" />
                <p className="text-gray-500">Memuat data...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="m-20 text-black">
            <div className="flex flex-row justify-between pb-5 items-center">
                <h1 className="text-3xl font-bold mb-4">Orders</h1>
                {session ? (
                    <>
                        <button onClick={() => signOut({callbackUrl: '/'})} className="bg-red-500 text-white px-4 py-2 rounded-md">
                        Logout
                        </button>
                    </>
                ):("")}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg border shadow-sm">
                    <label className="text-sm text-gray-600 mb-2 block">
                        Cari Orders
                    </label>
                    <div className="relative">
                        <Search
                        size={16}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"
                        />
                        <input
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Nama Sales..."
                        className="w-full pl-9 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm text-gray-600"
                        />
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-xl relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
                <table className="w-full text-sm text-left rtl:text-right text-body">
                    <thead className="text-sm text-body bg-black text-white font-bold border-b rounded-base border-default">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Items
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-sm text-body border-b border-default"  >
                        {filteredSales.map((Sales) => (
                            <tr key={Sales.id} className="bg-neutral-primary border-b border-default">
                                <td className="px-6 py-4 font-semibold text-white">
                                    <div className="flex flex-row items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 w-max bg-yellow-400">
                                        <Clock className="w-5 h-5"/>
                                        {Sales.status}
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-500">
                                    {Sales.created_at}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex flex-col gap-2">
                                        {Sales.items.map((item: any) => (
                                        <div key={item.id} className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm">
                                            <span className="font-medium text-gray-800 truncate">
                                                {item.name}
                                            </span>

                                            <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-md">
                                                x{item.quantity}
                                            </span>
                                        </div>
                                        ))}
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <button onClick={() => serveOrderHandler(Sales.id)} className="text-white m-2 p-[8px] bg-blue-400 rounded-xl flex flex-row gap-2 items-center">
                                        <HandPlatter/> Serve
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}