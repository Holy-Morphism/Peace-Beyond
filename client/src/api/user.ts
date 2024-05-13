"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function getUser() {
    const res = await fetch("http://localhost:8080/api/user", {
        method: "GET",
        cache: "no-store",
        credentials: "include",
        headers: {
        Cookie: cookies().toString(),
        "Content-Type": "application/json",
        },
    });
    const data = await res.json();
    if (data.status === "error") {
       redirect("/login");
    }
    return data;
    }

    export async function updateFirstname(data:{firstname:string}) {
      const res = await fetch("http://localhost:8080/api/user/update/firstname", {
          method: "PUT",
          credentials: "include",
          cache: "no-store", 
          headers: {
          Cookie: cookies().toString(),
          "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
      });
      return res.json();
  }

  export async function updateLastname(data: { lastname: string }) {
    const res = await fetch("http://localhost:8080/api/user/update/lastname", {
      method: "PUT",
      credentials: "include",
      cache: "no-store",
      headers: {
        Cookie: cookies().toString(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return res.json();
  }

  export async function updateEmail(data: { email: string }) {
    const res = await fetch("http://localhost:8080/api/user/update/email", {
      method: "PUT",
      credentials: "include",
      cache: "no-store",
      headers: {
        Cookie: cookies().toString(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return res.json();
  }

  export async function updatePassword(data: { password: string }) {
    const res = await fetch("http://localhost:8080/api/user/update/password", {
      method: "PUT",
      credentials: "include",
      cache: "no-store",
      headers: {
        Cookie: cookies().toString(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    cookies().set({
      name: 'jwt',
      value: '',
      httpOnly: true,
      expires: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7),
      path: '/',
    })
    redirect("/");
    return res.json();
  }