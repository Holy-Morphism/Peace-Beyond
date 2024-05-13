// // 'use client'
// // import React,{useEffect,useState} from 'react'
// // import House from '../house/House';
// // import Link from 'next/link';
// // import { getDestinations } from '@/api/destination';
// //  export const houses=[
// //   {
//     id:1,
//   image:"/images/Greece.avif",
//   price:1200,
//   title:"Europe, Greece"
// },
// {
//   id:2,
//   image:"/images/Aruba.avif",
//   price:1500,
//   title:"Americas, Aruba"
// },
// {
//   id:3,
//   image:"/images/Pakistan.avif",
//   price:900,
//   title:"Asia, Pakistan"
// },
// {
//   id:4,
//   image:"/images/UAE.avif",
//   price:750,
//   title:"Asia, UAE"
// },
// {  id:5,
//   image:"/images/Angola.avif",
//   price:700,
//   title:"Africa, Angola"
// },
// {
//   id:"6",
//   image:"/images/Armenia.avif",
//   price:1200,
//   title:"Asia, Armenia"
// },
// {
//   id:"7",
//   image:"/images/Thailand.avif",
//   price:1500,
//   title:"Asia, Thailand"
// },
// {
//   id:"8",
//   image:"/images/India.avif",
//   price:1000,
//   title:"Asia, India"
// },
// {
//   id:"9",
//   image:"/images/Spain.avif",
//   price:1300,
//   title:"Europe, Spain"
// },
// {
//   id:"10",
//   image:"/images/Germany.avif",
//   price:1400,
//   title:"Europe, Germany"
// },
// {
//   id:"11",
//   image:"/images/France.avif",
//   price:950,
//   title:"Europe, France"
// },
// {
//   id:"12",
//   image:"/images/Italy.avif",
//   price:100,
//   title:"Europe, Italy"
// }
// // ];
// // const Gallery = () => {
// //   const [houses, setHouses] = useState([]);

// //   useEffect(() => {
// //     getDestinations().then(setHouses);
// //   }, []);
// //   return (
// //     <div className="pt-4">
// //        <div className='grid grid-cols-4 gap-4'>
// //         {object.keys(houses).map(key) =>
// //           <Link key={house.id} href={`/listings/${house.id}`} passHref>
// //               <House 
// //                 title={house.title}
// //                 image={house.image}
// //                 price={house.price}
// //                 id={house.id}
// //               />
// //           </Link>
// //         )}
// //         </div>
// //       </div>
// //   )
// // }

// // export default Gallery
// 'use client'
// import React, { useEffect, useState } from 'react';
// import { getDestinations } from '@/api/destination';
// import House from '../house/House';
// import Link from 'next/link';

// const Gallery = () => {
//   const [houses, setHouses] = useState({});

//   useEffect(() => {
//     getDestinations().then(setHouses);
//   }, []);

//   return (
//     <div className="pt-4">
//        <div className='grid grid-cols-4 gap-4'>
//         {Object.keys(houses).map((key) =>
//           <Link key={key} href={`/listings/${key}`} passHref>
//             <House
//               title={houses[key].title}
//               image={houses[key].image}
//               price={houses[key].price}
//               id={key} 
//             />
//           </Link>
//         )}
//         </div>
//       </div>
//   )
// }

// export default Gallery

import { getDestinations } from '@/api/destination';
import GalleryComponent from '../house/GalleryComponent';
import Link from 'next/link';

const  Gallery  = async () => {
  const res = await getDestinations();
  const destination =  res.destinations;
    return (
      <div className="pt-4">
        <div className='grid grid-cols-4 gap-4'>
        { destination.map((destination: { id: string, title: string, image: string, price: number }) => (
          <Link key={destination.id} href={`/listings/${destination.id}`} passHref>
            <GalleryComponent
              title={destination.title}
              image={destination.image} 
              price={destination.price}
              id={destination.id}
            />
          </Link>
        ))}
        </div>
      </div>
    );
    
    
  }
export default Gallery;
