import Image from "next/image";

interface ImageProps {
        image: string;
}

const HouseImage = (prop:ImageProps) => {
    return (
        <>
            <div className="house-image object-contain h-72 w-3/4  mx-24">
                <Image
                    className=" h-44 w-full rounded-lg hover:scale-100 "
                    src={prop.image}
                    alt="Sunset Tower Hotel dining room"
                    width={500}
                    height={500}
                />
            </div>
        </>
    );
};
export default HouseImage;