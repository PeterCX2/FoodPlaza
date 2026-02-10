'use client'

import { createCategory } from '../_actions/categories'
import { useFormStatus } from "react-dom";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";


export default function CategoryCreate() {

    function SubmitButton() {
        const { pending } = useFormStatus();

        return (
            <button 
            type="submit"
            className="inline-flex items-center text-white rounded-lg bg-blue-600 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-lg leading-5 text-lg px-4 py-2.5 focus:outline-none"
            >
            {pending ? "Menyimpan..." : "Simpan Category"}
            </button>
        )
    }

    return (
        <div className="m-20 text-black">
            <Link href="/admin/categories" className="text-2xl font-bold mb-4 flex flex-row items-center gap-2"><ArrowLeft/>Create Product</Link>
            <form action={createCategory} className="space-y-4">
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
                <SubmitButton />
            </form>
        </div>
  )
}
