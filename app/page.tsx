'use client'

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="w-full h-full flex items-center justify-center text-3xl">
      <button onClick={() => router.push('/pos')} className="w-[200px] h-[200px] flex items-center justify-center text-white m-2 p-2 bg-blue-400 rounded-xl">
        POS
      </button>
      <button onClick={() => router.push('/admin/sales')} className="w-[200px] h-[200px] flex items-center justify-center text-white m-2 p-2 bg-blue-400 rounded-xl">
        ADMIN
      </button>
      <button onClick={() => router.push('/employee/order')} className="w-[200px] h-[200px] flex items-center justify-center text-white m-2 p-2 bg-blue-400 rounded-xl">
        KITCHEN
      </button>
    </div>
  );
}
