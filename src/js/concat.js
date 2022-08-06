// funcionar array con concat, no modifica el array original

// ejemplo con for
const elements = [1,30,49,29,];
const otherelements = [1,3,4,5,];

const newArray = [...elements];
for (let index = 0; index < otherelements.length; index++) {
    const element = otherelements[index];
    newArray.push(element)
}
console.log('for', newArray)

// ejemplo con concat

const rpta = elements.concat(otherelements);
console.log('concat', rpta)

// ejemplo 2 con ...

const rpta2 = [...elements, ...otherelements]
console.log('...', rpta2)

// ejemplo 3

const rpta3 = [...elements, 'ramdom']
console.log('rpta3', rpta3)
// respuesta rpta3 [ 1, 30, 49, 29, 'ramdom' ]

// ejemplo 4
const rpta4 = [...elements, ...'ramdom']
console.log('rpta4', rpta4)
// respuesta rpta4 rpta4 [1,   30,  49,  29,'r', 'a', 'm', 'd','o', 'm']

// ejemplo 5

// elements.push(otherelements);
// console.log('elements',elements)
// // results  elements [ 1, 30, 49, 29, [ 1, 3, 4, 5 ] ]

// ejemplo 6

elements.push(...otherelements);
console.log('elements',elements)
// results  elements [1, 30, 49, 29,1,  3,  4,  5]
