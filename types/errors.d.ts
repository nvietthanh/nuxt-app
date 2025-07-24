import { InjectionKey } from "vue";

type ErrorsHelper = {
  get: (field: string) => string[];
  first: (field: string) => string | undefined;
  has: (field: string) => boolean;
  any: () => boolean;
  all: () => Record<string, string[]>;
  clear: (field?: string) => void;
  set: (
    field: string | Record<string, string[]>,
    messages?: string | string[]
  ) => void;
};

declare module "#app" {
  interface NuxtApp {
    $errors: ErrorsHelper;
  }
}

declare module "vue" {
  interface ComponentCustomProperties {
    $errors: ErrorsHelper;
  }
}
