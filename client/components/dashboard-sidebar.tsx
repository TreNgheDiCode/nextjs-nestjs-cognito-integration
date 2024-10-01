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

export default function DashboardSidebar() {
  const [animate, setAnimate] = useState(true);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const toggleAnimate = () => {
    setAnimate((prev) => !prev);
  };

  return (
    <Sidebar open={open} setOpen={setOpen} animate={animate}>
      <SidebarBody className="justify-between">
        <div className="flex flex-col flex-1 hover:overflow-y-auto overflow-hidden hover:scrollbar transition-transform">
          <Logo open={open} animate={animate} setAnimate={toggleAnimate} />
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
      </SidebarBody>
    </Sidebar>
  );
}

const Logo = ({
  open,
  animate,
  setAnimate,
}: {
  open: boolean;
  animate: boolean;
  setAnimate: () => void;
}) => {
  return (
    <div className="border-b">
      <div className="flex flex-row items-center justify-between px-6 py-3.5 min-h-[72px]">
        <Link href="/" className="h-full flex-1">
          <img src="/images/logo.svg" alt="Wonder CRM" />
        </Link>
        {open &&
          (animate ? (
            <SidebarOpen
              onClick={setAnimate}
              className="cursor-pointer text-primary dark:text-text size-6"
              strokeWidth={1}
            />
          ) : (
            <SidebarClose
              onClick={setAnimate}
              className="cursor-pointer text-primary dark:text-text size-6"
              strokeWidth={1}
            />
          ))}
      </div>
    </div>
  );
};
