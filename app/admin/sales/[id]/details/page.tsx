'use client'

import { useEffect, useState } from "react";
import { getDetailedSales, getSales } from "../../_actions/sales"
import Link from "next/link"
import { ArrowLeft, RefreshCw, Search } from 'lucide-react';
import { useRouter, useParams } from "next/navigation";

export default function DetailedSalesPage() {
    const params = useParams()
    const id = Number(params.id)
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [Sale, setSale] = useState<any | null>(null);
    const [DetailedSales, setDetailedSales] = useState<any[]>([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        loadSale();
        loadDetailedSales();
    }, []);

    const formatRupiah = (amount: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount);
    };

    const loadSale = async () => {
        try {
            const sales = await getSales(id);
            if (Array.isArray(sales) && sales.length > 0) {
                const sale = sales[0]
                    setSale({
                    id: sale.id,
                    created_at: new Date(sale.createdAt).toLocaleDateString('en-ID', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                    }),
                    discount: formatRupiah(sale.discount??0),
                    tax: formatRupiah(sale.tax??0),
                    total_amount: formatRupiah(sale.total_amount),
                    final_amount: formatRupiah((sale.total_amount - (sale.discount??0 * sale.total_amount)) + (sale.tax??0)),
                })
            }
        } catch (error) {
            console.error("Error loading sales:", error);
        }
    };

    const loadDetailedSales = async () => {
        try {
            const detailedSales = await getDetailedSales(id);
            const formattedDetailedSales = Array.isArray(detailedSales)
                ? detailedSales.map((detailedSale: any) => ({
                    created_at: new Date(detailedSale.createdAt).toLocaleDateString('en-ID', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                    }),
                    id: detailedSale.id,
                    product: detailedSale.product_name,
                    quantity: detailedSale.quantity,
                    base_price: formatRupiah(detailedSale.product_price),
                    total_price: formatRupiah(detailedSale.total_price),
                }))
                : [];

            setDetailedSales(formattedDetailedSales);
        } catch (error) {
            console.error("Error loading detailed sales:", error);
        }
    };

    useEffect(() => {
        if (Sale && DetailedSales.length > 0) {
            setLoading(false);
        }
    }, [Sale, DetailedSales]);

    const filteredDetailedSales = DetailedSales.filter((detailedSale) =>
        detailedSale.product.toLowerCase().includes(searchQuery.toLowerCase())
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

            <div className="flex items-center gap-3 mb-8">
                <Link
                    href="/admin/sales"
                    className="flex items-center gap-2 text-2xl font-bold hover:text-blue-600 transition"
                >
                    <ArrowLeft size={22} />
                    Sale Details: {Sale.created_at}
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-5 rounded-xl border shadow-sm">
                    <label className="text-sm font-medium text-gray-600 mb-2 block">
                        Cari Product
                    </label>
                    <div className="relative">
                        <Search
                            size={16}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        />
                        <input
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Nama product..."
                            className="w-full pl-9 pr-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm outline-none"
                        />
                    </div>
                </div>

                <div className="bg-white p-5 rounded-xl border shadow-sm">
                    <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                            <span className="text-gray-600">Total Price</span>
                            <span className="font-medium">{Sale.total_amount}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Discount</span>
                            <span className="text-red-500 font-medium">{Sale.discount}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Tax</span>
                            <span className="font-medium">{Sale.tax}</span>
                        </div>
                        <hr />
                        <div className="flex justify-between text-base">
                            <span className="font-semibold">Final Price</span>
                            <span className="font-bold text-blue-600">
                                {Sale.final_amount}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
                <table className="w-full text-sm">
                    <thead className="bg-black text-white border-b">
                        <tr>
                            <th className="px-6 py-4 text-left font-semibold">Date</th>
                            <th className="px-6 py-4 text-left font-semibold">Menu</th>
                            <th className="px-6 py-4 text-left font-semibold">Quantity</th>
                            <th className="px-6 py-4 text-left font-semibold">Base Price</th>
                            <th className="px-6 py-4 text-left font-semibold">Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredDetailedSales.map((detailedSale) => (
                            <tr
                                key={detailedSale.id}
                                className="border-b hover:bg-gray-50 transition"
                            >
                                <td className="px-6 py-4 text-gray-600">
                                    {detailedSale.created_at}
                                </td>
                                <td className="px-6 py-4 font-medium">
                                    {detailedSale.product}
                                </td>
                                <td className="px-6 py-4">
                                    {detailedSale.quantity}
                                </td>
                                <td className="px-6 py-4">
                                    {detailedSale.base_price}
                                </td>
                                <td className="px-6 py-4 font-semibold text-blue-600">
                                    {detailedSale.total_price}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}