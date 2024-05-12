'use client'
import * as React from 'react';
import Image from '@/components/image/Image';
import { Calendar } from '@/components/ui/calendar';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getDestination } from '@/api/destination';
const data = [
  {
    id: 7,
    image: "/images/India.avif",
    price: 1500,
    title: "Asia, Thailand",
    view: "Great place. This place is close to the beach and has a great view.",
    Host: "Syed Muhammad Fasil ul Hassan Zaidi",
    description: "1 guest  1 room  1 bed "
  }
];

const Page = async() => {
const {id}=useParams();
console.log(id)
const res=await getDestination(Number(id));
console.log(res)

  return (
    <>
      {/* <div className="flex flex-col mt-16 absolute left-0 top-0  mb-5 h-auto w-full">
        <Image house={house} />
      </div>
      <div className="grid grid-cols-2 gap-14 absolute bottom-0 w-full place-items-center ">
        <div className=' h-auto w-auto'>
          <h1 className="text-4xl bl">{house.title}</h1>
          <h2 className="text-2xl text-gray-500">${house.price} night</h2>
          <p className="text-2xl  text-black-900 "> <span className='text-gray-500'>Hosted by </span>{house.Host}</p>
          <hr />
          <p className="text-lg text-gray-500 ">{house.description}</p>
          <hr />
          <p className="text-lg text-gray-500 ">{house.view}</p> <i className="fa-solid fa-umbrella-beach"></i>
          <button onClick={()=>{window.location.href='/trips';}} type="button" className=" mt-9 w-3/4 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Reservation</button>
        </div>
        <div>
          <Calendar/>
        </div>
      </div>
 */}

 <div>123123</div>
    </>
  );
};

export default Page;