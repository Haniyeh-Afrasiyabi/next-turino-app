"use client";
import Slider from "./Slider";

function WhyTurino() {
  return (
    <div className="w-[97%] m-auto flex flex-col md:flex-row gap-5">
      <div className="flex flex-col gap-4  md:w-[50%]">
        <div className=" flex items-center gap-2">
          <div className="rounded-full bg-gradient-to-r from-secondory to-lightGreen px-[1rem] py-[0.3rem] text-3xl font-black ">
            ؟
          </div>
          <p className="text-black1 font-extrabold text-3xl">
            چرا <span className="text-primary">تورینو</span> ؟
          </p>
        </div>

        <div className="hidden md:flex md:flex-col gap-2">
          <p className="text-black1 font-medium text-2xl">
            تور طبیعت گردی و تاریخی{" "}
          </p>
          <p className="text-black1 font-medium text-xl text-justify leading-7">
            اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل
            طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید تورهای
            طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های گردشگری و
            آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای فرهنگی و
            تاریخی را خریداری کنید.
          </p>
        </div>
      </div>
      <div className="md:w-[60%]">
        <Slider />
      </div>
    </div>
  );
}

export default WhyTurino;
