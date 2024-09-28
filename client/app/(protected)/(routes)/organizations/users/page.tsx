import BlankContent from "@/components/blank-content";
import { BreadCrumbPropsType } from "@/components/breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users | Wonder CRM",
};

export default function UsersPage() {
  const breadCrumbItems: BreadCrumbPropsType["items"] = [
    {
      link: "/applications/real-estate",
      title: "Users",
    },
  ];

  return <BlankContent title="Users" breadCrumbItems={breadCrumbItems} />;
}
