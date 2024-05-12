import { getUser } from "@/api/auth"; // replace with your actual path
import { Button } from "@/components/ui/button";

const Dashboard = async () => {
  const res = await getUser();
  //console.log(res);

  if (res && res.status !== "error") {
  }

  return <div className="h-full w-full flex justify-center items-center">Dashboard</div>;
};

export default Dashboard;
