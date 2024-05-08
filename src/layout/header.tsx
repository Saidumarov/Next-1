"use client";
import { ModeToggle } from "@/components/dark-light-module";
import Link from "next/link";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {}, []);
  return (
    <>
      <header className="text-gray-600 body-font shadow-md dark:shadow-slate-800 sticky top-0 z-10 bg-white dark:bg-slate-950">
        <div className="container mx-auto flex  p-5  items-center justify-between">
          <Link href={"/"}>
            <span className="ml-3 text-xl dark:text-white max-[400px]:text-[18px]">
              Where in the world?
            </span>
          </Link>
          <div className="flex items-center gap-10 max-[400px]:gap-2">
            <Link
              href={"/products"}
              className="  dark:text-white max-[400px]:text-[15px]"
            >
              Products
            </Link>
            <ModeToggle />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
