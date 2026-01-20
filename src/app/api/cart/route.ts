import { NextResponse } from "next/server";

// Simple in-memory cart store (per server instance)
let cartDetails: any[] = [];

export async function POST(request: Request) {
    const body = await request.json();
    const { productId, name, price, image, size, color, qty } = body;

    const newItem = {
        id: Math.random().toString(36).substring(7) + Date.now(), // Unique ID for the cart item
        productId,
        name,
        price,
        image,
        size,
        color,
        qty: qty || 1,
        addedAt: new Date().toISOString()
    };

    cartDetails.push(newItem);

    return NextResponse.json({ success: true, cart: cartDetails });
}

export async function DELETE(request: Request) {
    const { itemId } = await request.json();
    cartDetails = cartDetails.filter((item) => item.id !== itemId);
    return NextResponse.json({ success: true, cart: cartDetails });
}

export async function GET() {
    // Backfill missing IDs for legacy items
    cartDetails = cartDetails.map(item => {
        if (!item.id) {
            return {
                ...item,
                id: Math.random().toString(36).substring(7) + Date.now()
            };
        }
        return item;
    });

    return NextResponse.json({ cart: cartDetails });
}
