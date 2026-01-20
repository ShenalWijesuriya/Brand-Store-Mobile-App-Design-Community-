"use client";

import { cn } from "@/lib/utils";

interface SizeSelectorProps {
    sizes: string[];
    selectedSize: string | null;
    onSelect: (size: string) => void;
}

export const SizeSelector = ({ sizes, selectedSize, onSelect }: SizeSelectorProps) => {
    return (
        <div className="flex flex-col gap-3">
            <span className="font-semibold text-gray-900">Size</span>
            <div className="flex flex-wrap gap-3">
                {sizes.map((size) => (
                    <button
                        key={size}
                        onClick={() => onSelect(size)}
                        className={cn(
                            "flex h-12 w-12 items-center justify-center rounded-full border text-sm font-medium transition-all",
                            selectedSize === size
                                ? "border-transparent bg-gray-900 text-white shadow-lg"
                                : "border-gray-200 bg-white text-gray-500 hover:border-gray-300 hover:text-gray-900"
                        )}
                        type="button"
                    >
                        {size}
                    </button>
                ))}
            </div>
        </div>
    );
};
