"use client";

import TourDetailDesktop from "@/components/modules/tour/tourDetail/tourDetailDesktop/TourDetailDesktop";
import TourDetailMobile from "@/components/modules/tour/tourDetail/tourDetailMobile/TourDetailMobile";

export default function TourDetailPage() {
  return (
    <>
      <div className="md:hidden">
        <TourDetailMobile />
      </div>
      <div className="hidden md:block">
        <TourDetailDesktop />
      </div>
    </>
  );
}
