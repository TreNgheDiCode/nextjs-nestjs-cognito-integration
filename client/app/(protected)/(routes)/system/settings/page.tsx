import SetupProvider from "@/components/blankContent";
import { BreadCrumbPropsType } from "@/components/ui/breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings | Wonder CRM",
};

export default function SettingsPage() {
  const breadCrumbItems: BreadCrumbPropsType["items"] = [
    {
      link: "/system",
      title: "System",
    },
    {
      link: "/system/settings",
      title: "Settings",
    },
  ];

  return <SetupProvider title="Settings" breadCrumbItems={breadCrumbItems} />;
}
