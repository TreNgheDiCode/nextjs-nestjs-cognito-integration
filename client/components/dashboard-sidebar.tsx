"use client";

import { navLinks } from "@/constants/nav-items";
import { SidebarClose, SidebarOpen } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  NestedSidebarLink,
  Sidebar,
  SidebarBody,
  SidebarLink,
} from "./ui/sidebar";
import { cn } from "@/lib/utils";

export default function DashboardSidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody className="justify-between">
        <div className="flex flex-col flex-1 hover:overflow-y-auto overflow-hidden hover:scrollbar transition-transform">
          <Logo open={open} setOpen={toggleOpen} />
          <div className="flex flex-col">
            {navLinks.map((link, idx) => {
              const active = pathname === link.href;

              if (link.children) {
                return <NestedSidebarLink key={idx} link={link} />;
              }

              return <SidebarLink key={idx} link={link} active={active} />;
            })}
          </div>
        </div>
        {!open && (
          <Link href="/" className="transition px-3 py-3.5">
            <img src="/images/logo.svg" alt="Wonder CRM" />
          </Link>
        )}
      </SidebarBody>
    </Sidebar>
  );
}

const Logo = ({ open, setOpen }: { open: boolean; setOpen: () => void }) => {
  return (
    <div className="border-b">
      <div
        className={cn(
          "flex flex-row items-center justify-between px-6 py-3.5 min-h-[72px]",
          !open && "px-3 py-1.5 justify-center"
        )}
      >
        {open && (
          <Link href="/" className="h-full flex-1">
            <img src="/images/logo.svg" alt="Wonder CRM" />
          </Link>
        )}
        {open ? (
          <SidebarClose
            onClick={setOpen}
            className="cursor-pointer text-accent dark:text-text size-6"
            strokeWidth={1}
          />
        ) : (
          <SidebarOpen
            onClick={setOpen}
            className="cursor-pointer text-accent dark:text-text size-6"
            strokeWidth={1}
          />
        )}
      </div>
    </div>
  );
};
