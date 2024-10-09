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

export default function SetupProvider({
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

  return null;
}
