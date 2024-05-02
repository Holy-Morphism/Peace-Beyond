"use client";

import React, { useEffect, useState } from "react";
import { getUser } from "@/api/auth"; // replace with your actual path

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await getUser();
      console.log(res);
      if (res.status !== "error") {
        setUser(res);
      }
    };

    fetchUser();
  }, []);

  return <div>Dashboard</div>;
};

export default Dashboard;
