

const users = [
    { userId: 1, username: 'tom', attributes: ['nice', 'cute'] },
    { userId: 2, username: 'miguel', attributes: ['lovely'] },
    { userId: 3, username: 'angel', attributes: ['nice', 'cute'] },
];

const rta = users.map(user => user.attributes).flat();
console.log('map-flat', rta)
// results [ 'nice', 'cute', 'lovely', 'nice', 'cute' ]

// ejemplo con flatmap
const rta2 = users.flatMap(user => user.attributes);
console.log('flatmap', rta2)
// flatmap [ 'nice', 'cute', 'lovely', 'nice', 'cute' ]


// ejemplo 2 con flatmap
const calendar = {
    primaryCalendar: [
        {
            startDate: new Date(2021, 1, 1, 15),
            endDate: new Date(2021, 1, 15, 30),
            title: 'cita 1',
        },

        {
            startDate: new Date(2021, 1, 15, 29),
            endDate: new Date(2021, 1, 15, 10),
            title: 'cita 2',
        },
    ],
    secondaryCalendar: [
        {
            startDate: new Date(2021, 1, 15, 17),
            endDate: new Date(2021, 1, 15, 18),
            title: 'cita 3',
        },

        {
            startDate: new Date(2021, 1, 15, 19),
            endDate: new Date(2021, 1, 15, 20),
            title: 'cita 4',
        },
    ],

}

const rta3 = Object.values(calendar).flatMap(item => {
    console.log('item', item);
    return item.map(date => date.startDate);
});
console.log( rta3);

// results [
//     2021-02-01T19:00:00.000Z,
//     2021-02-16T09:00:00.000Z,
//     2021-02-15T21:00:00.000Z,
//     2021-02-15T23:00:00.000Z
//   ]