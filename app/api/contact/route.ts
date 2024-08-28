import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const res = await request.json();
    const {name, email, subject, message} = res;
    console.log({res});

    const result = await prisma.clients.create({
        data: {
            name,
            email,
            subject,
            message
        }
    })
    return NextResponse.json({data:res})
}