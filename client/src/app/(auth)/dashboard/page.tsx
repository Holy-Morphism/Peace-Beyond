import { getUser, logout } from "@/api/auth"; // replace with your actual path
import { Button } from "@/components/ui/button";

const Dashboard = async () => {
  const res = await getUser();
  //console.log(res);

  if (res && res.status !== "error") {
  }

  return (
    <div>
      Dashboard
      <Button onClick={ logout}>Logout</Button>
    </div>
  );
};

export default Dashboard;
