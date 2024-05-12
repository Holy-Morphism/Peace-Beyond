import { getUser } from "@/api/auth"; // replace with your actual path
import { Button } from "@/components/ui/button";
import UserDashboard from "@/components/userdashboard/UserDashboard";
import { userData } from "@/types"; // replace with your actual path

const Dashboard = async () => {
  const res = await getUser();

  if (res && res.status !== "error") {
  }

  console.log(res.user.firstName);
  return (
    <div className="">
      <UserDashboard firstName={res.user.firstName} lastName={res.user.lastName} />
    </div>
  );
};

export default Dashboard;
