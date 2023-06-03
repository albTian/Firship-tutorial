import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

const GET = async () => {
  // const users = await prisma.user.findMany();

  return NextResponse.json([]);
};

export { GET };
