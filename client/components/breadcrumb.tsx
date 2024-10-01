"use client";

import { cn } from "@/lib/utils";
import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

type BreadCrumbType = {
  title: string;
  link: string;
};

export type BreadCrumbPropsType = {
  items: BreadCrumbType[];
};

export default function BreadCrumb({ items }: BreadCrumbPropsType) {
  return (
    <div className="flex items-center space-x-1 text-sm text-accent font-Poppins">
      {items?.map((item: BreadCrumbType, index: number) => {
        if (index === 0) {
          return (
            <Link
              key={item.title}
              href={item.link}
              className="overflow-hidden text-ellipsis whitespace-nowrap"
            >
              {item.title}
            </Link>
          );
        }

        return (
          <React.Fragment key={item.title}>
            <IconChevronRight className="h-4 w-4" />
            <Link
              href={item.link}
              className={cn(
                "font-PoppinsMedium",
                index === items.length - 1
                  ? "text-foreground pointer-events-none"
                  : "text-accent"
              )}
            >
              {item.title}
            </Link>
          </React.Fragment>
        );
      })}
    </div>
  );
}
