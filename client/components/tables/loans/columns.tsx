"use client";

import { Loan } from "@/types/loans";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { MultiBadgeCell, SingleBadgeCell } from "../cells/badgeCell";
import CurrencyCell from "../cells/currencyCell";
import EmptyCell from "../cells/emptyCell";

const columnHelper =
  createColumnHelper<
    Pick<
      Loan & { index: number },
      | "index"
      | "applicant"
      | "status"
      | "prevStatuses"
      | "quote"
      | "borrowers"
      | "createdAt"
      | "updatedAt"
    >
  >();

export const columns: ColumnDef<
  Pick<
    Loan & { index: number },
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
  columnHelper.group({
    id: "Loan Applications",
    header: "Loan Applications",
    columns: [
      columnHelper.accessor((row) => row.index, {
        id: "index",
        header: "No.",
        cell: ({ row }) => row.index + 1,
      }),
      columnHelper.accessor((row) => row.applicant, {
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
            row.original.applicant.firstName +
              " " +
              row.original.applicant.lastName
          );
        },
      }),
      columnHelper.accessor((row) => row.status, {
        header: "Status",
        cell: ({ row }) => <SingleBadgeCell value={row.original.status} />,
      }),
      columnHelper.accessor((row) => row.prevStatuses, {
        header: "Previous Statuses",
        cell: ({ row }) => <MultiBadgeCell value={row.original.prevStatuses} />,
      }),
      columnHelper.accessor((row) => row.quote, {
        header: "Loan Purpose",
        cell: ({ row }) => (
          <SingleBadgeCell value={row.original.quote.loanPurpose} />
        ),
      }),
      columnHelper.accessor((row) => row.quote, {
        header: "Loan Amount",
        cell: ({ row }) => (
          <CurrencyCell
            title="Loan Amount"
            value={row.original.quote.loanAmount}
          />
        ),
      }),
      columnHelper.accessor((row) => row.quote, {
        header: "Loan Type",
        cell: ({ row }) => (
          <SingleBadgeCell value={row.original.quote.loanType} />
        ),
      }),
      columnHelper.accessor((row) => row.borrowers, {
        header: "Borrower",
        cell: ({ row }) => {
          if (row.original.borrowers.length === 0) return <EmptyCell />;

          return (
            row.original.borrowers
              .map((borrower) => borrower.firstName + " " + borrower.lastName)
              .join(", ") || <EmptyCell />
          );
        },
      }),
    ],
  }),
];
