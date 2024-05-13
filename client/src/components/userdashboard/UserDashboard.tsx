"use client";
import { CldUploadWidget, CldImage, getCldImageUrl } from "next-cloudinary";

import {
  FirstNameSchema,
  LastNameSchema,
  PasswordSchema,
  EmailSchema,
} from "@/schema";

import { useState } from "react";
import {
  updateFirstname,
  updateLastname,
  updateEmail,
  updatePassword,
} from "@/api/user";

import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import UpdateFormField from "./UpdateFormField";

interface UserDashboardProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  avatarURL: string;
}

const UserDashboard = (user: UserDashboardProps) => {
  const [avatarURL, setAvatarURL] = useState("");

  console.log(`user ${user}`);

  return (
    <div className="m-5">
      <Card className=" bg-color2 flex flex-row justify-between flex-wrap">
        <div>
          <CardHeader>
            <CldImage
              width="200"
              height="200"
              src={user.avatarURL}
              sizes="100vw"
              alt="Your image"
              className="rounded-full"
            />
            <CardTitle className="text-color3 text-5xl">
              {user.firstName} {user.lastName}
            </CardTitle>
            <CardDescription>{user.email}</CardDescription>
          </CardHeader>
          <CardContent></CardContent>
          <CardFooter></CardFooter>
        </div>

        <Card className="m-5">
          <CardHeader>
            <CardTitle className="text-color3 text-5xl">
              Update Information
            </CardTitle>
            <CardDescription>
              Once you have entered all the new information, Press Update
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* <CldUploadWidget
              uploadPreset="profile_pictures"
              onSuccess={(results) => {
                console.log("Public ID", results.info.public_id);
                setAvatarURL(results.info.public_id);
              }}
            >
              {({ open }) => {
                return <button onClick={() => open()}>Upload an Image</button>;
              }}
            </CldUploadWidget> */}
            <UpdateFormField
              name="firstName"
              label="First Name"
              type="text"
              placeholder={user.firstName}
              submit={updateFirstname}
              schema={FirstNameSchema}
            />
            <UpdateFormField
              name="lastName"
              label="Last Name"
              type="text"
              placeholder={user.lastName}
              submit={updateLastname}
              schema={LastNameSchema}
            />
            <UpdateFormField
              name="email"
              label="Email"
              type="email"
              placeholder={user.email}
              submit={updateEmail}
              schema={EmailSchema}
            />
            <UpdateFormField
              name="password"
              label="Password"
              type="password"
              placeholder="Enter New Password"
              submit={updatePassword}
              schema={PasswordSchema}
            />
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </Card>
    </div>
  );
};

export default UserDashboard;
