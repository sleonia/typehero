import type { Equal, Expect } from "@type-challenges/utils";

// also might be solved via Extract<U, { type: T }>
type LookUp<U, T> = U extends { type: T } ? U : never;

// ------------------- Test section ---------------------

interface Cat {
  type: "cat";
  breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal";
}

interface Dog {
  type: "dog";
  breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer";
  color: "brown" | "white" | "black";
}

type Animal = Cat | Dog;

type cases = [
  Expect<Equal<LookUp<Animal, "dog">, Dog>>,
  Expect<Equal<LookUp<Animal, "cat">, Cat>>,
];
