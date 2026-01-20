import Link from "next/link";
import Image from "next/image";
import { Plus, ShoppingBag } from "lucide-react";
import { Product } from "@/types";

interface ProductCardProps {
    product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div className="group relative flex flex-col gap-2">
            {/* Image Container */}
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-gray-100">
                <Link href={`/product/${product.id}`}>
                    <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </Link>
                <button className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white hover:bg-gray-800">
                    <ShoppingBag size={14} />
                </button>
            </div>

            {/* Details */}
            <div className="flex flex-col">
                <div className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</div>
                <Link href={`/product/${product.id}`} className="text-sm text-gray-500 line-clamp-1 hover:text-gray-900">
                    {product.name}
                </Link>
            </div>
        </div>
    );
};
