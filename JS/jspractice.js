console.log('In JS practice file')

// falsy and truthy value
    // 0,'',false,null,undefined,NaN,document.all are falsy rest are truthy
    // if(document.all){
    //     console.info('This is truthy');
    // }
    // else{
    //     console.info('This is falsy')
    // }

// let age = prompt('age enter karantu');
// if(age === null){
//     console.error('Tame Cancel press karidela')
// }
// else{
//     if(age.trim() === ''){
//         console.error('Bhai space enter kareni')
//     }
//     else {
//         age = parseInt(age);
//         if(isNaN(age)){
//             console.error('Bhai number enter kare')
//         }
//         else{
//             console.log(`Tama age ${age} barsa`)
//         }
//     }
// }

// Using return ....return can be used only inside a function 
// function validateAge(){
// if(age === null) 
//     return console.error('You hit cancel');
// age = age.trim();
// // Based on truthy / falsy handle empty space
// if(!age) return console.error('Bhai space enter mat kar');
// const num = Number(age)
// if(isNaN(num)) return console.error('Bhai no enter kar');
// console.log(`your age is ${num}`)
// }
// validateAge();

// LOOP
// 50-100 print kara
// for(let i =50; i < 101; i++) {
//     console.info(i)
// }
// 100-50 print kara
// for(let i =100; i > 49; i--) {
//     console.info(i)
// }
// print 1-10 except 5 and 7
// for (let i=1;i<11;i++){
//     if(i===5 || i ===7){}
//     else{
//         console.log(i)
//     }
// }
// another way
// for (let i=1;i<11;i++){
//     if(!(true ) && !(i ===7)){
//         console.log(i)
//     }
// }
// Switch case
// const day= 3;
// switch (day){
//     case 1:
//         console.log('Monday')
//         break;
//     case 2:
//         console.log('Tuesday')
//         break;
//     case 3:
//         console.log('Wednesday')
//         break;
//     case 4:
//         console.log('Thursday')
//         break;
//     case 5:
//         console.log('Friday')
//         break;
//     case 6:
//         console.log('Sturday')
//         break;
//     case 7:
//         console.log('Sturday')
//         break;
//     default:
//     console.log('plese enter a valid day')
// }

// program-2
// let counter = 0;
// for (let index = 1; index < 21; index++) {
//     if(index % 2 !==0){
//         console.log('index',index)
//         counter ++
//     }
//     if(counter >2) break;
// }

// let bal = 1000;
// let amt = +prompt('amont diantu')
// bal = bal-amt;

/* Array  and its methods
push - last re nua value add kare
pop - last ru value delete karidia
shift - first ru value delete karidaba
unshift - first position re new value add kariba
sort - will sort based on asc/desc (takes to values) - By default sort does alphabetically sorting
reverse - will reverse the array
splice - remove values/elements from the original array
 **splice takes 3rd argument to add elements from an index after removal anyhting **
   let arr =[1,2,3]
   arr.splice(1,0,'5','8')

slice - remove elements from a particular index to some other index and to accept it we have to write the return otherwise undefined will be assigned in the values of the array
// foreach,map,filter,reduce,sort always ccepts afunction 
For each - will run on each array element and updates it 
map - create new array with exact no of elements with existing /new values
filtrer - will create a new array with certain values after a condition check
reduce - will reduce the array element values into a single value after performing some action - takes 2 arguments(accumelator,resu) with a initial value whisch always remebers its value in accumelator
find - will find a particular element in a array // returns the value when find its first match
some - find some value in an array when condition matches and returns true/false
every - matches the condition with all elements existing in the array and return true / false
Destructuring/spread operator
*/

/*
Objects
=======
obj={name :'Raj'.address:'BBSR'}
key = address
dot notation
bracket notation
object.name . mane se sabubele object re se value khojiba obj.name
obj['name'] 

obj.key / not allowed
obj[key] - allowed as it will search the key dynamically which is now obj.address
destruring ={...obj}
for nesting = JSON.stringify and then JSON.parse to coly a nested obj
optional chaning means the key is optional obj?.name

obj.keys will give us the keys
obj.entries will give us arrays of array means the object will be split into no of arrays based on the object keys
obj.assign will clone and can add new obj into it 
let obj2=Object.assign({ph:123},...obj)

// for in 
for (let key in obj){
    console.log(key,obj[key])
}
Computed proprties
 let role = 'admin'
 obj= {
        name :'Raj',
        [role]:'Raj}
Object key can be no and boolean
*/

/*
document.getElementById,
getElementsByClassName, querySelector,querySelectorAll
setAttribute("attribute_name","value")
getAttribute("attribute_name")
console.dir is used to see the atributes available in an element insread of getting the hrml element
*/
// let h1 = document.querySelector("h1");
// console.dir(h1)
// h1.innerHTML= '<b>Hiiii</b>'
// // h1.hidden=true;
// let a = document.querySelector("a");
// // a.href='https://www.google.com'
// a.setAttribute('href','https://www.google.com')
// let image=document.querySelector('img')
// console.log('img',image.getAttribute('src'))
// image.setAttribute('src','https://plus.unsplash.com/premium_photo-1762281145978-f0ada6d58c59?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2021')
