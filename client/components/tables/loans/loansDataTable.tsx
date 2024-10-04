"use client";

import { useGetLoanApplications } from "@/apis/resources/loans/gets/hooks/useGetLoanApplications";
import Loading from "@/components/loading";
import { useHeader } from "@/components/providers/headerProvider";
import { BreadCrumbPropsType } from "@/components/ui/breadcrumb";
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

  const { isPending, error, data, isFetching } = useGetLoanApplications();

  const flatData = useMemo(() => {
    return data?.pages.flatMap((page) => page) ?? [];
  }, [data]);

  const indexedData = flatData.map((loan, index) => ({ ...loan, index }));

  if (isPending || isFetching) {
    return <Loading size="lg" />;
  }

  if (error) {
    return "An error occurred: " + error.message;
  }

  return (
    <div className="rounded-md border overflow-hidden">
      <DataTable
        title="Loan Applications"
        columns={columns}
        data={indexedData}
      />
    </div>
  );
}
