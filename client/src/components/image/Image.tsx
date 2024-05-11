import React from 'react';

interface ImageProps {
    house: {
        description: string;
        title: string;
        image: string;
        Host: string;}
}

const Image: React.FC<ImageProps> = ({ house }) => {
    return (
        <>
                <div className="house-image object-contain h-72 w-3/4  mx-24">
                    <img
                        className=" h-44 w-full rounded-lg hover:scale-100 "
                        src={house.image}
                        alt="Sunset Tower Hotel dining room"
                    />
                </div>
            
        </>
    );
};

export default Image;