const items = ['1', '3', '2', '3'];


const rpta =  items.reduce((obj, item) => {
    if (!obj[item]) {
       (obj[item]) = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(rpta)


// segundo ejemplo

const data = [
    {
        name: 'Miguel',
        level: "low",
        
    },

    {
        name: 'rosella',
        level: "medium",
        
    },

    {
        name: 'castillo',
        level: "hight",
        
    },

    {
        name: 'lopez',
        level: "hight",
        
    },

    {
        name: 'colmenares',
        level: "medium",
        
    },
];

const ejemplo = data
.map(item => item.level)
.reduce((obj, item) => {
    if (!obj[item]) {
       (obj[item]) = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(ejemplo);
