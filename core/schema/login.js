import { object, string } from "yup";

export let loginSchema = object({
  number: string()
    .required(" شماره موبایل الزامی است")
    .matches(/^09\d{9}$/, "شماره موبایل معتبر وارد کنید"),
});
