import { NextResponse } from "next/server";

export async function POST(request: Request) {
    // Simulate processing
    const orderId = Math.floor(100000 + Math.random() * 900000).toString();

    return NextResponse.json({
        success: true,
        orderId,
        message: "Order placed successfully"
    });
}
