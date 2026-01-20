"use client";

import { useState } from "react";
import { Search as SearchIcon, X } from "lucide-react";
import { ProductCard } from "@/components/ui/ProductCard";
import { PRODUCTS } from "@/lib/data";

export default function SearchPage() {
    const [query, setQuery] = useState("");

    const filteredProducts = PRODUCTS.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <main className="min-h-screen px-5 pt-8 pb-32">
            <h1 className="mb-6 text-3xl font-bold text-gray-900">Search</h1>

            {/* Search Input */}
            <div className="relative mb-8">
                <SearchIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search products..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="h-12 w-full rounded-2xl border border-gray-200 bg-gray-50 pl-12 pr-10 text-base text-gray-900 outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-gray-400"
                    autoFocus
                />
                {query && (
                    <button
                        onClick={() => setQuery("")}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                        <X size={18} />
                    </button>
                )}
            </div>

            {/* Results */}
            <div className="space-y-6">
                {query ? (
                    <>
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-bold text-gray-900">
                                Results for "{query}"
                            </h2>
                            <span className="text-sm text-gray-500">
                                {filteredProducts.length} found
                            </span>
                        </div>

                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                                {filteredProducts.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-12 text-center text-gray-500">
                                <SearchIcon className="mb-4 h-12 w-12 opacity-20" />
                                <p>No products found matching "{query}"</p>
                            </div>
                        )}
                    </>
                ) : (
                    /* Initial State Suggestions */
                    <div>
                        <h2 className="mb-4 text-lg font-bold text-gray-900">Discover</h2>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                            {/* Show random or top products initially? Let's show all for now or just a few */}
                            {PRODUCTS.slice(0, 4).map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
