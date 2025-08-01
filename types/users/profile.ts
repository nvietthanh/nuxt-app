import type { Gender } from "./gender";

export interface Profile {
  image_url: string | null,
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  gender: Gender;
  birthday: string,
  address: string;
}