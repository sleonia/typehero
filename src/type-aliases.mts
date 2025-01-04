import { Expect, Equal } from "type-testing";

// We completed the first alias (`Name`) for you to see as an example
type Name = string;

// Now try replacing `unknown` with a primitive data type that might be appropriate for `Year`
type Year = number;

type Count = number;

type IsOperational = boolean;

type Kilograms = number;

type Payload = {
  name: Name;
  mass: Kilograms;

  // the tests show that you need a `mass` property here
  // but first you might need to create an alias for `Kilograms`
  // because that's the value of `mass`
};
// ------------------- Test section ---------------------

type test_Name = Expect<Equal<Name, string>>;
type test_Year = Expect<Equal<Year, number>>;
type test_Count = Expect<Equal<Count, number>>;
type test_IsOperational = Expect<Equal<IsOperational, boolean>>;

type test_PayloadName = Expect<Equal<Payload["name"], string>>;

type test_Kilograms = Expect<Equal<Kilograms, number>>;

type test_PayloadMass = Expect<Equal<Payload["mass"], Kilograms>>;

interface Spacecraft {
  name: Name;
  yearBuilt: Year;
  crewCapacity: Count;
  launchDate: Date;
  isOperational: IsOperational;
  propulsionSystem: string[];
  payload: Payload[];
}

const voyager1 = {
  name: "Voyager 1",
  yearBuilt: 1977,
  crewCapacity: 0,
  launchDate: new Date("1977 09 05"),
  isOperational: true,
  propulsionSystem: ["RTG (Radioisotope Thermoelectric Generator)"],
  payload: [
    { name: "Golden Record", mass: 0.3 },
    { name: "Instruments", mass: 721 },
  ],
} satisfies Spacecraft;
