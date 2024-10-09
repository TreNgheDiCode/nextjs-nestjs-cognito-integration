import SetupProvider from "@/components/blankContent";
import { BreadCrumbPropsType } from "@/components/ui/breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Lead | Wonder CRM",
};

export default function CreateLeadPage() {
  const breadCrumbItems: BreadCrumbPropsType["items"] = [
    {
      link: "/leads",
      title: "Leads",
    },
    {
      link: "/leads/create",
      title: "Create New Lead",
    },
  ];

  return (
    <SetupProvider
      title="Create New Lead"
      breadCrumbItems={breadCrumbItems}
      showToolbar={false}
    />
  );
}
