import type { Gender } from "./gender";

export interface Profile {
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  gender: Gender;
  birthday: string,
  address: string;
}