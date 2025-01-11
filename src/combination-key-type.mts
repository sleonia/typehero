import type { Equal, Expect } from "@type-challenges/utils";

// 实现 Combs
type Combs<T extends string[], Acc extends string[] = []> = T extends [
  infer F extends string,
  ...infer R extends string[],
]
  ? Combs<R, [...Acc, `${F} ${R[number]}`]>
  : Acc[number];

// ------------------- Test section ---------------------

type ModifierKeys = ["cmd", "ctrl", "opt", "fn"];
type CaseTypeOne =
  | "cmd ctrl"
  | "cmd opt"
  | "cmd fn"
  | "ctrl opt"
  | "ctrl fn"
  | "opt fn";

type cases = [Expect<Equal<Combs<ModifierKeys>, CaseTypeOne>>];
