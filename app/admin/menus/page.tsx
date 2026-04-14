'use client'

import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "./_actions/menus"
import Link from "next/link"
import { PackagePlus, Edit2, Trash2, RefreshCw, Search } from 'lucide-react';
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react"

export default function ProductsPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState<any[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const { data: session } = useSession()
    

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
                    image: '/images/' + product.image,
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
        <div className="max-w-7xl mx-auto px-6 py-10 text-black">

            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Menus</h1>

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
                        Cari Menu
                    </label>
                    <div className="relative">
                        <Search
                            size={16}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        />
                        <input
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Nama menu..."
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
                    <Link
                        href="/admin/menus/create"
                        className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm transition flex items-center gap-2"
                    >
                        <PackagePlus size={16} />
                        Add Menu
                    </Link>
                </div>

            </div>

            <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
                <table className="w-full text-sm">
                    <thead className="bg-black border-b text-white">
                        <tr>
                            <th className="px-6 py-4 text-left font-semibold">Image</th>
                            <th className="px-6 py-4 text-left font-semibold">Name</th>
                            <th className="px-6 py-4 text-left font-semibold">Description</th>
                            <th className="px-6 py-4 text-left font-semibold">Category</th>
                            <th className="px-6 py-4 text-left font-semibold">Price</th>
                            <th className="px-6 py-4 text-left font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.map((product) => (
                            <tr
                                key={product.id}
                                className="border-b hover:bg-gray-50 transition"
                            >
                                <td className="px-6 py-4">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-14 h-14 object-cover rounded-lg"
                                    />
                                </td>
                                <td className="px-6 py-4 font-medium">
                                    {product.name}
                                </td>
                                <td className="px-6 py-4 text-gray-600">
                                    {product.description}
                                </td>
                                <td className="px-6 py-4">
                                    {product.category_id ?? "No Category"}
                                </td>
                                <td className="px-6 py-4 font-semibold text-blue-600">
                                    {formatRupiah(product.price)}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => router.push(`/admin/menus/${product.id}/edit`)}
                                            className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
                                        >
                                            <Edit2 size={16} />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(product.id, product.name)}
                                            className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}