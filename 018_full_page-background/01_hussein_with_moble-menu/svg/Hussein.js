
let fabocci = [0,1];

for(let i = 1; i <= 130; i++) {
    fabocci.push(fabocci[i]+fabocci[i-1])

    let temp_fa=fabocci[i-1];
    let newNumber = temp_fa;
    while (newNumber>9) {
        if (temp_fa != fabocci[i-1]){ temp_fa = newNumber; newNumber = 0;}
        else {newNumber = 0;}
        while (temp_fa>9){
            newNumber = newNumber + (temp_fa%10);
            temp_fa = (temp_fa-(temp_fa%10)) /10;
        }
        newNumber = newNumber + temp_fa;
    }
    console.log(fabocci[i-1] + '  ' + newNumber );

}
console.log(fabocci);


