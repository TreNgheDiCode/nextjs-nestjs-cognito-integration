"use client";

import { useEffect } from "react";
import { useHeader } from "./providers/headerProvider";
import { BreadCrumbPropsType } from "./ui/breadcrumb";
import { useToolbar } from "./providers/toolbarProvider";

interface BlankContentProps {
  title: string;
  breadCrumbItems: BreadCrumbPropsType["items"];
  showToolbar?: boolean;
}

export default function BlankContent({
  title,
  breadCrumbItems,
  showToolbar = true,
}: BlankContentProps) {
  const { setTitle, setBreadCrumbItems } = useHeader();
  const { setVisible } = useToolbar();

  useEffect(() => {
    setTitle(title);
    setBreadCrumbItems(breadCrumbItems);
    setVisible(showToolbar);
  }, [
    title,
    breadCrumbItems,
    showToolbar,
    setTitle,
    setBreadCrumbItems,
    setVisible,
  ]);

  return (
    <>
      <div className="flex gap-2">
        {[...new Array(4)].map((_, idx) => (
          <div
            key={"first " + idx}
            className="h-20 w-full rounded  bg-gray-200 dark:bg-neutral-800 animate-pulse"
          ></div>
        ))}
      </div>
      <div className="flex gap-2 flex-1">
        {[...new Array(2)].map((_, idx) => (
          <div
            key={"second" + idx}
            className="h-full w-full rounded  bg-gray-200 dark:bg-neutral-800 animate-pulse"
          ></div>
        ))}
      </div>
    </>
  );
}
