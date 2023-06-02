import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ProfileForm } from "./ProfileForm";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("api/auth/signin");
  }

  const currentUserEmail = session.user?.email!;
  const user = await prisma.user.findUnique({
    where: { email: currentUserEmail },
  });
  return (
    <>
      <h1>Dashboard</h1>
      <ProfileForm user={user} />
    </>
  );
};

export default DashboardPage;
