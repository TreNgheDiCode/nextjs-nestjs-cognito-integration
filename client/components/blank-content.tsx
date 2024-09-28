"use client";

import { useEffect } from "react";
import { BreadCrumbPropsType } from "./breadcrumb";
import { useHeader } from "./providers/header-provider";

interface BlankContentProps {
  title: string;
  breadCrumbItems: BreadCrumbPropsType["items"];
}

export default function BlankContent({
  title,
  breadCrumbItems,
}: BlankContentProps) {
  const { setTitle, setBreadCrumbItems } = useHeader();

  useEffect(() => {
    setTitle(title);
    setBreadCrumbItems(breadCrumbItems);
  }, [title, breadCrumbItems, setTitle, setBreadCrumbItems]);

  return (
    <>
      <div className="flex gap-2">
        {[...new Array(4)].map((_, idx) => (
          <div
            key={"first " + idx}
            className="h-20 w-full rounded-lg  bg-gray-200 dark:bg-neutral-800 animate-pulse"
          ></div>
        ))}
      </div>
      <div className="flex gap-2 flex-1">
        {[...new Array(2)].map((_, idx) => (
          <div
            key={"second" + idx}
            className="h-full w-full rounded-lg  bg-gray-200 dark:bg-neutral-800 animate-pulse"
          ></div>
        ))}
      </div>
    </>
  );
}
