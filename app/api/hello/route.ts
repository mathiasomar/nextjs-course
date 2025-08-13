import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({ message: "Hello, Next.js!" });
};

export const POST = async (req: Request) => {
  const data = await req.json();
  const { name } = data;
  return NextResponse.json({
    message: `Hello, ${name}! this was sent from api`,
  });
};
