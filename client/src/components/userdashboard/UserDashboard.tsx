"use client";

interface UserDashboardProps {
  firstName: String;
  lastName: String;
}

import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

const UserDashboard = (user: UserDashboardProps) => {
  console.log(`user ${user}`);
  return (
    <div className="m-5">
      <Card className=" bg-color2 ">
        <CardHeader>
          <CardTitle className="text-color3 text-5xl">
            {user.firstName} {user.lastName}
          </CardTitle>
          <CardDescription>This is the user dashboard</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default UserDashboard;
