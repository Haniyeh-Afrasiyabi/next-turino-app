"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { orderSchema } from "@/core/schema/order";
import { submitOrder } from "@/core/services/config";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";



export default function BookingPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(orderSchema),
  });

  const onSubmit = async (formData) => {
    try {
      const payload = {
        fullName: formData.fullName,
        nationalCode: formData.nationalCode,
        gender: formData.gender,
        birthDate: formData.birthDate, // اگر از input type=date استفاده شده باشه، خودش ISO هست
      };

      const ja = await submitOrder(payload);
      toast.success("سفارش با موفقیت ثبت شد");
      router.push("/profile/my-tours");
      console.log(ja);
    } catch (error) {
      console.log(error?.message);
      toast.error("خطا در ثبت سفارش");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-md mx-auto"
    >
      <h2 className="text-xl font-bold">مشخصات مسافر</h2>

      <input {...register("fullName")} placeholder="نام و نام خانوادگی" />
      {errors.fullName && (
        <p className="text-red-500">{errors.fullName.message}</p>
      )}

      <input {...register("nationalCode")} placeholder="کد ملی" />
      {errors.nationalCode && (
        <p className="text-red-500">{errors.nationalCode.message}</p>
      )}

      <input type="date" {...register("birthDate")} />
      {errors.birthDate && (
        <p className="text-red-500">{errors.birthDate.message}</p>
      )}

      <select {...register("gender")}>
        <option value="">انتخاب جنسیت</option>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
      {errors.gender && <p className="text-red-500">{errors.gender.message}</p>}

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        ثبت و خرید نهایی
      </button>
    </form>
  );
}
