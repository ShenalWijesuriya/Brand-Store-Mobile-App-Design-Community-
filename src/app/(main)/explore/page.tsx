import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/ui/ProductCard";
import { PRODUCTS, CATEGORIES } from "@/lib/data";
import { Search } from "lucide-react";

export default function ExplorePage() {
    return (
        <main className="min-h-screen px-5 pt-8">
            {/* Header */}
            <header className="mb-6 flex items-center justify-between">
                {/* Custom 4-dot menu icon */}
                <button className="grid h-10 w-10 grid-cols-2 gap-1 rounded-full p-2 hover:bg-gray-100">
                    <span className="rounded-full bg-gray-800"></span>
                    <span className="rounded-full bg-gray-800"></span>
                    <span className="rounded-full bg-gray-800"></span>
                    <span className="rounded-full bg-gray-800"></span>
                </button>

                <div className="h-10 w-10 overflow-hidden rounded-full border border-gray-200 bg-gray-100">
                    {/* User Avatar Placeholder */}
                    <div className="h-full w-full bg-gray-300"></div>
                </div>
            </header>

            {/* Title */}
            <div className="mb-8">
                <h1 className="mb-1 text-3xl font-bold text-gray-900">Explore</h1>
                <p className="text-gray-500">Best trendy collection!</p>
            </div>

            {/* Categories */}
            <div className="no-scrollbar mb-8 flex gap-3 overflow-x-auto pb-1">
                {CATEGORIES.map((cat, i) => (
                    <button
                        key={cat}
                        className={`h-10 flex-shrink-0 rounded-full px-6 text-sm font-medium transition-colors ${i === 0
                                ? "bg-primary text-white shadow-lg shadow-orange-500/25"
                                : "bg-white text-gray-500 hover:bg-gray-50"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-6 pb-4">
                {PRODUCTS.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </main>
    );
}
