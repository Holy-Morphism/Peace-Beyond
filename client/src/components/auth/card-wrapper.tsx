"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";

interface CardWrapperProps {
  label: string;
  title: string;
  backButtonTitle: String;
  backButtonHref: string;
  backButtonLabel: string;
  children: React.ReactNode;
}

const CardWrapper = ({
  label,
  title,
  backButtonTitle,
  backButtonHref,
  backButtonLabel,
  children,
}: CardWrapperProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{label}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <div className="mt-4 text-center text-sm">
          {backButtonLabel}
          <Link href={backButtonHref} className="underline">
            {backButtonTitle}
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
