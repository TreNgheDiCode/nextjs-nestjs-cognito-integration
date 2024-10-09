import SetupProvider from "@/components/blankContent";
import { BreadCrumbPropsType } from "@/components/ui/breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate Applications | Wonder CRM",
};

export default function RealEstateApplicationsPage() {
  const breadCrumbItems: BreadCrumbPropsType["items"] = [
    {
      link: "/applications",
      title: "Applications",
    },
    {
      link: "/applications/real-estate",
      title: "Real Estate Applications",
    },
  ];

  return (
    <SetupProvider
      title="Real Estate Applications"
      breadCrumbItems={breadCrumbItems}
    />
  );
}
