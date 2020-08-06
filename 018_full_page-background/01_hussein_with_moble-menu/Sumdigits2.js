let fabocci = [0, 123444488899987487879], number = [2, 4, 5, 6], currentValue;
for(let i = 1; i <= 10; i++) {
    fabocci.push(fabocci[i]+fabocci[i-1])

    let temp_fa=fabocci[i-1];
    let newNumber = temp_fa;
    while (newNumber>9) {
        if (temp_fa != fabocci[i-1]){ temp_fa = newNumber; newNumber = 0;}
        else {newNumber = 0;}
        while (temp_fa>9){
            newNumber = newNumber + (temp_fa%10);
            temp_fa = (temp_fa-(temp_fa%10)) /10;
            console.log(temp_fa + '  ' + newNumber );

        }
        newNumber = newNumber + temp_fa;
    }
    console.log(fabocci[i-1] + '  ' + newNumber );

}
console.log(fabocci);

const sum = number.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

console.log(sum); // 10
console.log(number[0]);
console.log(number[1]);
console.log(number[2]);
console.log(number[3]);


//for (let i=0, i< number)


var value = 123444488899987487879;
     sum1 = 0;

while (value) {
    sum1 += value % 10;
    value = Math.floor(value / 10);
    console.log(value,' > '+ sum1);
}

console.log(value,' > '+ sum1);

// var value2 = 123444488899987487879,
//     sum2 = value2
//         .toString()
//         .split('')
//         .map(Number)
//         .reduce(function (a, b) {
//             return a + b;
//         }, 0);
//
// console.log(sum2+' '+value2);

/*function sumDigits() {
    var value = document.getElementById("thenumber").value,
        sum = 0;

    while (value) {
        sum += value % 10;
        value = Math.floor(value / 10);
    }

    var rezultat = document.getElementById("result");
    rezultat.value = sum;
}*/
function char_count(str, letter)
{
    var letter_Count = 0;
    for (var position = 0; position < str.length; position++)
    {
        //if (str.charAt(position) == letter)
        // {
        letter_Count += 1;
        //  }
    }
    return letter_Count;
}

const origNum = 8;
const origObj = {color: 'blue'};

const changeItUp = (num, obj) => {
    num = 7;
    obj.color = 'red';
};

changeItUp(origNum, origObj);

// Will output 8 since integers are passed by value.
console.log(origNum);

// Will output 'red' since objects are passed
// by reference and are therefore mutable.
console.log(origObj.color);


const person = {
    _age: 37,
    set age(newAge){
        if (typeof newAge === 'number'){
            this._age = newAge;
            console.log(this._age)
        } else {
            console.log('You must assign a number to age');
        }
    }
};
person.age = 40;
// console.log(person._age); // Logs: 40
person.age = '40';
// Logs: You must assign a number to age
