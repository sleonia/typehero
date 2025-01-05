import type { Equal, Expect } from "@type-challenges/utils";

/*
 * Thanks to ChatGPT
 *
 * The condition `Acc extends Acc` triggers distribution over union types.
 * It ensures each member of the union is processed individually in the recursive step.
 */

type Permutation<T, Acc = T> = [T] extends [never]
  ? []
  : Acc extends Acc
    ? [Acc, ...Permutation<Exclude<T, Acc>>]
    : never;

// ------------------- Test section ---------------------

type cases = [
  Expect<Equal<Permutation<"A">, ["A"]>>,
  Expect<
    Equal<
      Permutation<"A" | "B" | "C">,
      | ["A", "B", "C"]
      | ["A", "C", "B"]
      | ["B", "A", "C"]
      | ["B", "C", "A"]
      | ["C", "A", "B"]
      | ["C", "B", "A"]
    >
  >,
  Expect<
    Equal<
      Permutation<"B" | "A" | "C">,
      | ["A", "B", "C"]
      | ["A", "C", "B"]
      | ["B", "A", "C"]
      | ["B", "C", "A"]
      | ["C", "A", "B"]
      | ["C", "B", "A"]
    >
  >,
  Expect<Equal<Permutation<boolean>, [false, true] | [true, false]>>,
  Expect<Equal<Permutation<never>, []>>,
];
