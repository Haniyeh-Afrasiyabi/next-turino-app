// import TourList from "@/components/modules/tour/tourList/TourList";

import TourList from "@/components/modules/tour/tourList/TourList";
import styles from "./HomePage.module.css";
import BannerTorino from "@/components/modules/bannerTorino/BannerTorino";
// import SearchForm from "@/components/modules/searchForm/SearchForm";


function HomePage() {
  return (
    <>
      <BannerTorino />
      <div className={styles.container}>
        <h3>
          <span> تورینو</span> برگزار کننده بهترین تور های داخلی و خارجی
        </h3>

        {/* <SearchForm /> */}

        {/* <TourList /> */}
        <TourList />
        
      </div>
    </>
  );
}

export default HomePage;
