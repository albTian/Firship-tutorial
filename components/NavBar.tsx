import Image from "next/image";
import Link from "next/link";
import { SignInButton, SignOutButton } from "./AuthButtons";

const NavBar = () => {
  return (
    <nav className="flex flex-row justify-between min-w-full">
      <Link href={"/"}>
        <Image src={"/vercel.svg"} width={140} height={140} alt={"Logo"} />
      </Link>
      <ul className="flex flex-row gap-2">
        <li>
            <Link href={"/about"}>About</Link>
        </li>
        <li>
            <Link href={"/blog"}>Blog</Link>
        </li>
        <li>
            <Link href={"/users"}>Users</Link>
        </li>
        <li>
          <SignInButton />
        </li>
        <li>
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
