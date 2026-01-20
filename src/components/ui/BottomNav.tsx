"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, ShoppingBag, Settings } from "lucide-react";

export const BottomNav = () => {
    const pathname = usePathname();

    const navItems = [
        { icon: Home, label: "Home", href: "/explore" },
        { icon: Search, label: "Search", href: "/search" },
        { icon: ShoppingBag, label: "Cart", href: "/cart" },
        { icon: Settings, label: "Settings", href: "/settings" },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white pb-safe">
            <div className="flex h-16 items-center justify-around px-2">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`flex flex-col items-center justify-center gap-1 ${isActive ? "text-primary" : "text-gray-400 hover:text-gray-600"
                                }`}
                        >
                            <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                            {isActive && (
                                <span className="text-[10px] font-medium">•</span>
                            )}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};
