"use client";

import Link from "next/link";

const SideBarButton = (props: {
  name: string;
  href: string;
  icon: JSX.Element;

}) => {
  return (
    <Link href={props.href} className="w-full">
      <div className="w-full h-1/6 flex flex-row text-color2 items-center px-5 py-2 text-4xl">
        <div className="w-1/6 ">{props.icon}</div>
        <div className="w-5/6 text-center font-CaniculeDisplay">
          {props.name}
        </div>
      </div>
    </Link>
  );
};

export default SideBarButton;
