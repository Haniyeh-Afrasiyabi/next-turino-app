"use client";

import TourCard from "../tourCard/TourCard";

export default function TourList({ tours }) {
  return (
    <section className="flex flex-col mt-8 max-w-screen-2xl mx-auto">
      <h3 className="text-2xl font-normal md:px-[2.5rem] ">همه تور ها</h3>
      <div className="flex flex-wrap justify-center gap-6 mt-4">
        {tours.length ? (
          tours.map((tour) => <TourCard key={tour.id} tour={tour} />)
        ) : (
          <p className="text-2xl font-normal md:px-[2.5rem] text-center bg-primary p-3 rounded-md text-white ">هیچ توری پیدا نشد</p>
        )}
      </div>
    </section>
  );
}
