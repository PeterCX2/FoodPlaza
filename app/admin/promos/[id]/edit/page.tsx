'use client'

import { useState, useEffect } from "react";
import { updatePromo } from '../../_actions/promos'
import { getPromos } from "../../_actions/promos";
import { useFormStatus } from "react-dom";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, RefreshCw } from "lucide-react";


export default function PromoEdit() {
    const params = useParams()
    const id = Number(params.id)
    const [categories, setCategories] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [Promo, setPromo] = useState<any | null>(null);
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
        setPromo({ ...Promo, discount: e.target.value })
    }


    function SubmitButton() {
        const { pending } = useFormStatus();

        return (
            <button 
            type="submit"
            className="inline-flex items-center text-white rounded-lg bg-blue-600 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-lg leading-5 text-lg px-4 py-2.5 focus:outline-none"
            >
            {pending ? "Menyimpan..." : "Update Promo"}
            </button>
        )
    }
    
    useEffect(() => {
        loadPromo();
    }, []);

    const loadPromo = async () => {
        try {
            const Promos = await getPromos(id)
            console.log(Promos)
            if (Array.isArray(Promos) && Promos.length > 0) {
                const p = Promos[0]
                    setPromo({
                    id: p.id,
                    name: p.name,
                    description: p.description,
                    discount: p.discount,
                })
            }
        } catch (error) {
            console.error("Error loading Promo:", error);
        }
    }


    useEffect(() => {
        if (Promo) {
            setLoading(false);
        }
    }, [Promo]);

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
            <Link href="/admin/promos" className="text-2xl font-bold mb-4 flex flex-row items-center gap-2"><ArrowLeft/>Edit Promo</Link>
            <form action={updatePromo} className="space-y-4">
                <div className="hidden">
                    <label htmlFor="id" className="block mb-1">Id:</label>
                    <input 
                    type="number" 
                    id="id" 
                    name="id" 
                    className="border p-2 rounded w-full"
                    value={Promo.id}
                    onChange={(e) => Promo.id}
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
                    value={Promo.name}
                    onChange={(e) => setPromo({ ...Promo, name: e.target.value })}
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
                    value={Promo.description}
                    onChange={(e) => setPromo({ ...Promo, description: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="discount" className="block mb-1">Discount:</label>
                    <input 
                    type="text" 
                    id="discount" 
                    name="discount" 
                    required
                    className="border p-2 rounded w-full"
                    value={value ? formatRupiahInput(value) : formatRupiahInput(Promo.discount)}
                    onChange={handleChange}
                    />
                </div>
                <SubmitButton />
            </form>
        </div>
  )
}
