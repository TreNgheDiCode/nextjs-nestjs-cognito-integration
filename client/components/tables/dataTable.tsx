"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

interface DataTableProps<TData, TValue> {
  totalCount: number;
  title: string;
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  totalCount,
  title,
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    manualPagination: true,
    state: {
      columnPinning: {
        right: ["actions"],
      },
    },
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Table className="font-Poppins text-sm bg-white">
      <TableHeader className="sticky top-0 z-20">
        <TableRow>
          <TableHead
            colSpan={table.getAllFlatColumns().length}
            className="bg-gray-200 dark:bg-muted/50 font-normal hover:bg-gray-300 dark:hover:bg-muted/40"
          >
            <span className="font-semibold">{title}</span>: {totalCount} records
          </TableHead>
        </TableRow>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              const isPinned = header.column.getIsPinned();

              return (
                <TableHead
                  key={header.id}
                  className={cn(
                    "whitespace-nowrap backdrop-blur-md",
                    isPinned && "sticky right-0 z-20"
                  )}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              );
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row, index) => (
            <TableRow
              key={row.id}
              data-state={row.getIsSelected() && "selected"}
              className={
                index % 2 === 0
                  ? "bg-gray-100 dark:bg-muted/50 hover:bg-gray-200 dark:hover:bg-muted/40"
                  : ""
              }
            >
              {row.getVisibleCells().map((cell) => {
                const isPinned = cell.column.getIsPinned();

                return (
                  <TableCell
                    key={cell.id}
                    className={cn(
                      "backdrop-blur-md",
                      isPinned && "sticky right-0 z-10"
                    )}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                );
              })}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} className="h-24 text-center">
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
