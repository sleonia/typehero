import type { Equal, Expect, NotEqual } from "@type-challenges/utils";

type Flip<T extends Record<PropertyKey, string | boolean | number>> = {
  [K in keyof T as `${T[K]}`]: K;
};

// ------------------- Test section ---------------------

type cases = [
  Expect<Equal<{ a: "pi" }, Flip<{ pi: "a" }>>>,
  Expect<NotEqual<{ b: "pi" }, Flip<{ pi: "a" }>>>,
  Expect<Equal<{ 3.14: "pi"; true: "bool" }, Flip<{ pi: 3.14; bool: true }>>>,
  Expect<
    Equal<{ val2: "prop2"; val: "prop" }, Flip<{ prop: "val"; prop2: "val2" }>>
  >,
];
