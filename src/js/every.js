// todods los elemtos deben cumplir con la condicion  retorna un true o un false

const number = [1,30,49,29,10,13];

let rta = true;
for (let index = 0; index < number.length; index++) {
    const element = number[index];
    if(element >= 40) {
        rta = false
    }
}

console.log('for',rta);

const rpta = number.every(item => item <= 40)
console.log(rpta)


// reto si lo miembro del equipo son menores de 15 anos no son admitidos

const team = [
    {
        name: 'miguel',
        age: 26,
    },
    {
        name: 'diune',
        age: 26,
    },
    {
        name: 'made',
        age: 26,
    },
]

const reto = team.every(item => item.age <= 15)
console.log(reto)