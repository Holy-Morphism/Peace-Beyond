"use client";
import { Calendar } from "@/components/ui/calendar";
import HouseImage from "@/components/image/HouseImage";
import { FaUmbrellaBeach } from "react-icons/fa";
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast";
import { CalendarBooking } from "../booking/calendarBooking";
interface Destination {
  _id: string;
  id: string;
  image: string;
  price: number;
  title: string;
  description: string;
  host: string;
}

const Description = (prop: Destination) => {
  const { toast } = useToast();

  const destination = prop;
  return (
    <>
      <div className="flex flex-col mt-16 absolute left-0 top-0  mb-5 h-auto w-full">
        <HouseImage image={destination.image} />
      </div>
      <div className="grid grid-cols-2 gap-14 absolute bottom-0 w-full place-items-center ">
        <div className=" h-auto w-auto">
          <h1 className="text-4xl bl">{destination.title}</h1>
          <h2 className="text-2xl text-gray-500">${destination.price} night</h2>
          <p className="text-2xl  text-black-900 "> <span className='text-gray-500'>Hosted by </span>{destination.host}</p>
          <hr />
          <p className="text-lg text-gray-500 ">{destination.description}</p>
          <hr />
           <span className="text-lg text-gray-500 ">this place is close to the beach  <FaUmbrellaBeach /> </span> 
          <Button
          variant="outline"
          onClick={() => {
            toast({
              description: "Reservation Successful",
            })
          }} className=" mt-9 w-3/4 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Reservation</Button>
        </div>
        <div>
          <CalendarBooking pricePerDay={destination.price}/>
        </div>
      </div>
    </>
  );
};

export default Description;
