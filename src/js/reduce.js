// reduce, reduce un array a un solo valor

const totals = [1,2,3,4];

const rpta = totals.reduce((sum, element) => sum + element, 0)
console.log('rpta', rpta);

// for
 let sum = 0;
 for (let index = 0; index < totals.length; index++) {
     const element = totals[index];
     sum = sum + element;
 }

 console.log(sum)

 console.log(totals)