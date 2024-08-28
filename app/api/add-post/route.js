
import prisma from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
    const res = await request.json();
    const {name, email, subject, message} = res;
    console.log({res});

    await prisma.clients.create({
        data: {
            name,
            email,
            subject,
            message
        }
    })
    return NextResponse.json({data:res})
}