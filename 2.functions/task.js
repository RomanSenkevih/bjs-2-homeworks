function getArrayParams(...arr) {
  let max = Math.max.apply(null, arr);
  let min = Math.min.apply(null, arr);
  let sum = 0;
  
  for(let i = 0; i < arr.length; i++){
     sum += arr[i];
  }
  let avg = parseFloat((sum / (arr.length)).toFixed(2));
  
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
 let sum = 0;

  if(arr.length === 0){
    return 0;
  }
  
  for (let i = 0; i < arr.length; i++){
      sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {

  if(arr.length === 0){
    return 0;
  }

  let max = Math.max.apply(null, arr);
  let min = Math.min.apply(null, arr);
  let result = max - min;

  return result;
}

function differenceEvenOddWorker(...arr) {
 let sumEvenElement = 0;
  let sumOddElement =0;

  if(arr.length === 0){
    console.log('fff')
    return 0;
  }
  
  for (let i = 0; i < arr.length; i++){
     if(arr[i] % 2 === 0 ){
      sumEvenElement += arr[i];
     }else if(arr[i] % 2 != 0){
      sumOddElement += arr[i];
     }
  }
  let result = (sumEvenElement - sumOddElement);
  return result;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  if(arr.length === 0){
    console.log('fff')
    return 0;
  }
  
  for (let i = 0; i < arr.length; i++){
     if(arr[i] % 2 === 0 ){
      sumEvenElement += arr[i];
      countEvenElement += 1;
     }
  }
  let result = (sumEvenElement / countEvenElement);
  return result;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = [];
  
  for(let i = 0; i < arrOfArr.length; i++){
    maxWorkerResult[i] =  func(...arrOfArr[i]);
  }
  let result = Math.max.apply(null, maxWorkerResult)
  return result;
}
