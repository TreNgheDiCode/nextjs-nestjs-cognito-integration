import SetupProvider from "@/components/blankContent";
import DemoLoansChart from "@/components/charts/dashboard/demo-loans-chart";
import { BreadCrumbPropsType } from "@/components/ui/breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Wonder CRM",
};

export default function DashboardPage() {
  const breadCrumbItems: BreadCrumbPropsType["items"] = [
    {
      title: "General",
      link: "/",
    },
    {
      title: "Dasboard",
      link: "/",
    },
  ];
  return (
    <>
      <SetupProvider
        title="Dashboard"
        breadCrumbItems={breadCrumbItems}
        showToolbar={false}
      />
      <DemoLoansChart />
    </>
  );
}
