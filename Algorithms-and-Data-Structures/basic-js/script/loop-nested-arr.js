/*
  Modify function multiplyAll so that it returns 
  the product of all the numbers in the sub-arrays of arr. 
*/

function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
for (let i=0; i<arr.length; i++){
  for (let j=0; j<arr[i].length; j++){
    product*=arr[i][j];
  }
}
  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

//сума елементів за допомогою рекурсії

function sum(arr, n) {
  // Only change code below this line
if (n<=0){
  return 0;
  }else{
  return sum(arr, n-1)+arr[n-1];
}
  // Only change code above this line
}