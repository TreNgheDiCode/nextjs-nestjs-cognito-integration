"use client";

import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useHeader } from "../providers/headerProvider";
import BreadCrumb from "../ui/breadcrumb";
import { Button } from "../ui/button";
import { ThemeToggle } from "./themeToggle";
import { UserHeader } from "./userHeader";

export default function Header() {
  const { title, breadCrumbItems } = useHeader();
  const { data } = useSession();
  const pathname = usePathname();

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
          <div className="flex items-center">
            {pathname.startsWith("/applications") && <CreateLeadButton />}
            <ThemeToggle />
          </div>
        </div>
        <div className="flex items-center gap-2.5 border-l-2 pl-4">
          <UserHeader session={data} />
        </div>
      </nav>
    </header>
  );
}

function CreateLeadButton() {
  const router = useRouter();

  const onNavigate = () => {
    router.push("/leads/create");
  };
  return (
    <Button
      onClick={onNavigate}
      size="sm"
      className="bg-gradient-to-r from-primary to-[#239def] text-white"
    >
      Create Lead
    </Button>
  );
}
