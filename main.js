///////////////////// map ////////////////////
var map = function (arr, functionCallback) {
    var resultArr = [];

    for (var i = 0; i < arr.length; i++) {
        resultArr.push(functionCallback(arr[i], i, arr));
    }
    return resultArr;
};
//вычисляет остаток от деления на 3
var price = [5, 10, 15, 4];

var newPrice = map(price, function (element) {
    return element % 3;
});

console.log(newPrice)


///////////////////// filter ////////////////////
var filter = function (arr, functionCallback) {
    var result = [];
     
    for (var i = 0; i < arr.length; i++) {

        if (functionCallback(arr[i], i, arr)) {
            result.push(arr[i])
        }
    }
    return result;
}
//возвращает числа больше или равно 18
var age = [12, 27, 18, 3, 38, 5];

var adults = filter(age, function(element){
    return element >= 18;
});

console.log(adults);


///////////////// reduce/////////////////////
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

