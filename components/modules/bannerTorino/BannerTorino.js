import Image from "next/image";

function BannerTorino() {
  return (
    <div className="flex justify-center">
      <Image
        src="/images/BannerTorino/BannerTorino.webp"
        width={1440}
        height={350}
        className="w-full h-[350px]"
        alt="بنر تورینو"
      />
    </div>
  );
}

export default BannerTorino;
