// util para manipular array que estan dentro de array

const matriz = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
];

const newArray = []
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
    }
}

console.log('for', newArray)

// results  for [ 1, 2, 3, 4, 5, 6, [ 1, 2, [ 1, 2 ] ], 7, 8, 9 ]

// ejemplo con flat

const rpta = matriz.flat(3);

console.log('flat', rpta)
// flat flat [1, 2, 3, 4, 5, 6, 1, 2, 1, 2, 7, 8, 9]