// import { NextResponse } from "next/server";
import { EmailTemplate } from "../../../lib/EmailTemplate";
import { Resend } from 'resend';
// import guide from "../../../public/images/guide.pdf"
// import fs from 'fs';
// import path from 'path';
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request:Request) {
    try {
      const res = await request.json();
      const {email} = res;
    //   const filePath = path.join(process.cwd(), 'public/images', 'guide.pdf');
    //   const fileBuffer = fs.readFileSync(filePath);
    const { data, error } = await resend.emails.send({
      from: 'Spearing System <spearingsystems@gmail.com>',
      to: ["muhammadwaleedahsan43@gmail.com"],
      subject: 'Digital Marketing Guide',
      react: EmailTemplate({ firstName: 'John' }),
    //   attachments: [
    //     {
    //       filename: 'guide.pdf',
    //       content: fileBuffer,
    //       contentType: 'application/pdf',
    //     },
    //   ],
    });
    console.log("error", error)

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
