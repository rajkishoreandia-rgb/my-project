// let inp = document.querySelector("input")
// // console.log(inp)
// inp.addEventListener('input',function(event){
//     if(event.data!==null)
//         console.log(event.data)
// })
// let h1=document.querySelector("h1")
// h1.style.color='red'
// let action = function(){
//     h1.style.color='green'
// }
// h1.addEventListener('click',action)
// h1.removeEventListener('click',action)
// let optionSel =document.getElementById("choosen");
// let selectOpt =document.querySelector("select")

// selectOpt.addEventListener("change",function(event){
//     console.log(event.target.value)
//     optionSel.textContent=`${event.target.value} is selected`
// })
// window.addEventListener("keydown",function(dets){
// let textCn = document.querySelector("h1");
//     textCn.textContent=dets.key
// })
// let inpFile= document.querySelector('#fileInp')
// let uploadBtn= document.querySelector('#UploadBtn')
// uploadBtn.addEventListener('click',function(fileData){
//     inpFile.click()
// })
// inpFile.addEventListener('change',function(details){
//     let file = details.target.files[0];
//     if(file)
//         uploadBtn.textContent = file.name;
//         uploadBtn.classList.add('btnCss');
// })
// console.log('Leel 2 practice');
// function HOFRunTwice(fn){
//     fn();
//     fn();
// }
// HOFRunTwice(function(){
//     console.log('Hello');
    
// });
//Impure function changes global variable values inside it where as pure function uses its own variable
// let total=10;
// function purefun(a,b){
//     console.log(a+b)
// }

// function imPurefun(a,b){
//     total++;
//     console.log(total+a+b);
    
// }
// // purefun(1,2);
// // imPurefun(1212,23432);
// imPurefun(10,12) 
// imPurefun(16,12)

// let person={
//     name:'Raj',
//     age :23,
//     city:'BBSR'
// }
// const {name,age,city}={...person}
//     console.log(name,age,city)

// function destructObj({name,age}){
//     console.log(name,age)
// }
// destructObj(person)
// let arr = [1,2,32,56,13,3,4,5]
// let mapArr = arr.map(function(val){
//     return val*val;
// })
// console.log(mapArr)
// let filterArr= arr.filter(function(val){
//     return val % 2 === 0;
// })
// console.log(filterArr)
// numbers = [1000,2000,3000]
// let reduceArr = numbers.reduce(function(acc,curr){
//     return acc += curr;
// },0)
// console.log(reduceArr)
// names=['Raj','Abhi','Badal','Priya','Twinkle','Bugu']
//some at least follows the conditions
//Every follows all the conditions
// let someArr = names.some(function(params) {
//         return params.length > 7
// })
// let someArr = names.some(function(params) {
//         return params.length > 2
// })
// console.log(someArr)
// let user ={
//                 name : 'Raj',
//                 age : 30,
//                 email : 'raj@gmail.com'
//             }
// Object.freeze(user) ;
// user.name='Ramesh';
// Object.seal(user) ;
// user.name='Ramesh';
// user.phone = 983434;

// Object.freeze(user) => You can't add any new key-value-pair or can't change existing key value
// Object.seal(user) => You can use it to update the existing object value but can't add new key-value pair

// console.log('in Practice')
// let arr = [1,2,3,10,29,243,34,55]
// arr.splice(3,3)
// let newArr = arr.slice(2,5)
// localStorage.setItem('arr',JSON.stringify(arr))
// let storedArr = JSON.parse(localStorage.getItem('arr'))
// console.log( JSON.parse(localStorage.getItem('arr')));
// localStorage.removeItem('name')

