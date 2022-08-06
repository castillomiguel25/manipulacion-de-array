// busca un elemento de un array y si existe nos devuelve un true

const pets = ['cat', 'dog', 'bat'];

let = includeInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === 'dog') {
        includeInArray = true;
        break;
    }
}
console.log(includeInArray)


const rpta = pets.includes('dog')

console.log(rpta)