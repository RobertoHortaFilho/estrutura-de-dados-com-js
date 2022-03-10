console.log('=-=-=-=-= Sets (conjuntos) =-=-=-=-=')

const Set = require('./Set.js');
const setA = new Set();

setA.add(1)
setA.add(2)
setA.add(4)

const setB = new Set();

setB.add(99)
setB.add(90)
setB.add(1)


const uniao = setA.union(setB)
console.log(uniao.values())

const intersection = setA.intersection(setB)
console.log(intersection.values())