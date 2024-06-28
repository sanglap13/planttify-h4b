import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import PersonIcon from "@mui/icons-material/Person";

export interface SidebarType {
  name: string;
  icon: JSX.Element;
  redirect: string;
}
export const SIDEBAR: SidebarType[] = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />,
    redirect: "/",
  },
  {
    name: "Users",
    icon: <PersonIcon />,
    redirect: "/user",
  },
  {
    name: "Groups",
    icon: <GroupIcon />,
    redirect: "/group",
  },
];
