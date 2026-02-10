'use client'

import { useState, useEffect } from "react";
import { createProduct } from '../_actions/menus'
import { getCategories } from '../_actions/menus'
import { useFormStatus } from "react-dom";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";


export default function ProductCreate() {
    const [categories, setCategories] = useState<any[]>([]);

    function SubmitButton() {
        const { pending } = useFormStatus();

        return (
            <button 
            type="submit"
            className="inline-flex items-center text-white rounded-lg bg-blue-600 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-lg leading-5 text-lg px-4 py-2.5 focus:outline-none"
            >
            {pending ? "Menyimpan..." : "Simpan Product"}
            </button>
        )
    }
    
    useEffect(() => {
        loadCategories();
    }, []);

    const loadCategories = async () => {
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
        }
    };

    return (
        <div className="m-20 text-black">
            <Link href="/admin/menus" className="text-2xl font-bold mb-4 flex flex-row items-center gap-2"><ArrowLeft/>Create Product</Link>
            <form action={createProduct} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block mb-1">Name:</label>
                    <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    className="border p-2 rounded w-full"
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
                    />
                </div>
                <div>
                    <label htmlFor="category_id" className="block mb-1">Category:</label>
                    <select defaultValue="Select Category" name="category_id" required className="border p-2 rounded w-full">
                        <option disabled hidden>Select Category</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="price" className="block mb-1">Price:</label>
                    <input 
                    type="number" 
                    id="price" 
                    name="price" 
                    required
                    className="border p-2 rounded w-full"
                    />
                </div>
                <SubmitButton />
            </form>
        </div>
  )
}
