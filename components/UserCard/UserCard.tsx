import Image from 'next/image';
import Link from 'next/link';

interface Props {
  id: string;
  name: string | null;
  age: number | null;
  image: string | null;
}

export default function UserCard({ id, name, age, image }: Props) {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden bg-white">
      <Image
        src={image ?? '/mememan.webp'}
        alt={`${name}'s profile`}
        className="w-full h-56 object-cover"
        width={200}
        height={200}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">
          <Link href={`/users/${id}`} className="text-blue-500 hover:underline">{name}</Link>
        </h3>
        <p className="mt-2">Age: {age}</p>
      </div>
    </div>
  );
}
