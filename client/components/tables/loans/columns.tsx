"use client";

import { Loan } from "@/types/loans";
import { ColumnDef } from "@tanstack/react-table";
import ActionCells, { DropdownMenuContentProps } from "../cells/actionCells";
import { MultiBadgeCell, SingleBadgeCell } from "../cells/badgeCell";
import CurrencyCell from "../cells/currencyCell";
import DateCell from "../cells/dateCell";
import EmptyCell from "../cells/emptyCell";

export const columns: ColumnDef<
  Pick<
    Loan & { index: number },
    | "_id"
    | "index"
    | "applicant"
    | "status"
    | "prevStatuses"
    | "quote"
    | "borrowers"
    | "createdAt"
    | "updatedAt"
  >
>[] = [
  {
    accessorKey: "index",
    header: "No.",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "applicant",
    header: "Applicant",
    cell: ({ row }) => {
      if (!row.original.applicant) return <EmptyCell />;

      if (
        (!row.original.applicant.firstName &&
          !row.original.applicant.lastName) ||
        !row.original.applicant.fullName
      )
        return <EmptyCell />;

      return (
        row.original.applicant.fullName ??
        row.original.applicant.firstName + " " + row.original.applicant.lastName
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <SingleBadgeCell value={row.original.status} />,
  },
  {
    accessorKey: "prevStatuses",
    header: "Previous Statuses",
    cell: ({ row }) => <MultiBadgeCell value={row.original.prevStatuses} />,
  },
  {
    accessorKey: "quote.loanPurpose",
    header: "Loan Purpose",
    cell: ({ row }) => (
      <SingleBadgeCell value={row.original.quote.loanPurpose} />
    ),
  },
  {
    accessorKey: "quote.loanAmount",
    header: "Loan Amount",
    cell: ({ row }) => (
      <CurrencyCell title="Loan Amount" value={row.original.quote.loanAmount} />
    ),
  },
  {
    accessorKey: "quote.loanType",
    header: "Loan Type",
    cell: ({ row }) => <SingleBadgeCell value={row.original.quote.loanType} />,
  },
  {
    accessorKey: "borrowers",
    header: "Borrower",
    cell: ({ row }) => {
      if (row.original.borrowers.length === 0) return <EmptyCell />;

      return (
        row.original.borrowers
          .map((borrower) => borrower.firstName + " " + borrower.lastName)
          .join(", ") || <EmptyCell />
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => <DateCell value={row.original.createdAt} />,
  },
  {
    accessorKey: "updatedAt",
    header: "Updated At",
    cell: ({ row }) => <DateCell value={row.original.updatedAt} />,
  },
  {
    accessorKey: "actions",
    header: "",
    cell: ({ row }) => {
      const contents: DropdownMenuContentProps[] = [
        {
          items: [
            {
              title: "Copy loan ID",
              onClick: () => {
                navigator.clipboard.writeText(row.original._id);
              },
            },
          ],
        },
        {
          items: [
            {
              title: "View loan",
              href: `/applications/loans/${row.original._id}`,
            },
          ],
        },
      ];
      return <ActionCells id={row.original._id} contents={contents} />;
    },
  },
];
