import BannerTorino from "@/components/modules/bannerTorino/BannerTorino";
import { getTours } from "@/core/services/config";
import FilterTours from "../modules/tour/filterTours/FilterTours";
import PhoneShopping from "../modules/phoneShopping/PhoneShopping";
import WhyTurino from "../modules/whyTurino/WhyTurino";

export default async function HomePage() {
  const tours = await getTours();

  return (
    <>
      <BannerTorino />
      <div className="overflow-hidden flex flex-col px-8 md:px-30 max-w-screen-2xl mx-auto">
        <h3 className="mt-6 text-center text-base text-gray md:text-[1.75rem] font-semibold">
          <span className="text-primary"> تورینو</span> برگزار کننده بهترین تور
          های داخلی و خارجی
        </h3>

        <FilterTours tours={tours} />
        <PhoneShopping />
        <WhyTurino />
      </div>
    </>
  );
}
