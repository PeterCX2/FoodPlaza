'use client'

import { useState, useEffect } from "react";
import { createPromo } from '../_actions/promos'
import { useFormStatus } from "react-dom";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";


export default function PromoCreate() {
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
    }

    function SubmitButton() {
        const { pending } = useFormStatus();

        return (
            <button 
            type="submit"
            className="inline-flex items-center text-white rounded-lg bg-blue-600 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-lg leading-5 text-lg px-4 py-2.5 focus:outline-none"
            >
            {pending ? "Menyimpan..." : "Simpan Promo"}
            </button>
        )
    }

    return (
        <div className="m-20 text-black">
            <Link href="/admin/promos" className="text-2xl font-bold mb-4 flex flex-row items-center gap-2"><ArrowLeft/>Create Promo</Link>
            <form action={createPromo} className="space-y-4">
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
                    <label htmlFor="discount" className="block mb-1">Discount:</label>
                    <input 
                    type="text" 
                    id="discount" 
                    name="discount" 
                    required
                    value={value ? formatRupiahInput(value) : ""}
                    onChange={handleChange}
                    className="border p-2 rounded w-full"
                    />
                </div>
                <SubmitButton />
            </form>
        </div>
  )
}
