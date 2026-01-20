"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Bookmark } from "lucide-react";
import { toast } from "sonner";
import { Product } from "@/types";
import { SizeSelector } from "@/components/ui/SizeSelector";
import { ColorSelector } from "@/components/ui/ColorSelector";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/lib/CartContext";

interface ProductDetailsProps {
    product: Product;
}

export const ProductDetails = ({ product }: ProductDetailsProps) => {
    const [selectedSize, setSelectedSize] = useState<string | null>(product.sizes[0] || null);
    const [selectedColor, setSelectedColor] = useState<string | null>(product.colors[0] || null);
    const { addToCart, isLoading } = useCart();

    const handleAddToCart = async () => {
        if (!selectedSize || !selectedColor) {
            toast.error("Please select a size and color");
            return;
        }

        await addToCart({
            productId: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0],
            size: selectedSize,
            color: selectedColor,
        });

        const toastId = `cart-${product.id}`;
        toast.success(
            <div
                onClick={() => toast.dismiss(toastId)}
                className="cursor-pointer -m-4 p-4" // Negative margin to expand click area
                role="button"
                tabIndex={0}
            >
                Successfully added {product.name} to cart!
            </div>,
            {
                id: toastId,
                description: "Click to dismiss",
                duration: 3000,
            }
        );
    };

    return (
        <div className="relative min-h-screen bg-gray-50 pb-24">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-4">
                <Link href="/explore" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow-sm backdrop-blur-sm hover:bg-white">
                    <ChevronLeft size={24} className="text-gray-900" />
                </Link>
                {/* Removed "Details" text to prevent obstruction of product image */}
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow-sm backdrop-blur-sm hover:bg-white">
                    <Bookmark size={20} className="text-gray-900" />
                </button>
            </header>

            {/* Product Image */}
            <div className="relative h-[55vh] w-full bg-gray-200">
                <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover object-top"
                    priority
                />
            </div>

            {/* Content Sheet */}
            <div className="relative -mt-10 min-h-[50vh] rounded-t-[2.5rem] bg-white px-6 pt-10 shadow-xl">
                <div className="mb-6 flex items-start justify-between">
                    <h1 className="max-w-[70%] text-2xl font-bold leading-tight text-gray-900">
                        {product.name}
                    </h1>
                </div>

                <p className="mb-8 text-sm text-gray-500">{product.description}</p>

                {/* Selectors */}
                <div className="space-y-6">
                    <SizeSelector
                        sizes={product.sizes}
                        selectedSize={selectedSize}
                        onSelect={setSelectedSize}
                    />
                    <ColorSelector
                        colors={product.colors}
                        selectedColor={selectedColor}
                        onSelect={setSelectedColor}
                    />
                </div>

                {/* Spacer for fixed bottom bar */}
                <div className="h-24"></div>
            </div>

            {/* Fixed Bottom Action Bar */}
            <div className="fixed bottom-0 left-0 right-0 z-20 flex items-center justify-between gap-6 bg-white px-6 py-4 shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.1)]">
                <div className="flex flex-col">
                    <span className="text-sm text-gray-400">Price</span>
                    <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                </div>
                <Button
                    onClick={handleAddToCart}
                    disabled={isLoading}
                    className="flex-1 rounded-full px-8 py-4 text-lg shadow-xl shadow-orange-500/25"
                >
                    {isLoading ? "Adding..." : "Add To Cart"}
                </Button>
            </div>
        </div>
    );
};
