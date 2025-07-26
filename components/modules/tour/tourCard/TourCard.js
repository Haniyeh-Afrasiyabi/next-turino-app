import Image from "next/image";
import Link from "next/link";
function TourCard({ tour }) {
  return (
    <div className="w-full sm445:w-[20.465rem] border border-gray4 rounded-xl shadow-sm">
      <Image
        src={tour.image}
        alt={tour.title}
        width={100}
        height={100}
        className="w-full h-40 object-fill"
      />
      <div>
        <div className="p-2 space-y-1">
          <h3 className=" font-normal text-xl">{tour.title}</h3>

          <p className=" font-normal text-base text-gray5">
            {tour.options.map((option, index) => (
              <span key={index}>
                {option}
                {index !== tour.options.length - 1 && " - "}
              </span>
            ))}
          </p>
        </div>

        <div className="flex items-center px-2 pb-2 justify-between border-t-2 border-gray4">
          <button className="bg-green-600 text-white px-4 py-1 mt-2 rounded w-24 text-base font-normal">
            <Link href={`/tours/${tour?.id}`} className=" text-white">
              رزرو
            </Link>
          </button>
          <p className="flex items-center gap-1 font-normal  text-base ">
            <span className="text-complementry">
              {Number(tour.price).toLocaleString("fa-IR")}
            </span>
            <span>تومان</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TourCard;
