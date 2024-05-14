import Gallery from '@/components/gallery/Gallery'

const Destinations = async ({ params }:{ params: { page: string }}) => {
  let page = Number(params?.page || 1);
  let itemsPerPage = 4;
  let skip = (page - 1) * itemsPerPage;
  const limit = (skip + itemsPerPage).toString();

  const res = await getDestinationPagination(skip.toString(),limit);

  const destination = res.destinations;
  return (
    <div className="pt-4">
      <div className="grid grid-cols-4 gap-4">
        {destination.map(
          (destination: {
            id: string;
            title: string;
            image: string;
            price: number;
          }) => (
            <Link
              key={destination.id}
              href={`/listings/${destination.id}`}
              passHref
            >
              <GalleryComponent
                title={destination.title}
                image={destination.image}
                price={destination.price}
                id={destination.id}
              />
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default Destinations;
