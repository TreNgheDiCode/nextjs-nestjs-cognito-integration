import { Links } from "@/components/ui/sidebar";
import {
  IconApps,
  IconBuildingEstate,
  IconBusinessplan,
  IconDashboard,
  IconSettings,
  IconUsers,
  IconUsersGroup,
  IconWorld,
} from "@tabler/icons-react";

export const navLinks: Links[] = [
  {
    label: "General",
    href: "/",
    icon: <IconDashboard />,
  },
  {
    label: "Applications",
    icon: <IconApps />,
    children: [
      {
        label: "Loans",
        href: "/applications/loans",
        icon: <IconBusinessplan />,
      },
      {
        label: "Real Estate",
        href: "/applications/real-estate",
        icon: <IconBuildingEstate />,
      },
    ],
  },
  {
    label: "Organizations",
    icon: <IconWorld />,
    children: [
      {
        label: "Teams",
        href: "/organizations/teams",
        icon: <IconUsersGroup />,
      },
      {
        label: "Users",
        href: "/organizations/users",
        icon: <IconUsers />,
      },
    ],
  },
  {
    label: "Settings",
    href: "/settings",
    icon: <IconSettings />,
  },
];
