
//1.DO THE BELOW PROGRAMMS IN AN ANNONYMOUS FUNCTION

//A) PRINT ALL THE ODD NUMBERS IN AN ARRAY

/*
let x = [0,1,2,3,4,5,6];
prime(x);
function prime(arr){
    let a = arr;
    for(i=0;i<a.length;i++){
        if(a[i]%2===1)
        console.log(a[i]);
    }

}
*/

//B)CONVERT ALL THE STRINGS TO TITTLE CAPS IN AN ARRAY

/*
let a =["baba","nana"].join(" ");
let m=a.toString();
let n = m;
function toTitleCase(str) {
  return str.toLowerCase().split(' ').map(function (word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}
let x=(toTitleCase(n));
console.log(x);
*/

//C) SUM OF ALL NUMBERS IN AN ARRAY 

/*
let a = [1,2,3,4,5]
//calcu(a);

function calcu(arr){
    let b = arr;
  let  sum = 0;
    for(let i=0;i<b.length;i++){
sum = sum +b[i];
 
    }
    return sum;
}
let m = calcu(a);
console.log(m);*/

//D) RETURN ALL PRIME NUMBERS IN AN ARRAY 

/*
let num = [3,4,5,6,7,8,9,10,11,12,13];
let result = [];
function isPrime(num) {
  if(num < 2) return false;

  for (let k = 2; k < num; k++){
    if(num % k == 0){
      return false;
    }
  }
  return true;
}
num.forEach(function (element) {
  const item = isPrime(element);
  if (item) {
    result.push(element);
  }
});
console.log(result);
*/

//E)RETURN ALL PALINDROMES IN AN ARRAY OF

/*
function palindrome(arr){
  
    let n = arr.length;
     let flag = 0;
    for(let i=0;i<=n/2&&n!=0;i++){
    if(arr[i]!=arr[n-i-1]){
      flag =1;
      break;
    }};
    if(flag==1){
      console.log("not a palindrome")}
      else{
        console.log(arr)}}
      
      let ar =[1,2,3,2,1];
    palindrome(ar);*/

    //E) RETURN MEDIAN OF TWO SORTED ARRAYS OF SAME SIZE OF

    /*
    let arr = [1,2,3,4,5,3];
let arr1 = [2,3,4,5,6,1];
let arr2 = (arr.concat(arr1));
let arr3 = arr2.sort(function(a, b){return a - b});
let arr4 = arr3;
function median(a){
  let total = arr4.length;
  if((total)%2===0){
    let b = ((total)/2)
    let c= b -1
    let d= arr4[b]+arr4[c];
    return d;
  }
}
let x=(median(arr4));
console.log(x);*/


//F) REMOVE DUPLICATES FROM AN ARRAY OF
/*
let a = [1,2,3,4,1];
 
    function removeDuplicates(arr) {
        return [...new Set(arr)];
    }
 
    console.log(removeDuplicates(a));
    */
//G) ROTATE AN ARRAY BY K TIMES

/*
function rotate(a,n,k){
  
    for(let i=0;i<k;i++){
  let temp =a[n-1];
  a.pop(a.length-1,1)
  
  let x=(a.unshift(temp))
  
  }
  return a
    
  }
  let a = [1,2,3,4,5];
  let n= a.length
  let k=2;
  
  let m = rotate(a,n,k);
  console.log(m)
*/


 //2.DO THE BELOW PROGRAMS BY ARROW FUNCTIONS
 
 //A)PRINT ALL THE ODD NUMBERS IN AN ARRAY

 /** let x = [0,1,2,3,4,5,6];


let prime =(arr)=>{
    let a = arr;
    for(let i=0;i<a.length;i++){
        if(a[i]%2===1)
        console.log(a[i]);
    }

}
prime(x);
*/

//B)CONVERT ALL THE STRINGS TO TITTLE CAPS IN AN ARRAY

/*
let a =["baba","nana"].join(" ");
let m=a.toString();
let n = m;
 let TitleCase =(str)=> {
  return str.toLowerCase().split(' ').map(function (word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}

console.log(TitleCase(n));
*/

//C)SUM OF ALL NUMBERS IN AN ARRAY OF

/*
let a = [1,2,3,4,5]


 let calcu=(arr)=>{
    let b = arr;
  let  sum = 0;
    for(let i=0;i<b.length;i++){
sum = sum +b[i];
 
    }
    return sum;
}
let m = calcu(a);
console.log(m);
*/

//D)RETURN ALL PRIME NUMBERS IN AN ARRAY 

/*
let num = [3,4,5,6,7,8,9,10,11,12,13];
let result = [];
let isPrime=(num)=> {
  if(num < 2) return false;

  for (let k = 2; k < num; k++){
    if(num % k == 0){
      return false;
    }
  }
  return true;
}
num.forEach(function (element) {
  const item = isPrime(element);
  if (item) {
    result.push(element);
  }
});
console.log(result);
*/

//E)RETURN MEDIAN OF TWO SORTED ARRAYS OF SAME SIZE 

/*
let palindrome=(arr)=>{
  
  let n = arr.length;
   let flag = 0;
  for(let i=0;i<=n/2&&n!=0;i++){
  if(arr[i]!=arr[n-i-1]){
    flag =1;
    break;
  }};
  if(flag==1){
    console.log("not a palindrome")}
    else{
      console.log(arr)}}
    
    let ar =[1,2,3,2,1];
  (palindrome(ar));*/

  