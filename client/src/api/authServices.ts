// src/api/authService.ts
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
  return res.json();
}

export async function login(loginData:loginData) {

    const res = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
    });
    return res.json();
    }