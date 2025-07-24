import { object, string } from "yup";

export let profileSchema = object({
  email: string().email(),
});
