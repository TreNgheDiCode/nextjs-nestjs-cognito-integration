import BlankContent from "@/components/blank-content";
import { BreadCrumbPropsType } from "@/components/breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teams | Wonder CRM",
};

export default function TeamsPage() {
  const breadCrumbItems: BreadCrumbPropsType["items"] = [
    {
      link: "/applications/teams",
      title: "teams",
    },
  ];

  return <BlankContent title="Teams" breadCrumbItems={breadCrumbItems} />;
}
