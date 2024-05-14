"use server"
import { cookies } from "next/headers";

export async function saveReservation(reservationData: String) {
    console.log(JSON.stringify(reservationData));
    const res = await fetch("http://localhost:8080/api/reservation/create", {
      method: "POST",
      cache: "no-store",
      credentials: "include",
      headers: {
      Cookie: cookies().toString(),
      "Content-Type": "application/json",
      },
      body: JSON.stringify({id:reservationData}),
    });
    const data = await res.json();
    return data;
  }
