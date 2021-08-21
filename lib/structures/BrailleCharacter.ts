import { BRAILLE_UNICODE_START } from '../config';
import {
  DotArrayResolvable,
  DotIndexString,
  DotNumberString,
} from '../types/braille';

export default class BrailleCharacter {
  /** braille in unicode */
  private braille: string;

  /**
   * @param index index which starts from BRAILLE_UNICODE_START(\u2800)
   */
  constructor(index: number);
  /**
   * @param dots
   * @example
   * ```ts
   * new BrailleCharacter("100100").toString() === '⠉';
   * new BrailleCharacter("10010000").toString() === '⠉';
   * new BrailleCharacter("14").toString() === '⠉';
   * new BrailleCharacter("⠉").toString() === '⠉';
   * ```
   */
  constructor(dots: DotNumberString | (string & {}));
  /**
   * @param dots
   * @example
   * ```ts
   * new BrailleCharacter([true, false, false, true, false, false]).toString() === '⠉';
   * new BrailleCharacter([true, false, false, true, false, false, false, false]).toString() === '⠉';
   * ```
   */
  constructor(array: DotArrayResolvable);
  constructor(dots: number | string | DotArrayResolvable) {
    if (typeof dots === 'string' && BrailleCharacter.isBraille(dots)) {
      this.braille = dots;
      return;
    }
    if (Array.isArray(dots)) {
      dots = BrailleCharacter.dotArrayToDotIndex(dots);
    }
    if (
      typeof dots === 'string' &&
      (dots.length === 6 || dots.length === 8) &&
      dots.split('').every((dot) => ['0', '1'].includes(dot))
    ) {
      // Six or Eight DotNumberString
      dots = dots
        .split('')
        .reduce(
          (prev, dot, index) => (dot === '1' ? `${prev}${index + 1}` : prev),
          '',
        );
    }
    if (typeof dots === 'string') {
      dots = BrailleCharacter.dotIndexToBrailleIndex(dots as DotIndexString);
    }
    this.braille = BrailleCharacter.indexToBraille(dots);
  }

  toString() {
    return this.braille;
  }

  static indexToBraille(index: number) {
    return String.fromCharCode(BRAILLE_UNICODE_START + index);
  }

  /** make dot array to EightDotArray
   * [true, true, false, false, true, true] -> '1256'
   */
  static dotArrayToDotIndex(array: DotArrayResolvable) {
    return array.reduce(
      (prev, curr, index) => (curr ? `${prev}${index + 1}` : prev),
      '',
    ) as unknown as DotIndexString;
  }

  /** 125 -> 00010011(2) -> 0x13
   */
  static dotIndexToBrailleIndex(dotIndex: DotIndexString) {
    return dotIndex
      .split('')
      .reduce((prev, index) => prev + 2 ** (Number.parseInt(index) - 1), 0);
  }

  static isBraille(char: string) {
    const code = char.charCodeAt(0);
    return (
      BRAILLE_UNICODE_START <= code && code < BRAILLE_UNICODE_START + 0x100
    );
  }
}
