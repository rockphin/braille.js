import { ascii } from '@lib/brailleTable';
import BrailleCharacter from '@lib/structures/BrailleCharacter';

const fromBrfToBraille = (brfString: string) =>
  brfString
    .split('')
    .map((brf) => (BrailleCharacter.isBraille(brf) ? brf : ascii[brf] ?? brf))
    .join('');

const fromBrailleToBrf = (brailleString: string) =>
  brailleString
    .split('')
    .map((braille) =>
      BrailleCharacter.isBraille(braille) ? ascii[braille] ?? braille : braille,
    )
    .join('');

export { fromBrfToBraille, fromBrailleToBrf };
