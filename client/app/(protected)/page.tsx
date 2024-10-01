import BlankContent from "@/components/blank-content";
import { BreadCrumbPropsType } from "@/components/breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "General | Wonder CRM",
};

export default function DashboardPage() {
  const breadCrumbItems: BreadCrumbPropsType["items"] = [
    {
      title: "Dashboard",
      link: "/",
    },
  ];
  return <BlankContent title="Dashboard" breadCrumbItems={breadCrumbItems} />;
}
