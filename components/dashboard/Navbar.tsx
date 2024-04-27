import { Dropdown, Menu, Space } from "antd";
import React from "react";
import { FaBars } from "react-icons/fa";
import { PiCaretUpDown } from "react-icons/pi";
import { IoMdNotificationsOutline } from "react-icons/io";
import User from "@/public/images/user.png";
import Cpass from "@/public/images/Change Password.svg";
import logOut from "../../public/images/Log Out.svg";
import Profile from "../../public/images/Profile.svg";
import Link from "next/link";
import Image from "next/image";

const handleMenuClick = (e: any) => {
  console.log("click");
};

const menuItems = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1" icon={<Image src={Profile} alt="Profile" />}>
      <Link href="/profile">Profile</Link>
    </Menu.Item>
    <Menu.Item key="2" icon={<Image src={Cpass} alt="Change Password" />}>
      <Link href="/change-password">Change Password</Link>
    </Menu.Item>
    <Menu.Item key="3" icon={<Image src={logOut} alt="Log Out" />}>
      <Link href="/logout">Log Out</Link>
    </Menu.Item>
  </Menu>
);

export default function Navbar({ toggleSidebar }: {
  toggleSidebar: () => void
}) {
  return (
    <nav className="nav">
      <div className="toggle_btn" onClick={toggleSidebar}>
        <FaBars className="icons" />
      </div>
      <div className="page_title mb_hide">
        <h1>Dashboard</h1>
      </div>
      <div className="right_area">
        <div className="notifi">
          <IoMdNotificationsOutline className="icons" />
          <span className="dot"></span>
        </div>
        <Dropdown overlay={menuItems} trigger={["click"]}>
          <Space className="header_dropdown">
            <div className="title">
              <Image src={User} alt="User_Img" />
              <p className="name">
                Mahfuzur R. <span>Admin</span>
              </p>
            </div>
            <PiCaretUpDown className="icons" />
          </Space>
        </Dropdown>
      </div>
    </nav>
  );
}
