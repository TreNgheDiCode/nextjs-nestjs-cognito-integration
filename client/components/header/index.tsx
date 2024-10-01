"use client";

import { useSession } from "next-auth/react";
import BreadCrumb from "../ui/breadcrumb";
import { useHeader } from "../providers/headerProvider";
import { ThemeToggle } from "./themeToggle";
import { UserHeader } from "./userHeader";

export default function Header() {
  const { title, breadCrumbItems } = useHeader();
  const { data } = useSession();

  if (!data) {
    return (
      <div className="border-b border-l bg-neutral-100 dark:bg-neutral-800 h-14 animate-pulse"></div>
    );
  }

  return (
    <header className="border-b border-l bg-neutral-100 dark:bg-neutral-800">
      <nav className="flex items-center justify-between px-6 py-3.5">
        <div className="flex flex-1 items-center justify-between">
          <div>
            <h1 className="uppercase dark:text-text text-base font-MontserratBold">
              {title}
            </h1>
            <BreadCrumb items={breadCrumbItems} />
          </div>
          <ThemeToggle />
        </div>
        <div className="flex items-center gap-2.5 border-l-2 pl-4">
          <UserHeader session={data} />
        </div>
      </nav>
    </header>
  );
}
