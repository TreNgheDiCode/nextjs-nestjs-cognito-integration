"use client";

import { useHeader } from "./providers/header-provider";
import BreadCrumb from "./breadcrumb";
import { UserHeader } from "./user-header";
import { useSession } from "next-auth/react";

export default function Header() {
  const { title, breadCrumbItems } = useHeader();
  const { data } = useSession();

  if (!data) {
    return <div className="border-b bg-neutral-100 h-14 animate-pulse"></div>;
  }

  return (
    <div className="border-b bg-neutral-100">
      <nav className="h-14 flex items-center justify-between px-4">
        <div>
          <h1 className="text-primary text-xl font-bold tracking-tight">
            {title}
          </h1>
          <BreadCrumb items={breadCrumbItems} />
        </div>
        <div className="flex items-center gap-2">
          <UserHeader session={data} />
        </div>
      </nav>
    </div>
  );
}
