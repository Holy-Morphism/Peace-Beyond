import { Bold } from "lucide-react"
import Image from 'next/image'
interface Props {
    title: string;
    image: string;
    price: number;
    id: string;
}

export default function GalleryComponent({ title, price, image }: Props) {
    return (
      <>
        <div className="house bg-white rounded-lg overflow-hidden shadow-sm transform transition-transform hover:scale-105">
            <div className="image-container h-48 overflow-hidden group">
                <Image src={image} alt={title} className="object-cover w-full h-full rounded-lg hover:scale-100" width={500} height={500} />
            </div>
        </div>
        <div className="p-4 overflow-hidden">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-slate-900">${price}<span className="text-slate-500"> night</span></p>
        </div>
        </>
    );
}
