import Link from "next/link";
import Image from "next/image";

function MenuWeb() {
  return (
    <div className=" hidden lg:flex lg:items-center lg:gap-12">
      <Link href="/">
        <Image
          src="/images/TorinoLogo/Torino.webp"
          width={146}
          height={44}
          alt="Torino Logo"
        />
      </Link>

      <ul className="flex">
        <li className="px-4 cursor-pointer text-base font-medium text-primary">
          <Link href="/">صفحه اصلی </Link>
        </li>
        <li className="px-4 cursor-pointer text-base font-medium">
          خدمات گردشگری
        </li>
        <li className="px-4 cursor-pointer text-base font-medium">درباره ما</li>
        <li className="px-4 cursor-pointer text-base font-medium">
          تماس با ما
        </li>
      </ul>
    </div>
  );
}

export default MenuWeb;
