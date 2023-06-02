import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { ProfileForm } from "@/app/dashboard/ProfileForm";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ProtectedPage = async ({ children }: Props) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("api/auth/signin");
  }

  return <>{children}</>;
};

export default ProtectedPage;
