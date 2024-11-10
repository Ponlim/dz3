let chisla = [5, 8, 1, 15, 47, 26, 52, 14];

let symmaChetnyh = 0;
let symmaNechetnyh = 0;

let chetnyeChisla = [];
let nechetnyeChisla = [];

for (let i = 0; i < chisla.length; i++) {
    let chislo = chisla[i];

    if (chislo % 2 === 0) {
        symmaChetnyh += chislo;
        chetnyeChisla.push(chislo);
    } else {
        symmaNechetnyh += chislo;
        nechetnyeChisla.push(chislo);
    }
}

console.log("Числа: " + chisla);
console.log("Четные числа: " + chetnyeChisla);
console.log("Нечетные числа: " + nechetnyeChisla);
console.log("Сумма четных чисел: " + symmaChetnyh);
console.log("Сумма нечетных чисел: " + symmaNechetnyh);































let osenki = [5, 4, 5, 3, 2, 1];
let conversions = [];

for (let i = 0; i < osenki.length; i++) {
    let osenka = osenki[i];
    let conversion;

    switch (osenka) {
        case 5:
            conversion = 'A';
            break;
        case 4:
            conversion = 'B';
            break;
        case 3:
            conversion = 'C';
            break;
        case 2:
            conversion = 'D';
            break;
        case 1:
            conversion = 'E';
            break;
        default:
            conversion = 'Неверно';
            break;
    }

    conversions.push(conversion);
}

console.log(osenki.join(', '));
console.log(conversions.join(', '));