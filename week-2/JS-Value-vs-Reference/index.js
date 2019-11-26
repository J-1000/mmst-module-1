let klara = { name: "Klara", kontoStand: 200 }
let hanna = { name: "Hanna", kontoStand: 100 }
let paul = { name: "Paul", kontoStand: -10 }

let kontoArray = [klara, hanna, paul];
const kurs = 1.95583;

let kontoArrayEuro = JSON.parse(JSON.stringify(kontoArray));
kontoArrayEuro.reverse();

kontoArrayEuro = kontoArrayEuro.map(convertDMtoEuro)

function convertDMtoEuro(konto) {
    konto.kontoStand = konto.kontoStand / kurs
    return konto;
}

klara.kontoStand = 100000;

console.log(kontoArrayEuro);
