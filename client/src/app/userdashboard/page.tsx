import { getUser } from "@/api/auth"; // replace with your actual path
import { Button } from "@/components/ui/button";
import UserDashboard from "@/components/userdashboard/UserDashboard";
import { userData } from "@/types"; // replace with your actual path

const Dashboard = async () => {
  const res = await getUser();

  if (res && res.status !== "error") {
  }

  const user = res.user;
  return (
    <div>
      <UserDashboard {...user} />
    </div>
  );
};

export default Dashboard;
