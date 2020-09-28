const fs = require('fs');

const pow = 5;
var A = JSON.parse(fs.readFileSync("data/info_pow5.json")).A;
var B = JSON.parse(fs.readFileSync("data/info_pow5.json")).B;
var C = JSON.parse(fs.readFileSync("data/info_pow5.json")).C;
var D = JSON.parse(fs.readFileSync("data/info_pow5.json")).D;
var number_checked = JSON.parse(fs.readFileSync("data/info_pow5.json")).number_checked;
const saverate = 10000;
var E;
var arr = JSON.parse(fs.readFileSync("data/pow5.json"));
console.log(pow)

while(true){
    for(B = 1; B <= A; B++){
        for(C = 1; C <= B; C++){
            for(D = 1; D <= C; D++){
                E = Math.pow((Math.pow(A, pow) + Math.pow(B, pow) + Math.pow(C, pow) + Math.pow(D, pow)), 1/pow);
                if(Math.pow(Math.round(E),pow) == (Math.pow(A, pow) + Math.pow(B, pow) + Math.pow(C, pow) + Math.pow(D, pow))){
                    console.log(`${A} + ${B} + ${C} + ${D} = ${Math.round(E)}`)
                    arr.push({A: A, B: B, C: C, D: D, E: Math.round(E)})
                    console.log(arr)
                    fs.writeFileSync("data/pow5.json", JSON.stringify(arr));
                }
                
                if(number_checked % saverate == 0){
                    fs.writeFileSync("data/info_pow5.json", JSON.stringify({A: A, B: B, C: C, D: D, number_checked: number_checked}))
                }
                number_checked++;
            }
        }
    }
    console.log(A)
    A++;
}