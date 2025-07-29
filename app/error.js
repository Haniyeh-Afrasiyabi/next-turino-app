"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("خطای غیرمنتظره:", error);
  }, [error]);

  return (
    <div className="flex flex-col pb-16 pt-7 md:flex-row-reverse justify-around lg:w-[80%] m-auto items-center  ">
      <div>
        <Image
          src="/images/ErrorServer/ErrorServer.webp"
          width={450}
          height={450}
          alt="error 404"
        />
      </div>
      <div className="flex flex-col gap-16 justify-center items-center">
        <h2 className="text-3xl lg:text-4xl font-semibold black1">
          اتصال با سرور برقرار نیست!
        </h2>
        <p className="text-2xl font-semibold trxt-black1">
          لطفا بعدا دوباره امتحان کنید.
        </p>

        {/* <button
          onClick={() => reset()}
          className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition"
        >
          تلاش مجدد
        </button> */}
      </div>
    </div>
  );
}

{
  /* <button
  onClick={() => reset()}
  className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition"
>
  تلاش مجدد
</button> */
}
