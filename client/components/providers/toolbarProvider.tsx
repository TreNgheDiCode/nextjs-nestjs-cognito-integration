"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import ToolbarWrapper from "../toolbar";
import Header from "../header";

interface ToolbarContextType {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  toolbarOne: React.ReactNode;
  setToolbarOne: (toolbarOne: React.ReactNode) => void;
  toolbarTwo: React.ReactNode;
  setToolbarTwo: (toolbarTwo: React.ReactNode) => void;
}

const ToolbarContext = createContext<ToolbarContextType | undefined>(undefined);

export const useToolbar = () => {
  const context = useContext(ToolbarContext);

  if (!context) {
    throw new Error("useToolbar must be used within a ToolbarProvider");
  }

  return context;
};

const ToolbarProvider = ({ children }: { children: React.ReactNode }) => {
  const [visible, setVisible] = useState(true);
  const [toolbarOne, setToolbarOne] = useState<React.ReactNode>(null);
  const [toolbarTwo, setToolbarTwo] = useState<React.ReactNode>(null);

  useEffect(() => {
    const toolbar1 = (
      <div className="border-b px-6 py-2.5 w-full bg-neutral-100 h-12 animate-pulse">
        Toolbar 1
      </div>
    );

    const toolbar2 = (
      <div className="border-b px-6 py-2.5 w-full bg-neutral-100 h-12 animate-pulse">
        Toolbar 2
      </div>
    );

    setToolbarOne(toolbar1);
    setToolbarTwo(toolbar2);

    return () => {
      setToolbarOne(null);
      setToolbarTwo(null);
    };
  }, []);

  return (
    <ToolbarContext.Provider
      value={{
        visible,
        setVisible,
        toolbarOne,
        setToolbarOne,
        toolbarTwo,
        setToolbarTwo,
      }}
    >
      <Header />
      {visible ? <ToolbarWrapper /> : null}
      {children}
    </ToolbarContext.Provider>
  );
};

export default ToolbarProvider;
