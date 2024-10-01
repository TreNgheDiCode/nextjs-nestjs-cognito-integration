"use client";

import { createContext, useContext, useState } from "react";
import { BreadCrumbPropsType } from "../ui/breadcrumb";

interface HeaderContextType {
  title: string;
  setTitle: (title: string) => void;
  breadCrumbItems: BreadCrumbPropsType["items"];
  setBreadCrumbItems: (items: BreadCrumbPropsType["items"]) => void;
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export const useHeader = () => {
  const context = useContext(HeaderContext);

  if (!context) {
    throw new Error("useHeader must be used within a HeaderProvider");
  }

  return context;
};

const HeaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [title, setTitle] = useState("");
  const [breadCrumbItems, setBreadCrumbItems] = useState<
    BreadCrumbPropsType["items"]
  >([]);

  return (
    <HeaderContext.Provider
      value={{ title, setTitle, breadCrumbItems, setBreadCrumbItems }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderProvider;
