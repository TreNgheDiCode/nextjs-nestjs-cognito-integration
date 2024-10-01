"use client";

import Loading from "@/components/loading";
import { useHeader } from "@/components/providers/headerProvider";
import { BreadCrumbPropsType } from "@/components/ui/breadcrumb";
import { getLoansOptions } from "@/data/loans";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useEffect } from "react";
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

  const { isPending, error, data, isFetching } = useSuspenseQuery(
    getLoansOptions({ query: {}, page: 1, limit: 5, sort: {} })
  );

  if (isPending || isFetching) {
    return <Loading size="lg" />;
  }

  if (error) {
    return "An error occurred: " + error.message;
  }

  return <DataTable columns={columns} data={data?.data} />;
}
