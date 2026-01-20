"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CartItem } from "@/components/ui/CartItem";
import { useCart } from "@/lib/CartContext";

export default function CartPage() {
    const { items } = useCart();

    // Group items or just list them (API is simple list, lets just list)
    // Actually API returns session cart details. 
    // We can calculate totals here.

    const subtotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);
    const delivery = 12.00;
    const total = subtotal + delivery;

    return (
        <main className="min-h-screen px-5 pt-8 pb-24">
            {/* Header */}
            <header className="mb-6 flex items-center gap-4">
                <Link href="/explore" className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100">
                    <ChevronLeft size={24} className="text-gray-900" />
                </Link>
                <h1 className="text-xl font-bold text-gray-900">Cart</h1>
            </header>

            <h2 className="mb-6 text-2xl font-bold">My Orders</h2>

            {/* Cart List */}
            <div className="flex flex-col divide-y divide-gray-100">
                {items.length === 0 ? (
                    <div className="py-10 text-center text-gray-500">
                        Your cart is empty.
                    </div>
                ) : (
                    items.map((item, idx) => (
                        <CartItem key={item.id || idx} item={item} />
                    ))
                )}
            </div>

            {/* Summary */}
            {items.length > 0 && (
                <div className="mt-8 space-y-3 border-t border-gray-100 pt-6">
                    <div className="flex justify-between text-gray-500">
                        <span>Total Items ({items.length})</span>
                        <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-500">
                        <span>Standard Delivery</span>
                        <span className="font-medium text-gray-900">${delivery.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold text-gray-900 mt-4">
                        <span>Total Payment</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                </div>
            )}

            {items.length > 0 && (
                <div className="mt-8">
                    <Button href="/checkout" fullWidth className="rounded-full py-6 text-lg shadow-xl shadow-orange-500/25">
                        Checkout Now
                    </Button>
                </div>
            )}
        </main>
    );
};
