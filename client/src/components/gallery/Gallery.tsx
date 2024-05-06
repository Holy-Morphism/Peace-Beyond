import React from 'react'
import House from '../house/House';
import Link from 'next/link';
 export const houses=[
  {
    id:1,
  image:"/images/Greece.avif",
  price:1200,
  title:"Europe, Greece"
},
{
  id:2,
  image:"/images/Aruba.avif",
  price:1500,
  title:"Americas, Aruba"
},
{
  id:3,
  image:"/images/Pakistan.avif",
  price:900,
  title:"Asia, Pakistan"
},
{
  id:4,
  image:"/images/UAE.avif",
  price:750,
  title:"Asia, UAE"
},
{  id:5,
  image:"/images/Angola.avif",
  price:700,
  title:"Africa, Angola"
},
{
  id:6,
  image:"/images/Armenia.avif",
  price:1200,
  title:"Asia, Armenia"
},
{
  id:7,
  image:"/images/Thailand.avif",
  price:1500,
  title:"Asia, Thailand"
},
{
  id:8,
  image:"/images/India.avif",
  price:1000,
  title:"Asia, India"
},
{
  id:9,
  image:"/images/Spain.avif",
  price:1300,
  title:"Europe, Spain"
},
{
  id:10,
  image:"/images/Germany.avif",
  price:1400,
  title:"Europe, Germany"
},
{
  id:11,
  image:"/images/France.avif",
  price:950,
  title:"Europe, France"
},
{
  id:12,
  image:"/images/Italy.avif",
  price:100,
  title:"Europe, Italy"
}
];
const Gallery = () => {
 
  return (
    <div className="pt-4">
       <div className='grid grid-cols-4 gap-4'>
        {houses.map((house) =>
          <Link key={house.id} href={`/listings/${house.id}`} passHref>
              <House 
                title={house.title}
                image={house.image}
                price={house.price}
                id={house.id}
              />
          </Link>
        )}
        </div>
      </div>
  )
}

export default Gallery

