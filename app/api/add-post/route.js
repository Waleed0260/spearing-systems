// import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
    const res = await request.json();
    const {name, email} = res;
    console.log({res});
    // await prisma.User.create({
    //     data:{
    //         name, email
    //     }
    // })
    return NextResponse.json({data:res})
}