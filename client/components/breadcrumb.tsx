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
    <div className="flex items-center space-x-1 text-sm text-accent italic font-medium">
      <Link
        href={"/"}
        className="overflow-hidden text-ellipsis whitespace-nowrap"
      >
        General
      </Link>
      {items?.map((item: BreadCrumbType, index: number) => (
        <React.Fragment key={item.title}>
          <IconChevronRight className="h-4 w-4" />
          <Link
            href={item.link}
            className={cn(
              "font-medium",
              index === items.length - 1
                ? "text-foreground pointer-events-none"
                : "text-accent"
            )}
          >
            {item.title}
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
}
