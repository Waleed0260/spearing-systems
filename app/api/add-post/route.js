import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        // Parse the JSON request body
        const res = await request.json();
        const { name, email, subject, message } = res;
        console.log({ res });
    
        // Insert data into the database using Prisma
        const createdUser = await prisma.User.create({
          data: {
            name,
            email,
            subject,
            message,
          },
        });
    
        // Return a successful response with the created user data
        return NextResponse.json({ data: createdUser });
      } catch (error) {
        if (
          error instanceof prisma.PrismaClientKnownRequestError &&
          error.code === "P2002"
        ) {
          // Handle unique constraint violation error (e.g., email already exists)
          console.error("Error: Email already registered.", error);
          return NextResponse.json(
            { error: "Email already registered. Please use a different email." },
            { status: 400 }
          );
        }
    
        // Log unexpected errors
        console.error("Unexpected error:", error);
    
        // Return a generic error response for other errors
        return NextResponse.json(
          { error: "Failed to create user. Please try again." },
          { status: 500 }
        );
      }
}