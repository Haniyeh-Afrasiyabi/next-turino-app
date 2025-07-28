import { object, string, date } from "yup";

export let personalSchema = object({
  fullName: string(),
  // .required("نام الزامی است"),
  nationalCode: string()
    .nullable()
    .notRequired()
    .test("empty-or-valid", "کد ملی باید ۱۰ رقم باشد", function (value) {
      if (!value || value.trim() === "") return true;
      return /^\d{10}$/.test(value);
    }),
  // .required("کد ملی الزامی است"),
  birthDate: date()
    .nullable()
    .transform((curr, orig) => (orig === "" ? null : curr))
    .notRequired()
    .typeError("تاریخ تولد معتبر نیست"),
  // .required("تاریخ تولد الزامی است"),
  gender: string().oneOf(["", "male", "female"], "جنسیت معتبر نیست"),
  // .required("جنسیت الزامی است"),
});
