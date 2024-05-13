import { getUser } from "@/api/user"; 
import UserDashboard from "@/components/userdashboard/UserDashboard";

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
