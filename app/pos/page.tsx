'use client'

import { useEffect, useState } from "react";
import { getProducts, createSales, getPromos } from "./_actions/pos"
import Link from "next/link"
import { RefreshCw, Search, ShoppingCart, Slack, GlassWater, Utensils, Trash2, Grid2X2 } from 'lucide-react';
import { useRouter } from "next/navigation";
import { Button, Drawer, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Avatar, Badge, Space, Switch } from 'antd';



export default function PosPage() {
    type CartItem = {
        id: number;
        name: string;
        price: number;
        qty: number;
    };
    const [menu, setMenu] = useState(1);
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState<any[]>([]);
    const [promos, setPromos] = useState<any[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [cart, setCart] = useState<CartItem[]>([]);
    const [totalAll, setTotalAll] = useState(0);
    const [tax, setTax] = useState(0.1);
    const [cartLoading, setCartLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [discount, setDiscount] = useState(0);
    const [open, setOpen] = useState(false);
    const [count, setCount] = useState(0);
    const [modal, contextHolder] = Modal.useModal();

    const countDown = () => {
        let secondsToGo = 5;

        const instance = modal.success({
            title: 'Payment Successful',
            content: (
                <>
                    <div>
                        Total: {formatRupiah(
                            (totalAll - discount) +
                            ((totalAll - discount) * tax)
                        )}
                    </div>
                    <div>
                        This modal will be closed after {secondsToGo} second.
                    </div>
                </>
            ),
        });

        const timer = setInterval(() => {
            secondsToGo -= 1;
            instance.update({
                content: (
                    <>
                        <div>
                            Total: {formatRupiah(
                                (totalAll - discount) +
                                ((totalAll - discount) * tax)
                            )}
                        </div>
                        <div>
                            This modal will be closed after {secondsToGo} second.
                        </div>
                    </>
                ),
            });
        }, 1000);

        setTimeout(() => {
            clearInterval(timer);
            instance.destroy();
        }, secondsToGo * 1000);
    };

    const confirm = () => {
        modal.confirm({
        title: 'Confirm',
        icon: <ExclamationCircleOutlined />,
        content: 'Are you sure you want to submit this order?',
        okText: 'Pay',
        cancelText: 'Cancel',
        onOk: () => handleSales(),
        });
    };

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        const storedCart = localStorage.getItem("cart");

        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }

        setCount(cart.reduce((total, item) => total + item.qty, 0));

        setCartLoading(false);
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        setCount(cart.reduce((total, item) => total + item.qty, 0));
    }, [cart]);

    useEffect(() => {
        loadProducts();
    }, [menu]);

    useEffect(() => {
        loadPromos();
    },[]);

    const addToCart = (product: any) => {
        setCart(CurrentCart => {
            const existingItem = CurrentCart.find(item => item.id === product.id);
            
            if (existingItem) {
                return CurrentCart.map(item =>
                    item.id === product.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                );
            }

            
            return [...CurrentCart, { ...product, qty: 1 }];
        });
    };

    const removeOneFromCart = (product: any) => {
        setCart(CurrentCart => {
            const existingItem = CurrentCart.find(item => item.id == product.id);

            if (!existingItem) return CurrentCart;
            
            if (existingItem.qty === 1) {
                return CurrentCart.filter(item => item.id !== product.id);
            } else {
                return CurrentCart.map(item =>
                    item.id === product.id
                        ? { ...item, qty: item.qty - 1 }
                        : item
                );
            }
        });
    };

    const removeFromCart = (id: number) => {
        setCart(CurrentCart =>
            CurrentCart.filter((item) => item.id !== id)
        );
    };

    const removeAll = () => {
        setCart([]);
    }

    useEffect(() => {
        const newTotal = cart.reduce(
            (total, item) => total + item.price * item.qty,
            0
        );

        setTotalAll(newTotal);
    }, [cart]);



    const formatRupiah = (amount: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount);
    };
    
    const loadProducts = async () => {
        setLoading(true);
        try {
            let products

            if (menu === -1) {
                products = await getProducts();
            } else {
                products = await getProducts(menu);
            }

            if (!products || !Array.isArray(products)) {
                setProducts([]);
                return;
            }
            const formattedProducts = Array.isArray(products)
                ? products.map((product: any) => ({
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    category_id: product.categories?.name,
                    image: '/images/' + product.image
                }))
                : [];

            setProducts(formattedProducts);
        } catch (error) {
            console.error("Error loading products:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleSales = async () => {
        setIsSubmitting(true)

        try {
            const result = await createSales(cart, totalAll, tax, discount)
            
            if (result.success) {
                setCart([])
                localStorage.removeItem('cart')
                countDown()
            } else {
                alert(result.message || 'Gagal memproses transaksi')
            }
        } catch (error) {
            console.error('Error processing sales:', error)
            alert('Terjadi kesalahan saat memproses transaksi')
        } finally {
            setIsSubmitting(false)
        }
    }


    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const loadPromos = async () => {
        setLoading(true);
        try {
            const promos = await getPromos();
            const formattedPromos = Array.isArray(promos)
                ? promos.map((promo: any) => ({
                    id: promo.id,
                    name: promo.name,
                    discount: promo.discount,
                }))
                : [];

            setPromos(formattedPromos);
        } catch (error) {
            console.error("Error loading promos:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex w-full bg-gray-white h-screen antialiased text-gray-800">
            <div className="w-1/12 bg-cyan-500 p-4 rounded-r-3xl flex flex-col items-center">
                <div className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 bg-white rounded-full mb-10 flex items-center justify-center"><Slack className="text-blue-400 h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8"/></div>
                <div className="space-y-4">
                    <button onClick={() => setMenu(-1)} className={`h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-2xl ${menu === -1 ? 'bg-cyan-300' : 'bg-cyan-400'} flex items-center justify-center active:scale-95 transition-transform`}>
                        <Grid2X2 className="text-white h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"/>
                    </button>
                    <button onClick={() => setMenu(1)} className={`h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-2xl ${menu === 1 ? 'bg-cyan-300' : 'bg-cyan-400'} flex items-center justify-center active:scale-95 transition-transform`}>
                        <Utensils className="text-white h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"/>
                    </button>
                    <button onClick={() => setMenu(2)} className={`h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-2xl ${menu === 2 ? 'bg-cyan-300' : 'bg-cyan-400'} flex items-center justify-center active:scale-95 transition-transform`}>
                        <GlassWater className="text-white h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"/>
                    </button>
                </div>
            </div>
            <div className="flex w-11/12 flex-row">
                <div className="flex flex-col lg:w-8/12 w-full p-4 bg-gray-50">
                    <div className="w-full flex flex-row justify-between items-center mb-4">
                        <div className="flex flex-row items-center gap-4 w-13/16 h-14 rounded-3xl shadow px-6 text-lg ">
                            <Search/>
                            <input
                            type="text"
                            placeholder="Cari menu..."
                            className="w-full focus:outline-none"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <button onClick={showDrawer}>
                            <Badge count={count} className="lg:hidden! flex! items-center justify-center">
                                <Avatar shape="square" size="large" className="bg-cyan-500! flex items-center justify-center">
                                    <ShoppingCart className="h-6 w-6"/>
                                </Avatar>
                            </Badge>
                        </button>
                    </div>
                    <div className="grid lg:grid-cols-2 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 xl:grid-cols-3  gap-4 w-full">
                        {loading ? (
                            <div className="p-6">
                                <div className="bg-white rounded-lg shadow p-8 text-center">
                                    <RefreshCw className="w-8 h-8 animate-spin mx-auto text-gray-400 mb-2" />
                                    <p className="text-gray-500">Memuat data...</p>
                                </div>
                            </div>
                        ) : (
                            filteredProducts.map((product) => (
                                <button onClick={() => addToCart({
                                    id: product.id,
                                    name: product.name,
                                    price: product.price
                                })} key={product.id} className="bg-white rounded-2xl shadow hover:shadow-lg cursor-pointer">
                                    <div className="h-32 bg-gray-200 rounded-t-2xl">
                                        <img src={product.image} alt={product.name} className="h-full w-full object-cover rounded-t-2xl"/>
                                    </div>
                                    <div className="p-3 text-sm flex justify-between">
                                    <span>{product.name}</span>
                                    <span className="font-semibold">{formatRupiah(product.price)}</span>
                                    </div>
                                </button>
                            ))
                        )}
                    </div>
                </div>
                <div className="lg:flex  w-6/12 hidden flex-col bg-gray-50 h-full pr-4 pl-2 py-4">
                    <div className="bg-white rounded-3xl flex flex-col h-full shadow">
                        {cartLoading ? (
                        <div className="p-6 h-full flex items-center justify-center">
                            <div className="bg-white rounded-lg shadow p-8 text-center">
                                <RefreshCw className="w-8 h-8 animate-spin mx-auto text-gray-400 mb-2" />
                                <p className="text-gray-500">Memuat data...</p>
                            </div>
                        </div>
                        ):(
                            cart.length === 0 && (
                            <div className="flex-1 w-full p-4 opacity-25 select-none flex flex-col flex-wrap content-center justify-center items-center">
                                <ShoppingCart className="h-16 w-16" />
                                <p>CART EMPTY</p>
                            </div>
                            )
                        )}

                        {cart.length > 0 && (
                        <div className="flex-1 flex flex-col overflow-auto">
                            <div className="h-16 flex justify-between items-center px-6">
                                <div className="flex items-center gap-2 text-lg">
                                    <ShoppingCart className="h-6 w-6" />
                                    <span>CART</span>
                                </div>
                                <button onClick={() => removeAll()} className="text-gray-400 hover:text-pink-500">
                                    Clear
                                </button>
                            </div>

                            <div className="flex-1 w-full px-4 overflow-auto">
                            {cart.map(item => (
                                <div key={item.id} className="select-none mb-3 bg-gray-100 rounded-lg w-full text-gray-700 py-2 px-2 flex items-center">
                                    <div className="flex-grow">
                                        <h5 className="text-sm">{item.name}</h5>
                                        <p className="text-xs">{formatRupiah(item.price)}</p>
                                    </div>

                                    <div className="py-1">
                                        <div className="w-28 grid grid-cols-3 gap-2 ml-2">
                                        <button onClick={() => removeOneFromCart({...item})} className="rounded-lg text-center py-1 text-white bg-gray-600">
                                            -
                                        </button>
                                        <input value={item.qty} readOnly className="bg-white rounded-lg text-center shadow text-sm"/>
                                        <button onClick={() => addToCart({...item})} className="rounded-lg text-center py-1 text-white bg-gray-600">
                                            +
                                        </button>
                                        </div>
                                    </div>

                                    <div className="w-24 text-right text-sm font-semibold ml-4">
                                        {formatRupiah(item.price * item.qty)}
                                    </div>

                                    <button onClick={() => removeFromCart(item.id)} className="ml-3 text-red-500">
                                        <Trash2 className="w-5 h-5"/>
                                    </button>
                                </div>
                            ))}
                            </div>
                        </div>
                        )}
                        <div className="w-full flex justify-center mt-2 mb-5">
                            <div className="select-none h-auto w-9/10 text-center pt-3 pb-4 px-4 bg-gray-50 shadow-lg rounded-lg">
                                <div className="flex mb-3 font-semibold text-gray-700 flex-col w-full space-y-4 text-sm">
                                    <div className="flex items-center justify-between">
                                        <label className="font-medium text-gray-600">Discount</label>
                                        <select defaultValue={0} name="discount" id="discount" onChange={(e) => setDiscount(Number(e.target.value))} className="border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                            <option value={0}>None</option>
                                            {promos.map((promo) => (
                                                <option key={promo.id} value={promo.discount}>
                                                    {promo.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="flex justify-between text-gray-600">
                                        <span>Subtotal</span>
                                        <span className="font-medium">
                                            {formatRupiah(totalAll)}
                                        </span>
                                    </div>

                                    <div className="flex justify-between text-red-500">
                                        <span>Discount</span>
                                        <span>
                                            - {formatRupiah(discount)}
                                        </span>
                                    </div>

                                    <div className="flex justify-between text-gray-600">
                                        <span>Tax 10%</span>
                                        <span>
                                            {formatRupiah((totalAll - discount) * tax)}
                                        </span>
                                    </div>

                                    <div className="border-t pt-3"></div>

                                    <div className="flex justify-between text-lg font-semibold">
                                        <span>Total</span>
                                        <span className="text-blue-600">
                                            {formatRupiah(
                                                (totalAll - discount) +
                                                ((totalAll - discount) * tax)
                                            )}
                                        </span>
                                    </div>
                                </div>
                                <button onClick={confirm} disabled={isSubmitting || cart.length === 0  || totalAll <= discount} className={`text-white rounded-2xl text-lg w-full py-3 ${isSubmitting || cart.length === 0 || totalAll <= discount ? 'bg-gray-400 cursor-not-allowed' : 'bg-cyan-500 hover:bg-cyan-600'} transition-colors flex items-center justify-center gap-2`}>
                                    {isSubmitting ? (
                                        <>
                                            <RefreshCw className="w-5 h-5 animate-spin" />
                                            MEMPROSES...
                                        </>
                                    ) : (
                                        'SUBMIT'
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>        
                </div>
            </div>
            <Drawer title="Cart" closable={{ 'aria-label': 'Close Button' }} onClose={onClose} open={open} size={500}>
                <div className="w-full flex justify-end mb-5">
                    <button onClick={() => removeAll()} className="text-gray-400 hover:text-pink-500">
                        Clear
                    </button>
                </div>
                
                <div className="flex flex-col h-full">
                    {cartLoading ? (
                    <div className="p-6 h-full flex items-center justify-center">
                        <div className="bg-white rounded-lg shadow p-8 text-center">
                            <RefreshCw className="w-8 h-8 animate-spin mx-auto text-gray-400 mb-2" />
                            <p className="text-gray-500">Memuat data...</p>
                        </div>
                    </div>
                    ):(
                        cart.length === 0 && (
                        <div className="h-75 w-full p-4 opacity-25 select-none flex flex-col flex-wrap content-center justify-center items-center">
                            <ShoppingCart className="h-16 w-16" />
                            <p>CART EMPTY</p>
                        </div>
                        )
                    )}

                    {cart.length > 0 && (
                        <div className="flex flex-col w-full px-4 overflow-auto h-75">
                        {cart.map(item => (
                            <div key={item.id} className="select-none mb-3 bg-gray-100 rounded-lg w-full text-gray-700 py-2 px-2 flex items-center">
                                <div className="flex-grow">
                                    <h5 className="text-sm">{item.name}</h5>
                                    <p className="text-xs">{formatRupiah(item.price)}</p>
                                </div>

                                <div className="py-1">
                                    <div className="w-28 grid grid-cols-3 gap-2 ml-2">
                                    <button onClick={() => removeOneFromCart({...item})} className="rounded-lg text-center py-1 text-white bg-gray-600">
                                        -
                                    </button>
                                    <input value={item.qty} readOnly className="bg-white rounded-lg text-center shadow text-sm"/>
                                    <button onClick={() => addToCart({...item})} className="rounded-lg text-center py-1 text-white bg-gray-600">
                                        +
                                    </button>
                                    </div>
                                </div>

                                <div className="w-24 text-right text-sm font-semibold ml-4">
                                    {formatRupiah(item.price * item.qty)}
                                </div>

                                <button onClick={() => removeFromCart(item.id)} className="ml-3 text-red-500">
                                    <Trash2 className="w-5 h-5"/>
                                </button>
                            </div>
                        ))}
                        </div>
                    )}
                    <div className="select-none h-auto w-full text-center pt-3 pb-4 px-4 bg-gray-50 shadow-lg rounded-lg mt-5">
                        <div className="flex mb-3 font-semibold text-gray-700 flex-col w-full space-y-4 text-sm">
                            <div className="flex items-center justify-between">
                                <label className="font-medium text-gray-600">Discount</label>
                                <select defaultValue={0} name="discount" id="discount" onChange={(e) => setDiscount(Number(e.target.value))} className="border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option value={0}>None</option>
                                    {promos.map((promo) => (
                                        <option key={promo.id} value={promo.discount}>
                                            {promo.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span className="font-medium">
                                    {formatRupiah(totalAll)}
                                </span>
                            </div>

                            <div className="flex justify-between text-red-500">
                                <span>Discount</span>
                                <span>
                                    - {formatRupiah(discount)}
                                </span>
                            </div>

                            <div className="flex justify-between text-gray-600">
                                <span>Tax 10%</span>
                                <span>
                                    {formatRupiah((totalAll - discount) * tax)}
                                </span>
                            </div>

                            <div className="border-t pt-3"></div>

                            <div className="flex justify-between text-lg font-semibold">
                                <span>Total</span>
                                <span className="text-blue-600">
                                    {formatRupiah(
                                        (totalAll - discount) +
                                        ((totalAll - discount) * tax)
                                    )}
                                </span>
                            </div>
                        </div>
                        <button onClick={confirm} disabled={isSubmitting || cart.length === 0  || totalAll <= discount} className={`text-white rounded-2xl text-lg w-full py-3 ${isSubmitting || cart.length === 0 || totalAll <= discount ? 'bg-gray-400 cursor-not-allowed' : 'bg-cyan-500 hover:bg-cyan-600'} transition-colors flex items-center justify-center gap-2`}>
                            {isSubmitting ? (
                                <>
                                    <RefreshCw className="w-5 h-5 animate-spin" />
                                    MEMPROSES...
                                </>
                            ) : (
                                'SUBMIT'
                            )}
                        </button>
                    </div>
                </div>        
            </Drawer>
            {contextHolder}
        </div>
    )
}