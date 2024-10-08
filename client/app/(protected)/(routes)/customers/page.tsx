import SetupProvider from "@/components/blankContent";
import { BreadCrumbPropsType } from "@/components/ui/breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customers | Wonder CRM",
};

export default function CustomersPage() {
  const breadCrumbItems: BreadCrumbPropsType["items"] = [
    {
      link: "/customers",
      title: "Customers",
    },
  ];

  return <SetupProvider title="Customers" breadCrumbItems={breadCrumbItems} />;
}
