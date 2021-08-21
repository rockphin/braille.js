import { expect } from 'chai';
import BrailleCharacter from '../lib/structures/BrailleCharacter';

describe('Braille Character', () => {
  it('6 dot array to dot number', () => {
    expect(
      BrailleCharacter.dotArrayToDotNumber([
        false,
        false,
        true,
        true,
        true,
        false,
      ]),
    ).to.be.equal('345');
  });

  it('8 dot array to dot number', () => {
    expect(
      BrailleCharacter.dotArrayToDotNumber([
        false,
        false,
        true,
        true,
        true,
        false,
        false,
        true,
      ]),
    ).to.be.equal('3458');
  });
});
