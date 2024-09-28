import BlankContent from "@/components/blank-content";
import { BreadCrumbPropsType } from "@/components/breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings | Wonder CRM",
};

export default function SettingsPage() {
  const breadCrumbItems: BreadCrumbPropsType["items"] = [
    {
      link: "/applications/settings",
      title: "Settings",
    },
  ];

  return <BlankContent title="Settings" breadCrumbItems={breadCrumbItems} />;
}
