import Description from "@/components/gallery/description";
import { getDestination } from "@/api/destination";

const Destination = async ({ params }: { params: { destination: string } }) => {
  const destination = await getDestination(params.destination);
  console.log(destination);
  return (
    <div>
      <p>This is description These are the params : {params.destination}</p>
      <Description {...destination.destination} />
    </div>
  );
};

export default Destination;
