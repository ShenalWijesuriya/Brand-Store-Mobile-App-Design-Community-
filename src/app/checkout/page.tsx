"use client";

import Link from "next/link";
import { ChevronLeft, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/lib/CartContext";

export default function CheckoutPage() {
    const { items } = useCart();

    const subtotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);
    const delivery = 12.00;
    const total = subtotal + delivery;

    return (
        <div className="min-h-screen bg-white px-5 pt-8 pb-10">
            {/* Header */}
            <header className="mb-8 flex items-center justify-between">
                <Link href="/cart" className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100">
                    <ChevronLeft size={24} className="text-gray-900" />
                </Link>
                <span className="text-lg font-bold text-gray-900">Checkout</span>
                <div className="w-10"></div>
            </header>

            {/* Delivery Address */}
            <div className="mb-8">
                <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-sm text-gray-400">Delivery Address</h3>
                    <button className="text-sm font-medium text-gray-900">Change</button>
                </div>

                <div className="flex items-start gap-4 rounded-2xl p-0">
                    <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100">
                        <MapPin className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    </div>
                    <div>
                        <p className="font-bold text-gray-900">25/3 Housing Estate,</p>
                        <p className="font-bold text-gray-900">Sylhet</p>
                    </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                    <Clock size={16} />
                    <span>Delivered in next 7 days</span>
                </div>
            </div>

            {/* Payment Method */}
            <div className="mb-8">
                <h3 className="mb-4 text-sm text-gray-400">Payment Method</h3>
                <div className="flex gap-4 overflow-x-auto py-2">
                    <div className="flex h-10 w-16 items-center justify-center rounded border font-bold text-blue-800 italic">VISA</div>
                    <div className="flex h-10 w-16 items-center justify-center rounded border font-bold text-blue-500">Amex</div>
                    <div className="flex h-10 w-16 items-center justify-center rounded border font-bold text-red-500">Master</div>
                    <div className="flex h-10 w-16 items-center justify-center rounded border font-bold text-indigo-500">Pay</div>
                </div>
            </div>

            <div className="mb-8 rounded-2xl bg-gray-50 p-4 text-center text-gray-400 border border-dashed border-gray-200">
                Add Voucher
            </div>

            <div className="mb-8 text-xs text-red-400 leading-relaxed">
                <span className="font-bold text-red-500">Note :</span> Use your order id at the payment. Your Id #154619 if you forget to put your order id we can't confirm the payment.
            </div>

            {/* Summary */}
            <div className="space-y-3">
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

            <div className="mt-8">
                <Button fullWidth className="rounded-full py-6 text-lg shadow-xl shadow-orange-500/25">
                    Pay Now
                </Button>
            </div>

        </div>
    );
}
