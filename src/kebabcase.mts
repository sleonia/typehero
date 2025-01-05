import type { Equal, Expect } from "@type-challenges/utils";

type Alphabet =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y"
  | "Z";

type KebabCase<S, Acc extends string = ""> = S extends `${infer F}${infer R}`
  ? F extends Alphabet
    ? Acc extends ""
      ? KebabCase<R, Lowercase<F>>
      : R extends ""
        ? `${Acc}-${Lowercase<F>}`
        : KebabCase<R, `${Acc}-${Lowercase<F>}`>
    : KebabCase<R, `${Acc}${F}`>
  : Acc;

// ------------------- Test section ---------------------

type cases = [
  Expect<Equal<KebabCase<"FooBarBaz">, "foo-bar-baz">>,
  Expect<Equal<KebabCase<"fooBarBaz">, "foo-bar-baz">>,
  Expect<Equal<KebabCase<"foo-bar">, "foo-bar">>,
  Expect<Equal<KebabCase<"foo_bar">, "foo_bar">>,
  Expect<Equal<KebabCase<"Foo-Bar">, "foo--bar">>,
  Expect<Equal<KebabCase<"ABC">, "a-b-c">>,
  Expect<Equal<KebabCase<"-">, "-">>,
  Expect<Equal<KebabCase<"">, "">>,
  Expect<Equal<KebabCase<"😎">, "😎">>,
];
