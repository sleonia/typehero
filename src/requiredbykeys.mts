import type { Equal, Expect } from "@type-challenges/utils";

type RequiredByKeys<T extends object, K extends keyof T = keyof T> = Omit<
  Omit<T, K> & {
    [Key in K]-?: T[Key];
  },
  never
>;

// ------------------- Test section ---------------------

interface User {
  name?: string;
  age?: number;
  address?: string;
}

interface UserRequiredName {
  name: string;
  age?: number;
  address?: string;
}

interface UserRequiredNameAndAge {
  name: string;
  age: number;
  address?: string;
}

type cases = [
  Expect<Equal<RequiredByKeys<User, "name">, UserRequiredName>>,
  Expect<Equal<RequiredByKeys<User, "name" | "age">, UserRequiredNameAndAge>>,
  Expect<Equal<RequiredByKeys<User>, Required<User>>>,
  // @ts-expect-error
  Expect<Equal<RequiredByKeys<User, "name" | "unknown">, UserRequiredName>>,
];
