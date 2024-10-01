import BlankContent from "@/components/blankContent";
import { BreadCrumbPropsType } from "@/components/ui/breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Applications | Wonder CRM",
};

export default function ApplicationsPage() {
  const breadCrumbItems: BreadCrumbPropsType["items"] = [
    {
      link: "/applications",
      title: "Applications",
    },
  ];

  return (
    <BlankContent title="Applications" breadCrumbItems={breadCrumbItems} />
  );
}
