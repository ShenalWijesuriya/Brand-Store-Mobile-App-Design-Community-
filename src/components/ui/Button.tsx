import * as React from "react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline" | "ghost" | "icon";
    fullWidth?: boolean;
    href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", fullWidth, children, href, ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center rounded-3xl font-medium transition-colors focus-visible:outline-4 focus-visible:outline-primary/50 disabled:pointer-events-none disabled:opacity-50 cursor-pointer active:scale-95 transition-transform duration-100";

        const variants = {
            primary: "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-orange-500/20",
            outline: "border border-gray-300 bg-transparent text-gray-900 hover:bg-gray-50",
            ghost: "text-gray-600 hover:text-gray-900 hover:bg-gray-100/50",
            icon: "p-2 rounded-full hover:bg-black/5 text-gray-700 aspect-square"
        };

        const sizes = variant === "icon" ? "h-10 w-10 text-xl" : "h-12 px-8 text-base";

        const combinedClassName = twMerge(
            baseStyles,
            variants[variant],
            sizes,
            fullWidth && "w-full",
            className
        );

        if (href) {
            // Check if disabled is passed, implying we might want to prevent navigation or style it.
            // For now, Next.js Link doesn't support 'disabled' attribute natively on the anchor mostly.
            // We pass props to allow aria-labels etc.
            return (
                <Link href={href} className={combinedClassName} {...(props as any)}>
                    {children}
                </Link>
            );
        }

        return (
            <button
                ref={ref}
                className={combinedClassName}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";
