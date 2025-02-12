import type { Equal, Expect } from "@type-challenges/utils";

type _DropChar<
  S extends string,
  C extends string,
> = S extends `${infer F}${infer R}`
  ? F extends C
    ? _DropChar<R, C>
    : `${F}${_DropChar<R, C>}`
  : "";

type DropChar<S extends string, C extends string> = _DropChar<S, C>;

// ------------------- Test section ---------------------

type cases = [
  // @ts-expect-error
  Expect<Equal<DropChar<"butter fly!", "">, "butterfly!">>,
  Expect<Equal<DropChar<"butter fly!", " ">, "butterfly!">>,
  Expect<Equal<DropChar<"butter fly!", "!">, "butter fly">>,
  Expect<Equal<DropChar<"    butter fly!        ", " ">, "butterfly!">>,
  Expect<Equal<DropChar<" b u t t e r f l y ! ", " ">, "butterfly!">>,
  Expect<Equal<DropChar<" b u t t e r f l y ! ", "b">, "  u t t e r f l y ! ">>,
  Expect<Equal<DropChar<" b u t t e r f l y ! ", "t">, " b u   e r f l y ! ">>,
];
