// import Link from "next/link";

// export default function ProfileLayout({ children }) {
//   return (
//     <div className="px-7 pb-4  md:grid md:grid-cols-[1fr_3fr] md:gap-12 md:py-8 md:px-28 bg-yellow-400 ">
//       <ul className=" flex justify-between border-b-2 border-gray9  ">
//         <li className="font-normal text-base text-black1 border-b-1 py-3">
//           <Link href="/profile">پروفایل من</Link>
//         </li>
//         <li className="font-normal text-base text-black1 border-b-1 py-3">
//           <Link href="/profile/my-tours">تور ها من</Link>
//         </li>
//         <li className="font-normal text-base text-black1 border-b-1 py-3">
//           <Link href="/profile/transactions">تراکنش ها</Link>
//         </li>
//       </ul>

//       <main className="bg-blue-400 mt-6">{children}</main>
//     </div>
//   );
// }

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
    <div className="px-7 pb-4 md:grid md:grid-cols-[1fr_3fr] md:gap-12 md:py-8 md:px-28 ">
      <ul className="flex justify-between border-b-2 border-gray9 md:border md:border-gray9 md:rounded-xl    md:flex-col">
        {links.map(({ href, label }) => {
          const isActive = pathname === href;

          return (
            <li
              key={href}
              className={`font-normal text-base border-b py-3 md:px-3 md:py-4 md:border-b-1 md:border-gray9 md:rounded-xl    ${
                isActive
                  ? "text-primary border-primary md:bg-green2"
                  : "text-black1 border-transparent"
              }`}
            >
              <Link href={href}>{label}</Link>
            </li>
          );
        })}
      </ul>

      <main className="bg-blue-400 mt-6">{children}</main>
    </div>
  );
}
