"use client";

import { useGetLoanApplications } from "@/apis/resources/loans/gets/hooks/useGetLoanApplications";
import Loading from "@/components/loading";
import { useHeader } from "@/components/providers/headerProvider";
import { BreadCrumbPropsType } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { useEffect, useMemo } from "react";
import { DataTable } from "../dataTable";
import { columns } from "./columns";

interface Props {
  title: string;
  breadCrumbItems: BreadCrumbPropsType["items"];
}

export default function LoansDataTable({ title, breadCrumbItems }: Props) {
  const { setTitle, setBreadCrumbItems } = useHeader();

  useEffect(() => {
    setTitle(title);
    setBreadCrumbItems(breadCrumbItems);
  }, [title, breadCrumbItems, setTitle, setBreadCrumbItems]);

  const {
    isLoading,
    isPending,
    error,
    data,
    isFetching,
    totalCount,
    setRowsPerPage,
    fetchPreviousPage,
    fetchNextPage,
    hasNextPage,
    hasPreviousPage,
    isFetchingPreviousPage,
    isFetchingNextPage,
  } = useGetLoanApplications();

  const flatData = useMemo(() => {
    return data?.pages.flat(2) ?? [];
  }, [data]);

  const indexedData = flatData.map((loan, index) => ({ ...loan, index }));

  const loading =
    isLoading ||
    isPending ||
    isFetching ||
    isFetchingPreviousPage ||
    isFetchingNextPage;

  const bottomContent = useMemo(() => {
    return (
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => fetchPreviousPage()}
          disabled={isFetchingPreviousPage || !hasPreviousPage}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage || !hasNextPage}
        >
          Next
        </Button>
      </div>
    );
  }, [
    fetchPreviousPage,
    fetchNextPage,
    isFetchingNextPage,
    isFetchingPreviousPage,
    hasNextPage,
    hasPreviousPage,
  ]);

  if (error) {
    return "An error occurred: " + error.message;
  }

  return (
    <div className="overflow-hidden flex flex-col">
      <div className="size-full rounded-md border overflow-hidden">
        {loading ? (
          <Loading size="lg" />
        ) : (
          <DataTable
            totalCount={totalCount}
            title="Loan Applications"
            columns={columns}
            data={indexedData}
          />
        )}
      </div>
      {bottomContent}
    </div>
  );
}
