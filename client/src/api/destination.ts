"use server"

export async function getDestinations() {
    const res = await fetch("http://localhost:8080/api/destination", {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data)
    return data;
  }


  export async function getDestination(id: number) {
    const res = await fetch(`http://localhost:8080/api/destination/${id}`, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data)
    return data;
  }

