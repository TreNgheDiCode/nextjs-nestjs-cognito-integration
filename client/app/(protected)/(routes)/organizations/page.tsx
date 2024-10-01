import BlankContent from "@/components/blankContent";
import { BreadCrumbPropsType } from "@/components/ui/breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Organizations | Wonder CRM",
};

export default function OrganizationsPage() {
  const breadCrumbItems: BreadCrumbPropsType["items"] = [
    {
      link: "/organizations",
      title: "Organizations",
    },
  ];

  return (
    <BlankContent title="Organizations" breadCrumbItems={breadCrumbItems} />
  );
}
