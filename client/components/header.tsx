"use client";

import { useHeader } from "./providers/header-provider";
import BreadCrumb from "./breadcrumb";
import { UserHeader } from "./user-header";
import { useSession } from "next-auth/react";
import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  const { title, breadCrumbItems } = useHeader();
  const { data } = useSession();

  if (!data) {
    return (
      <div className="border-b bg-neutral-100 dark:bg-neutral-800 h-14 animate-pulse"></div>
    );
  }

  return (
    <div className="border-b bg-neutral-100 dark:bg-neutral-800">
      <nav className="h-14 flex items-center justify-between px-4">
        <div>
          <h1 className="dark:text-text text-xl font-bold tracking-tight">
            {title}
          </h1>
          <BreadCrumb items={breadCrumbItems} />
        </div>
        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <UserHeader session={data} />
        </div>
      </nav>
    </div>
  );
}
