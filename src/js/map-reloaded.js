

const orders = [
    {
        customerName: 'Miguel',
        total: 60,
        delivered: true,
    },

    {
        customerName: 'rosella',
        total: 04,
        delivered: true,
    },

    {
        customerName: 'castillo',
        total: 35,
        delivered: false,
    },

    {
        customerName: 'colmenares',
        total: 19,
        delivered: true,
    },
];


const rpta = orders.map(item => item.total)

console.log('rpta', rpta);

const rpta2 = orders.map(item => {
    item.tax = .19;
    return item;
})

console.log('rpta2', rpta2);

// de esta forma respeta el array original al crear una copia del objeto ...
const rpta3 = orders.map(item => {
    item.tax = .19;
    return {
        ...item,
        tax: .19
    };
})

console.log('rpta3', rpta3);