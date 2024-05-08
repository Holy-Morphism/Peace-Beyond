// // import React from 'react'
// // import { Calendar } from '@/components/ui/calendar'
// // const data=[
// //   {id:7,
// //   image:"/images/Thailand.avif",
// //   price:1500,
// //   title:"Asia, Thailand",
// //   description:"great place to visit"
// // }
// // ]

// // const page = () => {
// //   return (
// //     <>
// //     <div className="house pt-4 pb-4 m-2 ">
// //       <div className="details">
// //         <p></p>
// //         <p></p>
// //       </div>
// //       <div className="image-loader"></div>
// //       <img src="" alt="" />
// //     </div>
// //     <div>
// //       <Calendar/>
// //     </div>
// //     </>
// //   )
// // }

// // export default page
// import React from 'react';
// import { Calendar } from '@/components/ui/calendar';

// const data = [
//   {
//     id: 7,
//     image: "/images/Thailand.avif",
//     price: 1500,
//     title: "Asia, Thailand",
//     description: "Great place to visit"
//   }
// ];

// const Page = () => {
//   const house = data[0]; // Assuming there's only one item in the data array

//   return (
//     <div>
//       <div className="">
//         <h2 className="text-2xl font-bold mb-2">{house.title}</h2>
//         <p className="text-lg text-gray-600">{house.description}</p>
//         <p className="text-xl font-bold mt-4">${house.price} per night</p>
//       </div>

//       {/* Banner Section */}
//       <div className="bg-gray-300 p-8">
//         <img src={house.image} alt={house.title} className="w-full h-30 mb-4 rounded-md" />
//       </div>

//       {/* Calendar Section */}
//       <div className="absolute bottom-0 right-0 p-4">
//         <Calendar />
//       </div>
//     </div>
//   );
// }

// export default Page;
import React from 'react';
import { Calendar } from '@/components/ui/calendar';

const data = [
  {
    id: 7,
    image: "/images/Thailand.avif",
    price: 1500,
    title: "Asia, Thailand",
    description: "Great place to visit",
    Host:"Hosted by Syed Muhammad Fasil ul Hassan Zaidi"
  }
];

const Page = () => {
  const house = data[0]; 

  return (
    <div>
      {/* <div className=" border-slate-900 my-5 ">
        <h2 className=" title text-2xl font-bold mb-2">{house.title}</h2>
        <p className="description text-lg text-gray-600">{house.description}</p>
      </div>
     */}
     <div className="border-blue-500 border-solid border-4 p-4">
     <h2 className=" title text-2xl font-bold mb-2">{house.title}</h2>
        <p className="description text-lg text-gray-600">{house.description}</p>
    </div>
    <div className='grid grid-cols-3 gap-4'>
      <div><p>{house.Host},{house.description},{house.price}{house.Host},{house.Host},{house.description},{house.price}{house.Host},{house.description},{house.price}{house.Host},{house.description},{house.price}{house.description},{house.price}</p></div>
    <div className=" p-8 border-cyan-200">
        <img src={house.image} alt={house.title} className="w-60 h-900 mb-4 rounded-md transform rotate-90"/>
      </div>
    <div className=" bottom right-0 p-4">
        <Calendar />
      </div>
    </div>
      
    </div>
  );
}

export default Page;
