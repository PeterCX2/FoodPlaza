'use client'

import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "./_actions/menus"
import Link from "next/link"
import { PackagePlus, Edit2, Trash2, RefreshCw, Search } from 'lucide-react';
import { useRouter } from "next/navigation";

export default function ProductsPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState<any[]>([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        loadProducts();
    }, []);

    const formatRupiah = (amount: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount);
    };


    const handleDelete = async (id: number, productName: string) => {
        if (!confirm(`Yakin hapus subject "${productName}"?`)) return;

        try {
            await deleteProduct(id);
            loadProducts()
        } catch {
            alert("Gagal menghapus subject");
            loadProducts()
        }
    }

    const loadProducts = async () => {
        setLoading(true);
        try {
            const products = await getProducts();
            const formattedProducts = Array.isArray(products)
                ? products.map((product: any) => ({
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    category_id: product.categories?.name,
                }))
                : [];

            setProducts(formattedProducts);
        } catch (error) {
            console.error("Error loading products:", error);
        } finally {
            setLoading(false);
        }
    };

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category_id.toLowerCase().includes(searchQuery.toLowerCase())
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
                <h1 className="text-3xl font-bold mb-4">Menus</h1>
                <Link href="/admin/menus/create" className="flex flex-row items-center gap-2 text-white rounded-lg bg-blue-600 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-lg leading-5 text-lg px-4 py-2.5 focus:outline-none">
                    <PackagePlus/>Add Menu
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg border shadow-sm">
                    <label className="text-sm text-gray-600 mb-2 block">
                        Cari menu
                    </label>
                    <div className="relative">
                        <Search
                        size={16}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"
                        />
                        <input
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Nama sekolah..."
                        className="w-full pl-9 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm text-gray-600"
                        />
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-xl relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
                <table className="w-full text-sm text-left rtl:text-right text-body">
                    <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
                        <tr>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.map((product) => (
                            <tr key={product.id} className="bg-neutral-primary border-b border-default">
                                <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                                    {product.name}
                                </th>
                                <td className="px-6 py-4">
                                    {product.description}
                                </td>
                                <td className="px-6 py-4">
                                    {product.category_id}
                                </td>
                                <td className="px-6 py-4">
                                    {formatRupiah(product.price)}
                                </td>
                                <td className="px-6 py-4">
                                    <button onClick={() => router.push(`/admin/menus/${product.id}/edit`)} className="text-white m-2 p-[6px] bg-blue-400 rounded-xl">
                                        <Edit2/>
                                    </button>
                                    <button onClick={() => handleDelete(product.id, product.name)} className="text-white m-2 p-[6px] bg-red-500 rounded-xl">
                                        <Trash2/>
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