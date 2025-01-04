import type { Equal, Expect, NotAny } from '@type-challenges/utils'

type HelloWorld = string // expected to be a string

// ------------------- Test section ---------------------

type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>,
]
