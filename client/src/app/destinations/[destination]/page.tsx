import Description from "@/components/gallery/description";
import { getDestination } from "@/api/destination";
import { saveReservation } from "@/api/orders";

const Destination = async ({ params }: { params: { destination: string } }) => {
  const destination = await getDestination(params.destination);
  console.log(destination);
  const reservationData = {
    id: destination.id,
    title: destination.title,
    host: destination.host,
    price: destination.price,
    description: destination.description
  };
  const reserve = await saveReservation(reservationData);
  try {
    if (reserve.ok) {
      console.log('Data saved successfully');
    } else {
      console.error('Error saving data');
    }
  } catch (error) 
  {
    console.error('Error saving data', error);
  }
return (
  <>
    <Description {...destination.destination} />
  </>
);
};

export default Destination;
