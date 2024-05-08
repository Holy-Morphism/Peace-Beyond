"use server"

export async function getDestinations() {
    const res = await fetch("http://localhost:8080/api/destination", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return  res.json();
  }

