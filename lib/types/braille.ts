type Grow<T, A extends Array<T>> = ((x: T, ...xs: A) => void) extends (
  ...a: infer X
) => void
  ? X
  : never;
type GrowToSize<T, A extends Array<T>, N extends number> = A['length'] extends N
  ? A
  : GrowToSize<T, Grow<T, A>, N>;
type FixedArray<T, N extends number> = GrowToSize<T, [], N>;
type SixDotArray = FixedArray<boolean, 6>;
export type EightDotArray = FixedArray<boolean, 8>;
export type DotArrayResolvable = SixDotArray | EightDotArray;

type B = '0' | '1';
type SixDotNumberString = `${B}${B}${B}${B}${B}${B}`;
type EightDotNumberString = `${B}${B}${B}${B}${B}${B}${B}${B}`;

type N1 = '1' | '';
type N2 = `2${N1}` | N1 | `${N1}2`;
type N3 = `3${N2}` | N2 | `${N2}3`;
type N4 = `4${N3}` | N3 | `${N3}4`;
type N5 = `5${N4}` | N4 | `${N4}5`;
type N6 = `6${N5}` | N5 | `${N5}6`;
type N7 = `7${N6}` | N6 | `${N6}7`;
export type DotIndexString = `8${N7}` | N7 | `${N7}8`;

export type DotNumberString =
  | SixDotNumberString
  | EightDotNumberString
  | DotIndexString;
