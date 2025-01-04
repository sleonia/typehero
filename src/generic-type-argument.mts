import { Expect, Equal } from 'type-testing';

type GroceryStore<N extends string, C extends string> = {
  name: N;
  city: C;
};

type CapreseSalad = {
  inStock: true;
  price: 14.99;
  name: "Caprese Salad";
};

// ------------------- Test section ---------------------

type test_CapreseSaladName = Expect<Equal<
  CapreseSalad['name'],
  'Caprese Salad'
>>;

type test_CapreseSaladPrice = Expect<Equal<
  CapreseSalad['price'],
  14.99
>>;

type test_CapreseSaladInStock = Expect<Equal<
  CapreseSalad['inStock'],
  true
>>;

type test_KrogerDetroit = Expect<Equal<
  GroceryStore<'Kroger', 'Detroit'>,
  { name: 'Kroger', city: 'Detroit' }
>>;

type test_StopNShopMassachusetts = Expect<Equal<
  GroceryStore<'Stop \'N Shop', 'Massachusetts'>,
  { name: 'Stop \'N Shop', city: 'Massachusetts' }
>>;
