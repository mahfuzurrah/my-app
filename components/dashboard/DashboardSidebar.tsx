import logo from "@/public/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";
import { FaUser, FaUserCog } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa6";
import { MdSpaceDashboard } from "react-icons/md";

interface DashboardSidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

interface MenuItem {
  id: number;
  label: string;
  icon: ReactNode;
  route: string;
}

function SideBarMenuItem({ item }: { item: MenuItem }) {
  const pathname = usePathname();

  return (
    <li
      key={item.id}
      className={`side_nav_list ${
        pathname?.endsWith(item.route) ? "active" : ""
      }`}
    >
      <Link href={item.route} className="nav-link">
        <div className="icon">{item.icon}</div>
        {item.label}
      </Link>
    </li>
  );
}

export default function DashboardSidebar({
  isOpen,
  toggleSidebar,
}: DashboardSidebarProps) {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      id: 1,
      label: "Dashboard",
      icon: <MdSpaceDashboard className="icons" />,
      route: "dashboard",
    },
    {
      id: 2,
      label: "Datasets",
      icon: <FaClipboardList className="icons" />,
      route: "/datasets",
    },
    {
      id: 3,
      label: "Models",
      icon: <FaUserCog className="icons" />,
      route: "/models",
    },
    {
      id: 4,
      label: "Wallet",
      icon: <FaUser className="icons" />,
      route: "/wallet",
    },
  ]);

  const setActiveItem = (id: number) => {
    const updatedItems = menuItems.map((item) => ({
      ...item,
      isActive: item.id === id,
    }));
    setMenuItems(updatedItems);

    // Close sidebar on mobile and add 'sider-collapsed' class
    if (window.innerWidth <= 991) {
      toggleSidebar();
    }
  };

  return (
    <div className={`side_navbar ${isOpen ? "" : "sider-collapsed"}`}>
      <div className="logo">
        <Image src={logo} alt="Logo" />
      </div>
      <ul className="side_nav_menu">
        {menuItems?.map((item) => (
          <SideBarMenuItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
