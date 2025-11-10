//Label 1 practical question

// Q1
// function ADD(a,b){
//     return a+b;
// }
// let ans = ADD(1212,1313)
// console.log(ans);

// Q2
// function print(guest='Guest User'){
//     console.log(`Hi ${guest}`)

// }
// print();

// Q3
// let sum = 0;
// function addNumbers(...numbers){
//     numbers.forEach(val => {
//      sum = sum + val; 
//     });
//      console.log(sum)
// }
// addNumbers(1,3,5);
// addNumbers(1,3,43434);
// addNumbers(11212,232323,2323,3,43434);
// addNumbers(43434,32323,232323,232323,2323232,11313);

// other way
// function addNos(...Nums){
//    let ans = Nums.reduce(function(acc,curentVal) {
//      return acc+=curentVal;   
//     },0)
//     console.log(`Sum is ${ans}`)
// }
// addNos(2,2,4,5,7);
// Q4
// (function IIFE(){
//     console.log('I run Instantly')
// })();
// Q5
// function outer(){
//     let a = 'Raj';
//     function InnerCh(){
//         console.log(a)
//     }
//     InnerCh();
// }
// outer();
// Q6
// fruits=['apple','guava','grapes','mango','banana']
// fruits.push('plum');
// fruits.unshift('orange');
// fruits.pop('orange');
// fruits.shift('orange');
// fruits.forEach(fruit => {
//     console.log(fruit)
// });
// for(let index = 0;index<fruits.length;index++){
//     console.log(fruits[index])
// }4
// Q7
// person={
//     name:'Raj',
//     age:'31',
//     city:'BBSR'
// }
// for (const key in person) {
//     console.log(`key - ${key},Value-${person[key]}`)
// }  
// setTimeout(function() {
//   console.log('Time is up')  
// }, 2000);

// Arrays methods
// sampleArray=[5,2,3,4]
//gives same array
// sampleArray.forEach(function(elem){
//     console.log(elem)
//     return elem *2;
// })
// console.log(sampleArray);
//gives new array with modification or as it is with same no of elements
// let mapArr = sampleArray.map(function(elem){
//     return elem * 10;
// })
// console.log(mapArr)
// let filterArr = sampleArray.filter(function(elem){
//     return elem % 2 ===0;
// })
// console.log(filterArr)
// let newMapFilterArr = sampleArray.map(function(val){return val*2})
//                                  .filter(function(val){return val % 2 == 0})
// console.log(newMapFilterArr)
// let reduceArr = sampleArray.reduce(function(acc,current){
//         return acc = acc * current;
// },10)
// console.log(reduceArr)
// let copiedArr=sampleArray;
// copiedArr.pop()
// console.log(copiedArr,sampleArray)
// let copiedArr=[...sampleArray];
//     copiedArr.pop()
//     console.log(copiedArr,sampleArray)

