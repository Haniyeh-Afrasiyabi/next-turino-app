"use client";

import { useEffect, useState } from "react";
import TourCard from "../tourCard/TourCard";

export default function TourList({ tours }) {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // اولین بار اجرا
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = () => setShowAll((prev) => !prev);

  const visibleTours = isMobile && !showAll ? tours.slice(0, 4) : tours;

  return (
    <section className="flex flex-col mt-8 max-w-screen-2xl mx-auto">
      <h3 className="text-2xl font-normal md:px-[2.5rem]">همه تور ها</h3>

      <div className="flex flex-wrap justify-center gap-6 mt-4">
        {visibleTours.length ? (
          visibleTours.map((tour) => <TourCard key={tour.id} tour={tour} />)
        ) : (
          <p className="text-2xl font-normal md:px-[2.5rem] text-center bg-primary p-3 rounded-md text-white">
            هیچ توری پیدا نشد
          </p>
        )}
      </div>

      {/* دکمه بیشتر فقط در موبایل و اگر بیشتر از ۴ تور داشته باشیم */}
      {isMobile && tours.length > 4 && (
        <button
          onClick={handleToggle}
          className="mt-6 mx-auto text-gray3 text-sm font-medium "
        >
          {showAll ? "بستن   ▲" : "مشاهده بیشتر ▼"}
        </button>
      )}
    </section>
  );
}






// "use client";

// import TourCard from "../tourCard/TourCard";

// export default function TourList({ tours }) {
//   return (
//     <section className="flex flex-col mt-8 max-w-screen-2xl mx-auto">
//       <h3 className="text-2xl font-normal md:px-[2.5rem] ">همه تور ها</h3>
//       <div className="flex flex-wrap justify-center gap-6 mt-4">
//         {tours.length ? (
//           tours.map((tour) => <TourCard key={tour.id} tour={tour} />)
//         ) : (
//           <p className="text-2xl font-normal md:px-[2.5rem] text-center bg-primary p-3 rounded-md text-white ">هیچ توری پیدا نشد</p>
//         )}
//       </div>
//     </section>
//   );
// }