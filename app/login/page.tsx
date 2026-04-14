'use client'

import { Suspense } from 'react'
import { useSearchParams, useRouter } from "next/navigation"
import { signIn } from "next-auth/react"

function LoginForm() {
    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get("callbackUrl") || "/"
    const router = useRouter();

    const handleLogin = async () => {
        await signIn("google", {
            callbackUrl,
        })
    }

    return (
        <div className="w-full h-full flex items-center justify-center flex-col">
            <div>
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Please sign in to continue
                </h1>
            </div>
            <div className="flex items-center flex-row">
                <button 
                    onClick={() => router.push('/')} 
                    className="flex items-center justify-center text-white m-2 px-4 py-2 bg-blue-400 rounded-md"
                >
                    Home
                </button>
                <button 
                    onClick={handleLogin} 
                    className="bg-black text-white px-4 py-2 rounded-md"
                >
                    Login dengan Google
                </button>
            </div>
        </div>
    )
}

export default function Login() {
    return (
        <Suspense fallback={
            <div className="flex items-center justify-center h-screen">
                <p className="text-gray-500">Loading...</p>
            </div>
        }>
            <LoginForm />
        </Suspense>
    )
}