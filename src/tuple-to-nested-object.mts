import type { Equal, Expect } from "@type-challenges/utils";

type Reverse<T extends string[]> = T extends [
  infer F,
  ...infer R extends string[],
]
  ? [...Reverse<R>, F]
  : [];

type _TupleToNestedObject<T extends string[], K> = T extends [
  infer F extends string,
  ...infer R extends string[],
]
  ? _TupleToNestedObject<
      R,
      {
        [Key in F]: K;
      }
    >
  : K;

type TupleToNestedObject<T extends string[], U> =
  Reverse<T> extends [infer F extends string, ...infer R extends string[]]
    ? _TupleToNestedObject<
        R,
        {
          [Key in F]: U;
        }
      >
    : U;

// ------------------- Test section ---------------------

type cases = [
  Expect<Equal<TupleToNestedObject<["a"], string>, { a: string }>>,
  Expect<Equal<TupleToNestedObject<["a", "b"], number>, { a: { b: number } }>>,
  Expect<
    Equal<
      TupleToNestedObject<["a", "b", "c"], boolean>,
      { a: { b: { c: boolean } } }
    >
  >,
  Expect<Equal<TupleToNestedObject<[], boolean>, boolean>>,
];
