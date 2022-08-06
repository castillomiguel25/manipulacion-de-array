// unificar todo tu array con Join

const elements = ['fire','air','water','ear'];

// ejemplo con for
let rpta = '';
const  separator = '--'
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rpta = rpta + element + separator;
}
console.log('for',rpta)

// results with join

const  results = elements.join('--')
console.log('join',results)

const title = 'curso de manipulacion de array'
urlfinal = title.split(' ').join('-').toLowerCase();
console.log('urlfinal',urlfinal)