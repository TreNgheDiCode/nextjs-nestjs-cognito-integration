import LoansDataTable from "@/components/tables/loans/loansDataTable";
import { BreadCrumbPropsType } from "@/components/ui/breadcrumb";
import { getLoansOptions } from "@/data/loans";
import { getQueryClient } from "@/lib/queryClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loans | Wonder CRM",
};

const breadCrumbItems: BreadCrumbPropsType["items"] = [
  {
    link: "/applications",
    title: "Applications",
  },
  {
    link: "/applications/loans",
    title: "Loans",
  },
];

export default function LoansPage() {
  const queryClient = getQueryClient();

  queryClient.prefetchQuery(
    getLoansOptions({ query: {}, page: 1, limit: 5, sort: {} })
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <LoansDataTable title="Loans" breadCrumbItems={breadCrumbItems} />
    </HydrationBoundary>
  );
}
