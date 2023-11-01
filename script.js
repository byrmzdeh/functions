//named function -adlandirilmis funksiyadi .Biz funksiyaya ad veririk ve a ve b paremetrini alir , onu dondurur . Daha sonra biz funksiyanin adini harda isdesek cagira bilerik .
function vur(a, b) {
    return a * b;
}
const vurma = vur(10, 20);
console.log(vurma);


//anonymous function-isimsiz funksiya . Anonim funksiyalar teyin olunduqlari yerde derhal cagrila bilirler .
for (let i = 0; i < 5; i++) {
    (function (index) {
        console.log(index);
    })(i);
}


//arrow function- adi olmur .Neyi tanidirsa ona sahibdirler ( Biz burda a ve b ni tanitmisiq .) . Bu da this menasini verir . Ona gore de arrow functionlarda this yazilmir .
const toplaa = (a, b) => a + b;
const cem = toplaa(10, 20);
console.log(cem);


//callback function- funksiyani basqa funksiya kimi oturmeye ve daha sonra cagirmaga imkan verir .
function one(a, b, callback) {
    const cem = a + b;
    callback(cem)
}

function two(cem) {
    console.log('Cem: ' + cem);

}
one(10, 20, two)