import { FC } from "react";
import Navigation from "./Navigation";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import HeaderUtilities from "./HeaderUtilities";

const Header: FC = () => {
  return (
    <header className="shadow-lg py-2">
      <div className="container">
        <div className="flex flex-row items-end">
          <Brand />
          <div className="grow flex flex-col items-start h-full justify-end">
            <HeaderUtilities />
            <Navigation />
          </div>
        </div>
      </div>
    </header>
  );
};

const Brand: FC = () => {
  return (
    <div className="px-10 text-center">
      <Link href="/" className="flex flex-row items-center gap-2">
        <Image
          src="/logo.png"
          width={120}
          height={40}
          alt="Quân đội nhân dân"
          quality={100}
        />
      </Link>
    </div>
  );
};

export default Header;
