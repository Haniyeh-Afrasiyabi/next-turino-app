import Image from "next/image";

function Features() {
  return (
    <div className="w-[90%] m-auto md:w-full flex flex-col gap-12  p-9 mt-12 border-t-2 border-gray10  md:flex-row md:gap-5  justify-between md:px-12 md:py-5 md:mt-3 ">
      <div className=" flex gap-2 items-center ">
        <div>
          <Image
            src="/images/Features/Price.webp"
            alt="ارزان‌ترین"
            width={80}
            height={80}
          />
        </div>

        <div className="flex flex-col gap-1 ">
          <p className="md:text-xl lg:text-2xl font-medium text-black1">
            بصرفه ترین قیمت
          </p>
          <p className="font-light text-base text-black1 ">
            بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.
          </p>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <div>
          <Image
            src="/images/Features/Chat.webp"
            alt="پشتیبانی"
            width={80}
            height={80}
          />
        </div>

        <div className="flex flex-col gap-1 ">
          <p className="md:text-xl lg:text-2xl font-medium text-black1">
            پشتیبانی
          </p>
          <p className="font-light text-base text-black1 ">
            پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.
          </p>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <div>
          {" "}
          <Image
            src="/images/Features/Satisfaction.webp"
            alt="رضایت کاربران"
            width={80}
            height={80}
          />
        </div>

        <div className="flex flex-col gap-1 ">
          <p className="md:text-xl lg:text-2xl font-medium text-black1">
            رضایت کاربران
          </p>
          <p className="font-light text-base text-black1 ">
            رضایت بیش از 10هزار کاربر از تور های ما.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
