'use client'

import { useEffect, useState } from "react";
import { getSales, getDetailedSales } from "./_actions/sales"
import Link from "next/link"
import { ReceiptText, RefreshCw, Search } from 'lucide-react';
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react"

    

export default function SalesPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [Sales, setSales] = useState<any[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const { data: session } = useSession()
    
    

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
                    totalAmount: formatRupiah(sales.total_amount),
                    discount: formatRupiah(sales.discount??0),
                    tax: formatRupiah(sales.tax),
                    finalAmount: formatRupiah((sales.total_amount - (sales.discount??0 * sales.total_amount)) + sales.tax),
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
        <div className="max-w-7xl mx-auto px-6 py-10 text-black">

            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Sales</h1>

                <button
                    onClick={() => signOut({ callbackUrl: '/' })}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                >
                    Logout
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-5 rounded-xl border shadow-sm">
                    <label className="text-sm font-medium text-gray-600 mb-2 block">
                        Cari Sales
                    </label>
                    <div className="relative">
                        <Search
                            size={16}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        />
                        <input
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Cari berdasarkan tanggal..."
                            className="w-full pl-9 pr-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm outline-none"
                        />
                    </div>
                </div>

                <div className="flex flex-wrap items-end gap-3">
                    {[
                        { label: "Sales", path: "/admin/sales" },
                        { label: "Menus", path: "/admin/menus" },
                        { label: "Category", path: "/admin/categories" },
                        { label: "Promo", path: "/admin/promos" },
                    ].map((item) => (
                        <button
                            key={item.path}
                            onClick={() => router.push(item.path)}
                            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm transition"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
                <table className="w-full text-sm">
                    <thead className="bg-black text-white border-b">
                        <tr>
                            <th className="px-6 py-4 text-left font-semibold">Status</th>
                            <th className="px-6 py-4 text-left font-semibold">Date</th>
                            <th className="px-6 py-4 text-left font-semibold">Total</th>
                            <th className="px-6 py-4 text-left font-semibold">Discount</th>
                            <th className="px-6 py-4 text-left font-semibold">Tax</th>
                            <th className="px-6 py-4 text-left font-semibold">Final</th>
                            <th className="px-6 py-4 text-left font-semibold">Items</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredSales.map((sale) => (
                            <tr
                                key={sale.id}
                                className="border-b hover:bg-gray-50 transition"
                            >
                                <td className="px-6 py-4 font-medium">
                                    {sale.status}
                                </td>
                                <td className="px-6 py-4 text-gray-600">
                                    {sale.created_at}
                                </td>
                                <td className="px-6 py-4">
                                    {sale.totalAmount}
                                </td>
                                <td className="px-6 py-4 text-red-500">
                                    {sale.discount}
                                </td>
                                <td className="px-6 py-4">
                                    {sale.tax}
                                </td>
                                <td className="px-6 py-4 font-semibold text-blue-600">
                                    {sale.finalAmount}
                                </td>
                                <td className="px-6 py-4">
                                    <button
                                        onClick={() => router.push(`/admin/sales/${sale.id}/details`)}
                                        className="flex items-center gap-2 px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm transition"
                                    >
                                        <ReceiptText size={16} />
                                        Items
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