import { expect } from 'chai';
import { fromBrailleToBrf, fromBrfToBraille } from '../lib/utils/brf';

describe('BrfConverter', () => {
  it('brf -> braille', () => {
    expect(
      fromBrfToBraille(
        ' A1B\'K2L@CIF/MSP"E3H9O6R^DJG>NTQ,*5<-U8V.%[$+X!&;:4\\0Z7(_?W]#Y)=',
      ),
    ).to.be.equal(
      '⠀⠁⠂⠃⠄⠅⠆⠇⠈⠉⠊⠋⠌⠍⠎⠏⠐⠑⠒⠓⠔⠕⠖⠗⠘⠙⠚⠛⠜⠝⠞⠟⠠⠡⠢⠣⠤⠥⠦⠧⠨⠩⠪⠫⠬⠭⠮⠯⠰⠱⠲⠳⠴⠵⠶⠷⠸⠹⠺⠻⠼⠽⠾⠿',
    );
    expect(
      fromBrfToBraille(`  @MA"OB@MASP3 #BJAG-JA-JB
  ^1$3I[7"X^)JU"1
  #AA-ACGAJBH-JJJFEJ-JA`),
    ).to.be.equal(`⠀⠀⠈⠍⠁⠐⠕⠃⠈⠍⠁⠎⠏⠒⠀⠼⠃⠚⠁⠛⠤⠚⠁⠤⠚⠃
⠀⠀⠘⠂⠫⠒⠊⠪⠶⠐⠭⠘⠾⠚⠥⠐⠂
⠀⠀⠼⠁⠁⠤⠁⠉⠛⠁⠚⠃⠓⠤⠚⠚⠚⠋⠑⠚⠤⠚⠁`);
  });
  it('braille -> brf', () => {
    expect(
      fromBrailleToBrf(
        '⠀⠁⠂⠃⠄⠅⠆⠇⠈⠉⠊⠋⠌⠍⠎⠏⠐⠑⠒⠓⠔⠕⠖⠗⠘⠙⠚⠛⠜⠝⠞⠟⠠⠡⠢⠣⠤⠥⠦⠧⠨⠩⠪⠫⠬⠭⠮⠯⠰⠱⠲⠳⠴⠵⠶⠷⠸⠹⠺⠻⠼⠽⠾⠿',
      ),
    ).to.be.equal(
      ' A1B\'K2L@CIF/MSP"E3H9O6R^DJG>NTQ,*5<-U8V.%[$+X!&;:4\\0Z7(_?W]#Y)=',
    );
    expect(
      fromBrailleToBrf(`⠀⠀⠈⠍⠁⠐⠕⠃⠈⠍⠁⠎⠏⠒⠀⠼⠃⠚⠁⠛⠤⠚⠁⠤⠚⠃
⠀⠀⠘⠂⠫⠒⠊⠪⠶⠐⠭⠘⠾⠚⠥⠐⠂
⠀⠀⠼⠁⠁⠤⠁⠉⠛⠁⠚⠃⠓⠤⠚⠚⠚⠋⠑⠚⠤⠚⠁`),
    ).to.be.equal(`  @MA"OB@MASP3 #BJAG-JA-JB
  ^1$3I[7"X^)JU"1
  #AA-ACGAJBH-JJJFEJ-JA`);
  });
});
