"use client";

import SideBarButton from "./SideBarButton";
import { IoIosSettings, IoMdExit } from "react-icons/io";
import { FaClipboardList } from "react-icons/fa";
import { logout } from "@/api/auth";
import { Button } from "../ui/button";

const SideBar = () => {
  const hlogout = async () => {
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
          icon={<IoIosSettings />}
          name="General"
          href="/dashboard"
        />
        <SideBarButton
          icon={<FaClipboardList />}
          name="Orders"
          href="/orders"
        />

        <Button onClick={hlogout}> logout</Button>
      </div>
    </div>
  );
};

export default SideBar;
