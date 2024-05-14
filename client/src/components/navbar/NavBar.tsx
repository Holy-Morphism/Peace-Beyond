import { getSession } from "@/api/auth";
import AuthNavBar from "./AuthNavBar";
import UnAuthNavBar from "./UnAuthNavBar";

export default async function NavBar() {

  const res = await getSession();
  if (res.status === "ok") {
    return <AuthNavBar />;
  }

  return <UnAuthNavBar />;
}
