import { PRODUCTS } from "@/lib/data";
import { ProductDetails } from "@/components/ProductDetails";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
    return PRODUCTS.map((product) => ({
        id: product.id,
    }));
}

export default async function ProductPage({ params }: PageProps) {
    const { id } = await params;
    const product = PRODUCTS.find((p) => p.id === id);

    if (!product) {
        notFound();
    }

    return <ProductDetails product={product} />;
}
