"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { CartItem } from "@/types";

interface CartContextType {
    items: CartItem[];
    addToCart: (item: Omit<CartItem, "qty">) => Promise<void>;
    removeFromCart: (itemId: string) => void;
    isLoading: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    // Fetch cart on mount
    useEffect(() => {
        const fetchCart = async () => {
            try {
                const res = await fetch("/api/cart");
                const data = await res.json();
                if (data.cart) {
                    setItems(data.cart);
                }
            } catch (error) {
                console.error("Failed to fetch cart:", error);
            }
        };
        fetchCart();
    }, []);

    const addToCart = async (newItem: Omit<CartItem, "qty">) => {
        setIsLoading(true);
        // Optimistic update
        const tempItem = { ...newItem, qty: 1 };
        setItems((prev) => [...prev, tempItem]);

        try {
            const res = await fetch("/api/cart", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newItem),
            });

            const data = await res.json();
            if (data.success && data.cart) {
                setItems(data.cart);
            }
        } catch (error) {
            console.error("Failed to add to cart:", error);
            // Revert on failure (simplified)
        } finally {
            setIsLoading(false);
        }
    };

    const removeFromCart = async (itemId: string) => {
        // Optimistic update
        setItems((prev) => prev.filter((i) => i.id !== itemId));

        try {
            await fetch("/api/cart", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ itemId }),
            });
        } catch (error) {
            console.error("Failed to remove from cart:", error);
            // Revert could be here, but for now we assume success
        }
    };

    return (
        <CartContext.Provider value={{ items, addToCart, removeFromCart, isLoading }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
