import BlankContent from "@/components/blankContent";
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
    <BlankContent
      title="Dashboard"
      breadCrumbItems={breadCrumbItems}
      showToolbar={false}
    />
  );
}
