import TourList from "@/components/modules/tour/tourList/TourList";
import BannerTorino from "@/components/modules/bannerTorino/BannerTorino";

function HomePage() {
  return (
    <>
      <BannerTorino />
      <div className="overflow-hidden flex flex-col px-8 md:px-32">
        <h3 className="mt-4 text-center text-base text-gray md:text-[1.75rem] font-semibold">
          <span className="text-primary"> تورینو</span> برگزار کننده بهترین تور
          های داخلی و خارجی
        </h3>

        <TourList />
      </div>
    </>
  );
}

export default HomePage;
