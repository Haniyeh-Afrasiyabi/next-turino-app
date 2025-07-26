import Image from "next/image";
import Link from "next/link";
function TourCard({ tour }) {
  return (
    <div className="w-full sm445:w-[327.44px]">
      <Image
        src={tour.image}
        alt={tour.title}
        width={100}
        height={100}
        className="w-full h-40 object-fill"
      />
      <div className="p-4 space-y-1">
        <h3 className="font-bold">{tour.title}</h3>
        <p className="text-sm text-gray-600">
          از {tour.origin.name} به {tour.destination.name}
        </p>
        <p className="text-green-600 font-semibold">
          قیمت: {Number(tour.price).toLocaleString()} تومان
        </p>
        <button className="bg-green-600 text-white px-4 py-1 mt-2 rounded">
          <Link href={`/tours/${tour?.id}`} className="bg-blue-500 text-white">
            رزرو
          </Link>
        </button>
      </div>
    </div>
  );
}

export default TourCard;
