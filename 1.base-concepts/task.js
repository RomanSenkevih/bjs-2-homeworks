"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4*a*c;
  let x1 = 0;
  let x2 = 0;
        
        if (d === 0){
          x1 = (-b + Math.sqrt(d)) / 2*a;
          arr[0] = x1;
      }
        if (d > 0){
          x1 = (-b + Math.sqrt(d)) / 2*a;
          x2 = (-b - Math.sqrt(d)) / 2*a;
           arr[0] = x1;
           arr[1] = x2;
        }
        if (d < 0){
          arr = [];
        }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}