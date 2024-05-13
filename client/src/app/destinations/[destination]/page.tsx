import Description from "@/components/gallery/description";
import { getDestination } from "@/api/destination";

const Destination = async ({ params }: { params: { destination: string } }) => {
  const destination = await getDestination(params.destination);
  console.log(destination);
  return (
    <>
      <Description {...destination.destination} />
    </>
  );
};

export default Destination;
