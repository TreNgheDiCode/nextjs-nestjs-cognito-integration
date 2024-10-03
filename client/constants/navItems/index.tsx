import { Links } from "@/components/ui/sidebar";
import {
  IconApps,
  IconBuildingEstate,
  IconBusinessplan,
  IconCategory,
  IconDashboard,
  IconHeadset,
  IconSettings,
  IconUsers,
  IconUsersGroup,
  IconWorld,
} from "@tabler/icons-react";

export const navLinks: Links[] = [
  {
    label: "General",
    icon: <IconDashboard strokeWidth={1} />,
    children: [
      {
        label: "Dashboard",
        href: "/",
        icon: <IconDashboard strokeWidth={1} />,
      },
    ],
  },
  {
    label: "Applications",
    icon: <IconApps strokeWidth={1} />,
    children: [
      {
        label: "All",
        href: "/applications",
        icon: <IconCategory strokeWidth={1} />,
      },
      {
        label: "Loans",
        href: "/applications/loans",
        icon: <IconBusinessplan strokeWidth={1} />,
      },
      {
        label: "Real Estate",
        href: "/applications/real-estate",
        icon: <IconBuildingEstate strokeWidth={1} />,
      },
    ],
  },
  {
    label: "Organizations",
    icon: <IconWorld strokeWidth={1} />,
    children: [
      {
        label: "All",
        href: "/organizations",
        icon: <IconCategory strokeWidth={1} />,
      },
      {
        label: "Teams",
        href: "/organizations/teams",
        icon: <IconUsersGroup strokeWidth={1} />,
      },
      {
        label: "Users",
        href: "/organizations/users",
        icon: <IconUsers strokeWidth={1} />,
      },
    ],
  },
  {
    label: "Customers",
    icon: <IconHeadset strokeWidth={1} />,
    children: [
      {
        label: "All",
        href: "/customers",
        icon: <IconCategory strokeWidth={1} />,
      },
      {
        label: "Loans",
        href: "/customers/loans",
        icon: <IconBusinessplan strokeWidth={1} />,
      },
      {
        label: "Real Estate",
        href: "/customers/real-estate",
        icon: <IconBuildingEstate strokeWidth={1} />,
      },
    ],
  },
  {
    label: "System",
    icon: <IconSettings strokeWidth={1} />,
    children: [
      {
        label: "Settings",
        href: "/system/settings",
        icon: <IconSettings strokeWidth={1} />,
      },
    ],
  },
];
