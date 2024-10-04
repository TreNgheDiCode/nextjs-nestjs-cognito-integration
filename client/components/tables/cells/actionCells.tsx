"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdownMenu";
import { MoreHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";
import { Fragment } from "react";

interface DropdownMenuItemProps {
  onClick?: () => void;
  title: string;
  href?: string;
}

export interface DropdownMenuContentProps {
  items: DropdownMenuItemProps[];
}

export default function ActionCells({
  id,
  contents,
}: {
  id: string;
  contents: DropdownMenuContentProps[];
}) {
  const router = useRouter();

  const onNavigate = (href: string) => {
    router.push(href);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="transparent" size="icon" className="p-0">
          <span className="sr-only">Open action menu</span>
          <MoreHorizontal className="size-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        {contents.map((content, idx) => {
          if (idx !== contents.length - 1) {
            return (
              <Fragment key={id}>
                {content.items.map((item) => (
                  <DropdownMenuItem key={item.title} onClick={item.onClick}>
                    {item.title}
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
              </Fragment>
            );
          }

          return content.items.map((item) => (
            <DropdownMenuItem
              key={item.title}
              onClick={item.href ? () => onNavigate(item.href!) : item.onClick}
            >
              {item.title}
            </DropdownMenuItem>
          ));
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
