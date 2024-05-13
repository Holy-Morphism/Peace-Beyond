'use client'
import { useParams } from 'next/navigation';
import Description from '@/components/gallery/description';
const Page = () => {
  const { listingsId } = useParams();
  const id = Array.isArray(listingsId) ? listingsId[0] : listingsId;
  return (    
       <Description id={id} />  
      
  );
};

export default Page;
