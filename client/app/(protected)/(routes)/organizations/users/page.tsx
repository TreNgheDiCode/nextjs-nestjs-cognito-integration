import SetupProvider from "@/components/blankContent";
import { BreadCrumbPropsType } from "@/components/ui/breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users | Wonder CRM",
};

export default function UsersPage() {
  const breadCrumbItems: BreadCrumbPropsType["items"] = [
    {
      link: "/organizations",
      title: "Organizations",
    },
    {
      link: "/organizations/real-estate",
      title: "Users",
    },
  ];

  return <SetupProvider title="Users" breadCrumbItems={breadCrumbItems} />;
}
