import { Bold } from "lucide-react"
interface Props {
    title: string;
    image: string;
    price: number;
    id: number;
}

export default function House({ title, price, image }: Props) {
    return (
      <>
        <div className="house bg-white rounded-lg overflow-hidden shadow-sm transform transition-transform hover:scale-105">
            <div className="image-container h-48 overflow-hidden group">
                <img src={image} alt={title} className="object-cover w-full h-full rounded-lg hover:scale-100" />
            </div>
        </div>
        <div className="p-4 overflow-hidden">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-slate-900">${price}<span className="text-slate-500"> night</span></p>
        </div>
        </>
    );
}
