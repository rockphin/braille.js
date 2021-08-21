import { BRAILLE_UNICODE_START } from '@lib/config';

export default Object.fromEntries(
  ' A1B\'K2L@CIF/MSP"E3H9O6R^DJG>NTQ,*5<-U8V.%[$+X!&;:4\\0Z7(_?W]#Y)='
    .split('')
    .map((ascii, i) => [ascii, String.fromCharCode(BRAILLE_UNICODE_START + i)])
    .sort(([a], [b]) => b.charCodeAt(0) - a.charCodeAt(0))
    .map(([a, b]) => [[a, b] as const, [b, a] as const])
    .flat(),
);
