import { prisma } from "@/lib/prisma";
import UserCard from "@/components/UserCard/UserCard";

export default async function Users() {
  const users = await prisma.user.findMany();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {users.map((user) => {
        return <UserCard key={user.id} {...user} />;
      })}
    </div>
  );
}
