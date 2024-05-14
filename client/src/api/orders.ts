"use server"

export async function saveReservation(reservationData: String) {
    console.log(JSON.stringify(reservationData));
    const res = await fetch("http://localhost:8080/api/saveReservation", {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id:reservationData}),
    });
    const data = await res.json();
    return data;
  }
