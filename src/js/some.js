// si alguno de los elemtos cumple con la condicional no restorna un true o un false.

const number = [1,2,3,4];

// ejemplo con for
let rpta = false
for (let index = 0; index < number.length; index++) {
    const element = number[index];
    if (element % 2 === 0){
        rpta = true;
        break;
    }
}
console.log(rpta)

// ejemplo 1 con some

const rpta2 = number.some(item => item % 2 === 0);
console.log(rpta2)

//  ejemplo 2 some con  objetos
const orders = [
    {
        customerName: 'Miguel',
        total: 120,
        delivered: true,
    },

    {
        customerName: 'rosella',
        total: 04,
        delivered: true,
    },

    {
        customerName: 'castillo',
        total: 150,
        delivered: false,
    },

    {
        customerName: 'colmenares',
        total: 19,
        delivered: true,
    },
];

const rpta3 = orders.some(item => item.delivered);
console.log(rpta3)

