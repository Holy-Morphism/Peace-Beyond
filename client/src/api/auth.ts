

import Router from "next/router";



interface userData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    }

interface loginData {
    email: string;
    password: string;
}

export async function signUp(userData:userData) {
  const res = await fetch("http://localhost:8080/api/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
   return  await res.json();
   
   
}

export async function login(loginData:loginData) {
    const res = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        cache: "no-store",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
    });
    const data = await res.json();
    console.log(data);
    if (data.status === "ok") {
        Router.push("/dashboard");
    }
    return data;
}

export async function logout() {
    const res = await fetch("http://localhost:8080/api/logout", {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        },
    });
    return res.json();
    }

export async function getUser() {
    const res = await fetch("http://localhost:8080/api/user", {
        method: "GET",
        cache: "no-store",
        credentials: "include",
        headers: {
        "Content-Type": "application/json",
        },
    });
    const data = await res.json();
    console.log(data);
    if (data.status === "error") {
        Router.push("/login");
    }
    return data;
    }