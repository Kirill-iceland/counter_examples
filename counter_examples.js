const fs = require('fs');

var pow = 5;
var A = JSON.parse(fs.readFileSync("data/info_pow5.json"));
var B = 1;
var C = 1;
var D = 1;
var E;
var arr = JSON.parse(fs.readFileSync("data/pow5.json"));
console.log(pow)

while(true){
    for(B = 1; B <= A; B++){
        for(C = 1; C <= B; C++){
            for(D = 1; D <= C; D++){
                E = Math.pow((Math.pow(A, pow) + Math.pow(B, pow) + Math.pow(C, pow) + Math.pow(D, pow)), 1/pow);
                // console.log(`${Math.pow(A, pow)} + ${Math.pow(B, pow)} + ${Math.pow(C, pow)} + ${Math.pow(D, pow)} = ${Math.pow(E,pow)} || ${(Math.pow(A, pow) + Math.pow(B, pow) + Math.pow(C, pow) + Math.pow(D, pow))}`)
                // console.log(`${A} + ${B} + ${C} + ${D} = ${E}`)
                if(Math.pow(Math.round(E),pow) == (Math.pow(A, pow) + Math.pow(B, pow) + Math.pow(C, pow) + Math.pow(D, pow))){
                    console.log(`${A} + ${B} + ${C} + ${D} = ${Math.round(E)}`)
                    arr.push({A: A, B: B, C: C, D: D, E: Math.round(E)})
                    console.log(arr)
                    fs.writeFileSync("data/pow5.json", JSON.stringify(arr));
                }
            }
        }
    }
    fs.writeFileSync("data/info_pow5.json", JSON.stringify(A))
    console.log(A)
    A++;
}