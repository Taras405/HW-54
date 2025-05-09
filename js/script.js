let number = 0

while (number < 10) {
    number++;
    console.log(number);
}



const max = 20

for (let i = 0; i <= max; i++) {
    if (i % 2 === 0) {
        console.log(i);
        continue;
    }
}



for (let i = 0; i <= 10; i++) {
    console.table(i * 7);
}



let n = 11;

for (let i = 0; i < n; i++) {
    console.log(`${i} * 7 = ${i * 7}`);
    // if (i >= n){
    //     break;
    // } цикл сам завершить якщо i >= n
}



let i = 1;

while (i <= 20) {
    if (i % 3 === 0) {
        i++;
        continue;
    }
    console.log(i);
    i++;
}