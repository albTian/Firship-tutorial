import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

const PUT = async (req: Request) => {
  const session = await getServerSession(authOptions);
  const currentUserEmail = session?.user?.email!;
  const { targetUserId } = await req.json();

  console.log('currentUserEmail')
  console.log(currentUserEmail)

  console.log('targetUserId')
  console.log(targetUserId)

  const currentUserId = await prisma.user
    .findUnique({ where: { email: currentUserEmail } })
    .then((user) => user?.id!);

  const record = await prisma.follows.create({
    data: {
      followerId: currentUserId,
      followingId: targetUserId,
    },
  });
  return NextResponse.json(record)
};

const DELETE = async (req: NextRequest) => {
  const session = await getServerSession(authOptions);
  const currentUserEmail = session?.user?.email!;
  const targetUserId = req.nextUrl.searchParams.get("targetUserId");

  const currentUserId = await prisma.user
    .findUnique({ where: { email: currentUserEmail } })
    .then((user) => user?.id!);

  const record = await prisma.follows.delete({
    where: {
      followerId_followingId: {
        followerId: currentUserId,
        followingId: targetUserId!,
      },
    },
  });

  return NextResponse.json(record);
};

export { PUT, DELETE };
