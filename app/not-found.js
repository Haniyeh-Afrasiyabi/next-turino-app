"use client";
import Image from "next/image";
import Link from "next/link";

function NotFound() {
  return (
    <div className="flex flex-col pb-16 pt-7 md:flex-row-reverse justify-around lg:w-[80%] m-auto items-center  ">
      <div>
        <Image
          src="/images/ErrorNotFound/ErrorNotFound.webp"
          width={450}
          height={450}
          alt="error 404"
        />
      </div>
      <div className="flex flex-col gap-16 justify-center items-center">
        <h2 className="text-3xl lg:text-4xl font-semibold black1">
          صفحه مورد نظر یافت نشد!
        </h2>
        <Link
          className="font-semibold text-2xl lg:text-3xl text-primary bg-lightGreen2 px-10   py-4 rounded-2xl"
          href="/"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
