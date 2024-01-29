const { HomeIcon, BoxIcon, LayoutDashboard } = require("lucide-react");

export const menuItems = [
  {
    label: "Home",
    icon: (
      <HomeIcon size={20} color="#000" className="dark:stroke-extra-light" />
    ),
    activeIcon: <HomeIcon size={20} color="white" />,
    className: "homeIcon",
    link: "/",
  },
  {
    label: "Sprints",
    icon: (
      <BoxIcon size={20} color="#000" className="dark:stroke-extra-light" />
    ),
    activeIcon: <BoxIcon size={20} color="white" />,
    className: "sprintIcon",
    link: "/",
  },
  {
    label: "Board",
    icon: (
      <LayoutDashboard
        size={20}
        color="#000"
        className="dark:stroke-extra-light"
      />
    ),
    activeIcon: <LayoutDashboard size={20} color="white" />,
    className: "boardIcon",
    link: "/",
  },
];
