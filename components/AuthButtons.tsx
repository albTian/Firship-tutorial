"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

export const SignInButton = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>...</div>;
  }

  if (status === "authenticated") {
    return (
      <Link href={"/dashboard"}>
        <Image
          src={session.user?.image ?? "/vercel.svg"}
          alt={"Avatar"}
          width={32}
          height={32}
        />
      </Link>
    );
  }
  return <button onClick={() => signIn()}>Sign in</button>;
};

export const SignOutButton = () => {
  return <button onClick={() => signOut()}>Sign out</button>;
};
