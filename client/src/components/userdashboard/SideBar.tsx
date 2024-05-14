"use client";

import SideBarButton from "./SideBarButton";
import { IoIosSettings, IoMdExit } from "react-icons/io";
import { FaClipboardList, FaHeart } from "react-icons/fa";
import { logout } from "@/api/auth";
import { HomeIcon } from "lucide-react";

const SideBar = () => {
  const handlelogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("An error occurred during logout:", error);
    }
  };

  return (
    <div className="h-full w-1/5 bg-color3">
      <div className="flex flex-col justify-center items-center">
      <SideBarButton
          icon={<HomeIcon />}
          name="Home"
          href="/"
        />
        <SideBarButton
          icon={<IoIosSettings />}
          name="General"
          href="/userdashboard"
        />
        <SideBarButton
          icon={<FaClipboardList />}
          name="Orders"
          href="/userdashboard/orders"
        />
        <SideBarButton
          icon={<FaHeart />}
          name="Favourites"
          href="/userdashboard/favourites"
        />
        <SideBarButton
          icon={<IoMdExit />}
          name="Sign Out"
          href="/"
          onClick={handlelogout}
        />
      </div>
    </div>
  );
};

export default SideBar;
