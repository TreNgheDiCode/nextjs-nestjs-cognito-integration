"use client";

import { Loan } from "@/types/loans";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<
  Pick<Loan, "status" | "createdAt" | "updatedAt">
>[] = [
  {
    accessorKey: "index",
    header: "No.",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];
