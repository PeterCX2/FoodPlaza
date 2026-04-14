'use client'

import { useState, useEffect } from "react";
import { updateProduct } from '../../_actions/menus'
import { getCategories } from '../../_actions/menus'
import { getProducts } from "../../_actions/menus";
import { useFormStatus } from "react-dom";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, RefreshCw } from "lucide-react";


export default function ProductEdit() {
    const params = useParams()
    const id = Number(params.id)
    const [categories, setCategories] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState<any | null>(null);
    const [categoriesLoading, setCategoriesLoading] = useState(true);
    const [value, setValue] = useState<number>(0)

    const formatRupiahInput = (number: number) => {
        return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
        }).format(number)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/\D/g, "")
        setValue(Number(raw))
        setProduct({ ...product, price: e.target.value })
    }


    function SubmitButton() {
        const { pending } = useFormStatus();

        return (
            <button 
            type="submit"
            className="inline-flex items-center text-white rounded-lg bg-blue-600 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-lg leading-5 text-lg px-4 py-2.5 focus:outline-none"
            >
            {pending ? "Menyimpan..." : "Update Product"}
            </button>
        )
    }
    
    useEffect(() => {
        loadCategories();
        loadProduct();
    }, []);

    const loadProduct = async () => {
        try {
            const products = await getProducts(id)
            if (Array.isArray(products) && products.length > 0) {
                const p = products[0]
                    setProduct({
                    id: p.id,
                    name: p.name,
                    description: p.description,
                    price: p.price,
                    category_id: p.category_id,
                    image: p.image,
                })
            }
        } catch (error) {
            console.error("Error loading product:", error);
        }
    };

    const loadCategories = async () => {
        setCategoriesLoading(true);
        try {
            const categories = await getCategories();
            const formattedCategories = Array.isArray(categories)
                ? categories.map((category: any) => ({
                    id: category.id,
                    name: category.name || category.nama,
                }))
                : [];

            setCategories(formattedCategories);
        } catch (error) {
            console.error("Error loading categories:", error);
        } finally {
            setCategoriesLoading(false);
        }
    };

    useEffect(() => {
        if (product) {
            setLoading(false);
        }
    }, [product, categories]);

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
            <Link href="/admin/menus" className="text-2xl font-bold mb-4 flex flex-row items-center gap-2"><ArrowLeft/>Edit Product</Link>
            <form action={updateProduct} className="space-y-4">
                <div>
                    <label className="block mb-2">Current Image:</label>
                    <img src={`/images/${product.image}`} alt="product" className="w-32 h-32 object-cover rounded mb-3"/>

                    <label htmlFor="image" className="block mb-1">
                        Change Image (optional):
                    </label>

                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        className="border p-2 rounded w-full"
                    />
                </div>
                <div className="hidden">
                    <label htmlFor="id" className="block mb-1">Id:</label>
                    <input 
                    type="number" 
                    id="id" 
                    name="id" 
                    className="border p-2 rounded w-full"
                    value={product.id}
                    onChange={(e) => product.id}
                    />
                </div>
                <div>
                    <label htmlFor="name" className="block mb-1">Name:</label>
                    <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    className="border p-2 rounded w-full"
                    value={product.name}
                    onChange={(e) => setProduct({ ...product, name: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="description" className="block mb-1">Description:</label>
                    <input 
                    type="text" 
                    id="description" 
                    name="description" 
                    required
                    className="border p-2 rounded w-full"
                    value={product.description}
                    onChange={(e) => setProduct({ ...product, description: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="category_id" className="block mb-1">Category:</label>
                    {categoriesLoading ? (
                        <div className="text-gray-500">Loading categories...</div>
                    ) : (
                        <select value={product.category_id??0} onChange={(e) => setProduct({ ...product, category_id: parseInt(e.target.value) })} name="category_id" className="border p-2 rounded w-full">
                            <option value={0} hidden disabled>No Category (category might has been deleted)</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                        </select>
                    )}
                </div>
                <div>
                    <label htmlFor="price" className="block mb-1">Price:</label>
                    <input 
                    type="text" 
                    id="price" 
                    name="price" 
                    required
                    className="border p-2 rounded w-full"
                    value={value ? formatRupiahInput(value) : formatRupiahInput(product.price)}
                    onChange={handleChange}
                    />
                </div>
                <SubmitButton />
            </form>
        </div>
  )
}
