import BlankContent from "@/components/blankContent";
import { BreadCrumbPropsType } from "@/components/ui/breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate | Wonder CRM",
};

export default function RealEstatePage() {
  const breadCrumbItems: BreadCrumbPropsType["items"] = [
    {
      link: "/applications",
      title: "Applications",
    },
    {
      link: "/applications/real-estate",
      title: "Real Estate",
    },
  ];

  return <BlankContent title="Real Estate" breadCrumbItems={breadCrumbItems} />;
}
