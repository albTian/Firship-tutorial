// import FollowButton from '@/components/FollowButton/FollowButton';
import FollowButton from '@/components/FollowButton/FollowButton';
import FollowClient from '@/components/FollowButton/FollowClient';
import { prisma } from '@/lib/prisma';
import { Metadata } from 'next';
import Image from 'next/image';

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  return { title: `User profile of ${user?.name}` };
}

export default async function UserProfile({ params }: Props) {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  const { name, bio, image, id } = user ?? {};

  return (
    <div className="p-4 bg-gray-100 rounded shadow-lg">
      <h1 className="text-4xl font-bold text-gray-800">{name}</h1>

      <div className="my-6">
        <Image
          width={300}
          height={300}
          className="rounded-full"
          src={image ?? '/mememan.webp'}
          alt={`${name}'s profile`}
        />
      </div>

      <h3 className="text-2xl font-semibold text-gray-700">Bio</h3>
      <p className="mt-2 text-gray-600">{bio}</p>

      {/* unused @ts-expect-error Server Component */}
      {/* <FollowButton targetUserId={id || ""} /> */}
    </div>
  );
}