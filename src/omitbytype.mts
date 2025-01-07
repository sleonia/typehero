import type { Equal, Expect } from "@type-challenges/utils";

type OmitByType<T extends object, U> = {
  [K in keyof T as T[K] extends U ? never : K]: T[K];
};

// ------------------- Test section ---------------------

interface Model {
  name: string;
  count: number;
  isReadonly: boolean;
  isEnable: boolean;
}

type cases = [
  Expect<Equal<OmitByType<Model, boolean>, { name: string; count: number }>>,
  Expect<
    Equal<
      OmitByType<Model, string>,
      { count: number; isReadonly: boolean; isEnable: boolean }
    >
  >,
  Expect<
    Equal<
      OmitByType<Model, number>,
      { name: string; isReadonly: boolean; isEnable: boolean }
    >
  >,
];
