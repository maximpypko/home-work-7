// допустим повышает цены на 10 процентов
var price = [10, 20, 5, 15];

var newPrice = price.map(function(element){
    return element * 1.1;
});

console.log(newPrice);

// /////////////////////////////////////////////

//возвращает числа больше 18
var age = [12, 27, 18, 3, 38, 5];

var adults = age.filter(function(element){
    return element >= 18;
});

console.log(adults);

/////////////////////////////////////////////

const notification = [
    {
        date: '31/07/2019',
        msg: 'Some message here1111',
    },
    {
        date: '2/08/2019',
        msg: 'Some message here2222',
    },
    {
        date: '1/08/2019',
        msg: 'Some message here3333',
    },
    {
        date: '1/08/2019',
        msg: 'Some message here4444',
    },
    {
        date: '2/08/2019',
        msg: 'Some message here5555',
    },
    {
        date: '1/08/2019',
        msg: 'Some message here6666',
    },
];

var list = notification.reduce(
    function(acc, element) {
        if (acc[element.date]) {
            acc[element.date].push(element.msg);
        } else {
            acc[element.date] = [];
            acc[element.date].push(element.msg);
        }
        
        return acc;
    }, {});

console.log(list);

