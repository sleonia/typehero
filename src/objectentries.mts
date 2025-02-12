import type { Equal, Expect } from "@type-challenges/utils";

type ObjectEntries<T extends object> = {
  [K in keyof T]-?: [
    K,
    Required<T>[K] extends never ? undefined : Required<T>[K],
  ];
}[keyof T];

// ------------------- Test section ---------------------

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type ModelEntries =
  | ["name", string]
  | ["age", number]
  | ["locations", string[] | null];

type cases = [
  Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
  Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
  Expect<Equal<ObjectEntries<{ key?: undefined }>, ["key", undefined]>>,
  Expect<Equal<ObjectEntries<{ key: undefined }>, ["key", undefined]>>,
  Expect<
    Equal<
      ObjectEntries<{ key: string | undefined }>,
      ["key", string | undefined]
    >
  >,
];
