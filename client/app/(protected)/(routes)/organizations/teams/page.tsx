import BlankContent from "@/components/blankContent";
import { BreadCrumbPropsType } from "@/components/ui/breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teams | Wonder CRM",
};

export default function TeamsPage() {
  const breadCrumbItems: BreadCrumbPropsType["items"] = [
    {
      link: "/organizations",
      title: "Organizations",
    },
    {
      link: "/organizations/teams",
      title: "Teams",
    },
  ];

  return <BlankContent title="Teams" breadCrumbItems={breadCrumbItems} />;
}
