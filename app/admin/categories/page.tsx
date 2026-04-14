'use client'

import { useEffect, useState } from "react";
import { deleteCategory, getCategories } from "./_actions/categories"
import Link from "next/link"
import { PackagePlus, Edit2, Trash2, RefreshCw, Search } from 'lucide-react';
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react"

export default function CategoriesPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState<any[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const { data: session } = useSession()
    

    useEffect(() => {
        loadCategories();
    }, []);


    const handleDelete = async (id: number, categoryName: string) => {
        if (!confirm(`Yakin hapus subject "${categoryName}"?`)) return;

        try {
            await deleteCategory(id);
            loadCategories()
        } catch {
            alert("Gagal menghapus subject");
            loadCategories()
        }
    }

    const loadCategories = async () => {
        setLoading(true);
        try {
            const categories = await getCategories();
            const formattedCategories = Array.isArray(categories)
                ? categories.map((category: any) => ({
                    id: category.id,
                    name: category.name
                }))
                : [];
            setCategories(formattedCategories);
        } catch (error) {
            console.error("Error loading products:", error);
        } finally {
            setLoading(false);
        }
    };

    const filteredCategories = categories.filter((category) =>
        category.name.toLowerCase().includes(searchQuery.toLowerCase())
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
                <h1 className="text-3xl font-bold">Categories</h1>

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
                        Cari Category
                    </label>
                    <div className="relative">
                        <Search
                            size={16}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        />
                        <input
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Nama category..."
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
                        href="/admin/categories/create"
                        className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm transition flex items-center gap-2"
                    >
                        <PackagePlus size={16} />
                        Add Category
                    </Link>
                </div>

            </div>

            <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
                <table className="w-full text-sm">
                    <thead className="bg-gray-50 border-b">
                        <tr>
                            <th className="px-6 py-4 text-left font-semibold">Name</th>
                            <th className="px-6 py-4 text-left font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCategories.map((category) => (
                            <tr
                                key={category.id}
                                className="border-b hover:bg-gray-50 transition"
                            >
                                <td className="px-6 py-4 font-medium">
                                    {category.name}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => handleDelete(category.id, category.name)}
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