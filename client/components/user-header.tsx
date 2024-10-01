"use client";

import { signOut } from "next-auth/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Session } from "next-auth";

type Props = {
  session: Session;
};

export function UserHeader({ session }: Props) {
  if (session) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="transparent"
            className="size-full flex items-center gap-2.5 px-0 py-0"
          >
            <Avatar className="size-10">
              <AvatarImage
                src={session.user?.image ?? undefined}
                alt={session.user?.name ?? "avatarImg"}
              />
              <AvatarFallback className="text-background bg-primary font-Poppins">
                <span>
                  {session.user?.name?.split(" ")[0][0] ?? ""}
                  {session.user?.name?.split(" ")[1][0] ?? ""}
                </span>
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-0.5 items-start">
              <p className="font-MontserratMedium">
                {session.user?.name ?? "[Unknown]"}
              </p>
              {/* TODO: Read User Role */}
              <p className="font-Poppins text-xs text-accent">Administrator</p>
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuItem
            onClick={() =>
              signOut({ redirect: true, callbackUrl: "/auth/login" })
            }
            className="hover:bg-red-200"
          >
            Logout
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
}
