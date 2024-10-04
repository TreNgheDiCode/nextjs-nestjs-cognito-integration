"use client";

import EmptyCell from "./emptyCell";
import { format } from "date-fns";
import { vi } from "date-fns/locale";

export default function DateCell({ value }: { value?: Date }) {
  if (!value) return <EmptyCell />;

  return (
    <span className="text-sm font-Poppins">
      {format(value, "dd/MM/yyyy", { locale: vi })}
    </span>
  );
}
