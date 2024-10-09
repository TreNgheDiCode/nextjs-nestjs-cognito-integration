"use client";

import { useToolbar } from "../providers/toolbarProvider";

export default function ToolbarWrapper() {
  const { toolbarOne, toolbarTwo } = useToolbar();
  return (
    <>
      {toolbarOne}
      {toolbarTwo}
    </>
  );
}
