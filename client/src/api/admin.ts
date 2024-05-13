import { redirect } from "next/navigation";

export async function getAdmin() {
    const res = await fetch("http://localhost:8080/api/admin", {
        method: "GET",
        credentials: "include",
        headers: {
        "Content-Type": "application/json",
        },
    });
    const data =await res.json();
    console.log(data);
    if (data.status === "error") {
        redirect("/login");
    }
    return data;
}