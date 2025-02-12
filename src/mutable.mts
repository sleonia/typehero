import type { Equal, Expect } from "@type-challenges/utils";

type Mutable<T extends object> = {
  -readonly [K in keyof T]: T[K];
};

// ------------------- Test section ---------------------

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}

type List = [1, 2, 3];

type cases = [
  Expect<Equal<Mutable<Readonly<Todo1>>, Todo1>>,
  Expect<Equal<Mutable<Readonly<List>>, List>>,
];

type errors = [
  // @ts-expect-error
  Mutable<"string">,
  // @ts-expect-error
  Mutable<0>,
];
