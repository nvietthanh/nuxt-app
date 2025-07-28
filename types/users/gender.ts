import type { gender } from "@/const/gender";

export type Gender = (typeof gender)[keyof typeof gender];
