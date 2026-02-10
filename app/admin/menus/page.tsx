'use client'

import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "./_actions/menus"
import Link from "next/link"
import { PackagePlus, Edit2, Trash2, RefreshCw } from 'lucide-react';
import { useRouter } from "next/navigation";

export default function ProductsPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        loadProducts();
    }, []);

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
                <h1 className="text-3xl font-bold mb-4">Products</h1>
                <Link href="/admin/menus/create" className="flex flex-row items-center gap-2 text-white rounded-lg bg-blue-600 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-lg leading-5 text-lg px-4 py-2.5 focus:outline-none">
                    <PackagePlus/>Add Product
                </Link>
            </div>
            <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
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
                        {products.map((product) => (
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
                                    {product.price}
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