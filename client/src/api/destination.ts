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
    return data;
  }


  export async function getDestination(id: string) {
    const res = await fetch(`http://localhost:8080/api/destination/${id}`, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  }

  export async function getDestinationPagination(skip: string, limit: string) {
    const res = await fetch(`http://localhost:8080/api/destination/page/?skip=${skip}&limit=${limit}`, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  }
