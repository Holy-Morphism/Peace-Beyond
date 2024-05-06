import { Bold } from "lucide-react"

interface props{
    title:string
    image:string
    price:number
    id:number
}
export default function House({title,price,image}: props)
{
  return (
<div className="house bg-white rounded-lg overflow-hidden shadow-sm ">
      <div className="image-container h-48 rounded-lg overflow-hidden group transition-transform duration-300 transform hover:scale-110 w-50%">
        <img src={image} alt={title} className="object-cover w-full h-full " />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-slate-900">${price}<span className="text-slate-500"> night</span></p>
      </div>
    </div>
  )
}
