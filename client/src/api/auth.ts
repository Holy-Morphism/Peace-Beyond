"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { userData, loginData } from "@/types"; 

export async function signUp(userData:userData) {
  const res = await fetch("http://localhost:8080/api/user/signup", {
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
    const res = await fetch("http://localhost:8080/api/user/login", {
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
    const res = await fetch("http://localhost:8080/api/user/logout", {
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