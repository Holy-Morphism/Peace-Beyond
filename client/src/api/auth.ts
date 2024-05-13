"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { userData, loginData } from "@/types"; 

export async function signUp(userData:userData) {
  const res = await fetch("http://localhost:8080/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  const data = await res.json();
  cookies().set({
      name: 'jwt',
      value: data.token,
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
      path: '/',
    })
  console.log(data);
  if (data.status === "ok") {
      redirect("/userdashboard");
  }
  return data;
}

export async function login(loginData:loginData) {
    const res = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        credentials: "include",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
    });
    const data = await res.json();
    cookies().set({
        name: 'jwt',
        value: data.token,
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
        path: '/',
      })
    console.log(data);
    if (data.status === "ok") {
        redirect("/userdashboard");
    }
    return data;
}

export async function logout() {
    const res = await fetch("http://localhost:8080/api/auth/logout", {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        },
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

