import type { Equal, Expect } from "@type-challenges/utils";

type DeepOmit<
  T extends object,
  S extends string,
> = S extends `${infer _F}.${infer R}`
  ? {
      [K in keyof T]: T[K] extends object ? DeepOmit<T[K], R> : T[K];
    }
  : Omit<T, S>;

// ------------------- Test section ---------------------

type obj = {
  person: {
    name: string;
    age: {
      value: number;
    };
  };
};

type cases = [
  Expect<Equal<DeepOmit<obj, "person">, {}>>,
  Expect<
    Equal<DeepOmit<obj, "person.name">, { person: { age: { value: number } } }>
  >,
  Expect<Equal<DeepOmit<obj, "name">, obj>>,
  Expect<
    Equal<
      DeepOmit<obj, "person.age.value">,
      { person: { name: string; age: {} } }
    >
  >,
];
