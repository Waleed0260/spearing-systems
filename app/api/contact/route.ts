import prisma from "@/lib/prisma";
import { type NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
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
    return Response.json({data:res})
}