"use client";

import { cn } from "@/lib/utils";

interface ColorSelectorProps {
    colors: string[];
    selectedColor: string | null;
    onSelect: (color: string) => void;
}

export const ColorSelector = ({ colors, selectedColor, onSelect }: ColorSelectorProps) => {
    return (
        <div className="flex flex-col gap-3">
            <span className="font-semibold text-gray-900">Color</span>
            <div className="flex flex-wrap gap-4">
                {colors.map((color) => (
                    <button
                        key={color}
                        onClick={() => onSelect(color)}
                        className={cn(
                            "relative flex h-8 w-8 items-center justify-center rounded-full transition-all",
                            selectedColor === color ? "ring-2 ring-primary ring-offset-2" : ""
                        )}
                        style={{ backgroundColor: color }}
                        aria-label={`Select color ${color}`}
                        type="button"
                    >
                    </button>
                ))}
            </div>
        </div>
    );
};
