import Description from "@/components/gallery/description";
import { getDestination } from "@/api/destination";
import { saveReservation } from "@/api/orders";

const Destination = async ({ params }: { params: { destination: string } }) => {
  const destination = await getDestination(params.destination);
  console.log(destination);
 
  const reserve = await saveReservation(destination.id);
  console.log(reserve);
return (
  <>
    <Description {...destination.destination} />
  </>
);
};

export default Destination;
