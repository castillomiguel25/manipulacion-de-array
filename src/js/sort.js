// ordena los elemtos de un array es un metodo mutable

const months = ['march', 'jan', 'feb', 'dec'];
months.sort();
console.log(months)


const number = [1, 30, 4, 5, 1000];
number.sort((a,b) => a - b );
console.log(number)
// results [ 1, 4, 5, 30, 1000 ]



const words = ['ave', 'amarillo', 'blanco', 'gris', 'verde'];
words.sort();
console.log(words)
// results [ 'amarillo', 'ave', 'blanco', 'gris', 'verde' ]

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

orders.sort((a,b) => a.total - b.total );
console.log(orders)

// results [
//     { customerName: 'rosella', total: 4, delivered: true },
//     { customerName: 'colmenares', total: 19, delivered: true },
//     { customerName: 'Miguel', total: 120, delivered: true },
//     { customerName: 'castillo', total: 150, delivered: false }
//   ]
