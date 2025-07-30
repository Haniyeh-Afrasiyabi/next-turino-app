"use client";

import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LoginContext } from "@/core/context/LoginContext";

export default function withAuth(Component) {
  return function ProtectedComponent(props) {
    const { state } = useContext(LoginContext);
    const user = state.user;
    const router = useRouter();

    useEffect(() => {
      if (!user) {
        router.replace("/"); // برگرداندن به صفحه اصلی
      }
    }, [user, router]);

    if (!user) return null; // تا زمانی که ریدایرکت انجام بشه، چیزی نمایش نده

    return <Component {...props} />;
  };
}
