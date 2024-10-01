"use client";

import { Loan } from "@/types/loans";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Loan>[] = [
  {
    accessorKey: "index",
    header: "No.",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "_id",
    header: "ID",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];
