import Image from "next/image";
function PhoneShopping() {
  return (
    <div className="w-[97%] m-auto my-20 flex flex-col items-center border border-gray10 rounded-lg md:flex-row ">
      <div className="w-full bg-primary rounded-t-lg  md:rounded-lg flex justify-between sm445:px-1 sm445:pt-4 ">
        <div className="flex flex-col gap-4 pt-4 pr-4 ">
          <p className="font-extrabold text-sm  text-white   sm445:text-3xl  md:text-xl lg:text-4xl">
            خرید تلفنی از <span className="text-secondory">تورینو</span>
          </p>
          <p className="font-normal text-sm text-white  sm:text-lg lx:text-xl ">
            به هرکجا که میخواهید!
          </p>
        </div>

        <Image
          src="/images/PhoneShopping/PhoneShoppingImage.png"
          alt="PhoneShoppingImage"
          className=" color-primary sm445:h-[160px] sm445:w-[210px] md:w-[280px] "
          width={130}
          height={150}
        />
      </div>
      <div className=" w-full flex md:flex-col md:w-[40%]  items-center justify-center gap-4 px-4 py-4">
        <Image
          src="/images/PhoneNumber/PhoneNumber.webp"
          width={130}
          height={130}
          alt="PhoneNumber"
        />
        <button className="border rounded-xl bg-secondory font-medium text-white text-xs  px-7 py-2 sm445:px-4 md:px-8   sm445:text-sm sm445:font-normal ">
          اطلاعات بیشتر
        </button>
      </div>
    </div>
  );
}

export default PhoneShopping;
