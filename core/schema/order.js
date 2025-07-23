import { object, string, date } from "yup";

export let orderSchema = object({
  fullName: string().required("نام الزامی است"),
  nationalCode: string()
    .length(10, "کد ملی باید ۱۰ رقم باشد")
    .required("کد ملی الزامی است"),
  birthDate: date()
    .typeError("تاریخ تولد معتبر نیست")
    .required("تاریخ تولد الزامی است"),
  gender: string()
    .oneOf(["male", "female"], "جنسیت معتبر نیست")
    .required("جنسیت الزامی است"),
});
