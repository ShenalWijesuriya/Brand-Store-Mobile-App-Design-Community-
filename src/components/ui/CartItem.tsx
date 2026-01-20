import Image from "next/image";
import { Trash2 } from "lucide-react";

interface CartItemProps {
    item: {
        id?: string; // Product ID
        name: string;
        description?: string; // e.g. "Yellow, Size 8" from ref, but we use size/color
        price: number;
        image: string;
        size: string;
        color: string;
        qty: number;
    };
}

import { useCart } from "@/lib/CartContext";

export const CartItem = ({ item }: CartItemProps) => {
    const { removeFromCart } = useCart();

    return (
        <div className="flex items-center gap-4 py-4">
            <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl bg-gray-100">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
            </div>

            <div className="flex flex-1 flex-col justify-center">
                <div className="flex justify-between items-start">
                    <h3 className="font-bold text-gray-900 line-clamp-2 pr-4">{item.name}</h3>
                    <button
                        onClick={() => item.id && removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                    >
                        <Trash2 size={18} />
                    </button>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                    Color: <span style={{ color: item.color }}>●</span> • Size {item.size}
                </p>
                <div className="mt-2 flex items-center justify-between">
                    <span className="font-bold text-gray-900">${item.price.toFixed(2)}</span>
                    <div className="flex items-center gap-2">
                        <span className="text-gray-500 font-medium">Qty: {item.qty}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
