import { Product } from "@/types";

export const PRODUCTS: Product[] = [
    {
        id: "1",
        name: "Premium Tangerine Shirt",
        category: "Men",
        price: 257.85,
        images: ["/images/p1.png"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["#F59E0B", "#1F2937", "#9CA3AF"],
        description: "A premium quality tangerine shirt for casual wear."
    },
    {
        id: "2",
        name: "Leather Coort",
        category: "Women",
        price: 325.36,
        images: ["/images/p2.png"],
        sizes: ["S", "M", "L"],
        colors: ["#78350F", "#000000"],
        description: "Stylish leather coat perfect for winter."
    },
    {
        id: "3",
        name: "Tangerine Shirt",
        category: "Men",
        price: 240.32,
        images: ["/images/p3.png"],
        sizes: ["M", "L", "XL"],
        colors: ["#F59E0B"],
        description: "Classic tangerine shirt."
    },
    {
        id: "4",
        name: "Leather Coort",
        category: "Women",
        price: 257.85,
        images: ["/images/p4.png"],
        sizes: ["S", "M"],
        colors: ["#78350F"],
        description: "Elegant leather coat."
    },
    {
        id: "5",
        name: "Regular Fit Shirt",
        category: "Men",
        price: 126.47,
        images: ["/images/p5.png"],
        sizes: ["S", "M", "L", "XL"],
        colors: ["#FFFFFF", "#000000"],
        description: "Everyday regular fit shirt."
    },
    {
        id: "6",
        name: "Summer Dress",
        category: "Women",
        price: 180.00,
        images: ["/images/p6.png"],
        sizes: ["XS", "S", "M"],
        colors: ["#EC4899", "#F472B6"],
        description: "Lightweight summer dress."
    }
];

export const CATEGORIES = ["All", "Men", "Women", "Kids", "Other"];
