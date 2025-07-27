"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProfileLayout({ children }) {
  const pathname = usePathname();

  const links = [
    { href: "/profile", label: "پروفایل من" },
    { href: "/profile/my-tours", label: "تور ها من" },
    { href: "/profile/transactions", label: "تراکنش ها" },
  ];

  return (
    <div className="px-7 pb-4 lg:grid lg:grid-cols-[1fr_3fr] lg:gap-5 lg:py-8 lg:px-28 ">
      <ul className="flex justify-between border-b-2 border-gray9 lg:border lg:border-gray9 lg:rounded-xl  lg:flex-col lg:max-h-44">
        {links.map(({ href, label }) => {
          const isActive = pathname === href;

          return (
            <li
              key={href}
              className={`font-normal text-base border-b py-3 lg:px-3 lg:py-4 lg:border-b-1 lg:border-gray9 lg:rounded-xl    ${
                isActive
                  ? "text-primary border-primary lg:bg-green2"
                  : "text-black1 border-transparent"
              }`}
            >
              <Link href={href}>{label}</Link>
            </li>
          );
        })}
      </ul>

      <main className=" mt-6 lg:mt-1">{children}</main>
    </div>
  );
}
