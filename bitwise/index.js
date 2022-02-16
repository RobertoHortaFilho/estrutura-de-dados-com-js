/*  Bitwise (ou bit a bit)
operadores: 
 | or
 & and
 ~ not
 ^ or
 << desçocamento esquerda
 >> deslocamento direita
*/
//      and
// 20 =     10100
// 5  =     00101
// 20 & 3 = 00100 = 4
console.log("20 & 5: "+(20 & 5))

//      or
// 20 =     10100
// 5  =     00101
// 20 | 3 = 10101 = 21
console.log("20 | 5: "+(20 | 5))

//      not
// 3 =   11
// ~3 = -100
// é colocado o sinal de negativo (-) e somado 1 ao numero
console.log("~3: "+(~3).toString(2))


//      xor
// 20 =     10100
// 5  =     00101
// 20 | 3 = 10001 = 17
console.log("20 ^ 5: "+ (20 ^ 5))

//      right
// 10 = 01010
// 1 de deslocamento a direita >>
// 5  = 00101
console.log("10 >> 1: "+(10 >> 1))

//      left
// 3  = 00011
// 2 de deslocamento a esquerda <<
// 12 = 01100
console.log("3 << 2: "+(3 << 2))