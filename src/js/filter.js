// filtra elementos de un array con base de un cordicional, es inmutable crea un array nuevo con los resultados

const word = ['hello', 'you', 'beaty', 'yes'];

const newArray = [];
for (let index = 0; index < word.length; index++) {
    const item = word[index];
    if (item.length >= 6) {
        newArray.push(item);
    }
}
console.log('new', newArray);
console.log('origin', word);
const rta = word.filter(item => item.length >= 6)
console.log('rta', newArray);
console.log('origin', word);



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

const rpta = orders.filter(item => item.delivered && item.total >= 100)
console.log('rpta3', rpta);

// creando un buscador
const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
}

console.log(search('a'));