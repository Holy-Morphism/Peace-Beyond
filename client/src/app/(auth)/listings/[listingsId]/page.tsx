import React from 'react'
import { Calendar } from '@/components/ui/calendar'
const data=[
  {id:7,
  image:"/images/Thailand.avif",
  price:1500,
  title:"Asia, Thailand",
  description:"great place to visit"
}
]

const page = () => {
  return (
    <>
    <div className="house pt-4 pb-4 m-2 ">
      <div className="details">
        <p></p>
        <p></p>
      </div>
      <div className="image-loader"></div>
      <img src="" alt="" />
    </div>
    <div>
      <Calendar/>
    </div>
    </>
  )
}

export default page
