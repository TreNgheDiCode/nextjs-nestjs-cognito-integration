import BlankContent from "@/components/blankContent";
import { BreadCrumbPropsType } from "@/components/ui/breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate Customers | Wonder CRM",
};

export default function RealEstateCustomersPage() {
  const breadCrumbItems: BreadCrumbPropsType["items"] = [
    {
      link: "/customers",
      title: "Customers",
    },
    {
      link: "/customers/real-estate",
      title: "Real Estate Customers",
    },
  ];

  return (
    <BlankContent
      title="Real Estate Customers"
      breadCrumbItems={breadCrumbItems}
    />
  );
}
