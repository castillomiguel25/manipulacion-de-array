// retorna un objeto que cumpla con la condicionar

const number = [1,30,49,29,10,13];

// ejemplo con for
let rpta = undefined;
for (let index = 0; index < number.length; index++) {
    const element = number[index];
    if(element === 30){
        rpta = element;
        break;
    }
}

console.log('for', rpta )

// ejemplo con find
const rpta2 = number.find(item => item === 30)
console.log('find', rpta2 )

// segundo ejemplo con find

const products = [
    {
        name: 'Miguel',
        total: 120,
        id: 'new'
    },

    {
        name: 'rosella',
        total: 04,
        id: '%%',
    },

    {
        name: 'castillo',
        total: 150,
        id: '%%%',
    },

    {
        name: 'colmenares',
        total: 19,
        id: '%%%%',
    },
];

const rpta3 = products.find(item => item.id === 'new')
console.log('find', rpta3 )

const rpta4 = products.findIndex(item => item.id === '%%')
console.log('find', rpta4 )

