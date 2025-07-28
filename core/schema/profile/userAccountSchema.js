import { object, string } from "yup";

export let userAccountSchema = object({
  email: string().email(),
});
