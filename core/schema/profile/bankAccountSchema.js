import { object, string } from "yup";

export let bankAccountSchema = object({
  debitCard_code: string()
    .nullable()
    .notRequired()
    .test(
      "empty-or-valid",
      "شماره کارت باید ۱۶ رقم باشد",
      (value) => !value || /^\d{16}$/.test(value)
    ),

  shaba_code: string()
    .nullable()
    .notRequired()
    .test(
      "empty-or-valid",
      "شماره شبا باید با IR شروع شده و ۲۴ رقم داشته باشد",
      (value) => !value || /^IR\d{24}$/.test(value)
    ),

  accountIdentifier: string()
    .nullable()
    .notRequired()
    .test(
      "empty-or-valid",
      "شماره حساب باید بین ۶ تا ۲۰ رقم باشد",
      (value) => !value || /^\d{6,20}$/.test(value)
    ),
});
