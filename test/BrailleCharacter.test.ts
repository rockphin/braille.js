import { expect } from 'chai';
import BrailleCharacter from '../lib/structures/BrailleCharacter';

describe('Braille Character', () => {
  it('6 array', () => {
    expect(
      new BrailleCharacter([true, true, true, true, true, true]).toString(),
    ).to.be.equal('⠿');
  });
  it('8 array', () => {
    expect(
      new BrailleCharacter([
        true,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
      ]).toString(),
    ).to.be.equal('⢫');
  });
  it('index', () => {
    // '\u28a3'
    expect(new BrailleCharacter(0xa3).toString()).to.be.equal('⢣');
  });
  it('dot index', () => {
    expect(new BrailleCharacter('13245').toString()).to.be.equal('⠟');
  });
  it('dot binary', () => {
    expect(new BrailleCharacter('010001').toString()).to.be.equal('⠢');
  });
  it('braile', () => {
    expect(new BrailleCharacter('⣛').toString()).to.be.equal('⣛');
  });
});
