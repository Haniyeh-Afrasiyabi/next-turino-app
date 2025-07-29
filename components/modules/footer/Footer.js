"use client";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <div className="flex flex-col self-end w-[90%]   mx-auto   md:w-full  ">
      <div className="w-full pt-8  md:w-[90%] m-auto border-t-2 border-gray10  justify-between ">
        <div className=" flex flex-col  gap-10 md:flex-row justify-between md: pb-8">
          <div className="flex justify-around gap-20 ">
            <div className="flex flex-col gap-5">
              <p className="font-semibold text-xl">تورینو</p>
              <ul className="flex flex-col gap-2">
                <li className="text-base font-normal text-black1">
                  <Link href="/">درباره ما</Link>
                </li>
                <li className="text-base font-normal text-black1">
                  <Link href="/">تماس با ما</Link>
                </li>
                <li className="text-base font-normal text-black1">
                  <Link href="/">چرا تورینو</Link>
                </li>
                <li className="text-base font-normal text-black1">
                  <Link href="/">بیمه مسافرتی</Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <p className="font-semibold text-xl">خدمات مشتریان</p>
              <ul className="flex flex-col gap-2">
                <li className="text-base font-normal text-black1">
                  <Link href="/">پشتیبانی آنلاین</Link>
                </li>
                <li className="text-base font-normal text-black1">
                  <Link href="/">راهنمای خرید</Link>
                </li>
                <li className="text-base font-normal text-black1">
                  <Link href="/">راهنمای استرداد</Link>
                </li>
                <li className="text-base font-normal text-black1">
                  <Link href="/">پرسش و پاسخ</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-row-reverse justify-between pb-2 items-center md:w-[50%] md:flex-col md:gap-8 md:items-end">
            <div className="flex flex-col justify-center items-end gap-5">
              <div>
                <Image
                  src="/images/TorinoLogo/Torino.webp"
                  width={100}
                  height={50}
                  alt="لوگو تورینو"
                />
              </div>

              <p className="text-sm font-normal">
                تلفن پشتیبانی :<span className="">۸۵۷۴-۰۲۱</span>
              </p>
            </div>

            <div className=" w-[50%] flex flex-wrap justify-center gap-5 md:flex md:w-full md:justify-end">
              <div>
                <Image
                  src="/images/Permissions/ecunion.webp"
                  width={50}
                  height={50}
                  alt="لوگو تورینو"
                />
              </div>
              <div>
                <Image
                  src="/images/Permissions/samandehi.webp"
                  width={50}
                  height={50}
                  alt="لوگو تورینو"
                />
              </div>
              <div>
                <Image
                  src="/images/Permissions/aira.webp"
                  width={50}
                  height={50}
                  alt="لوگو تورینو"
                />
              </div>
              <div>
                <Image
                  src="/images/Permissions/airline-.webp"
                  width={50}
                  height={50}
                  alt="لوگو تورینو"
                />
              </div>
              <div>
                <Image
                  src="/images/Permissions/passengerRights.webp"
                  width={50}
                  height={50}
                  alt="لوگو تورینو"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full  py-2 border-t-2 border-gray10 ">
        <p className="text-base font-normal text-center">
          کلیه حقوق این وب سایت متعلق به تورینو میباشد.
        </p>
      </div>
    </div>
  );
}

export default Footer;
