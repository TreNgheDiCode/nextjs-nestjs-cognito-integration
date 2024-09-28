import BlankContent from "@/components/blank-content";
import { BreadCrumbPropsType } from "@/components/breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate | Wonder CRM",
};

export default function RealEstatePage() {
  const breadCrumbItems: BreadCrumbPropsType["items"] = [
    {
      link: "/applications/real-estate",
      title: "Real Estate",
    },
  ];

  return <BlankContent title="Real Estate" breadCrumbItems={breadCrumbItems} />;
}
