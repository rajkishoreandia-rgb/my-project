console.log('in Pracice JS');
let div = document.querySelector('#main')
// div.addEventListener('mouseover',function(){
//    div.style.backgroundColor='red' 
// })
// div.addEventListener('mouseout',function(){
//    div.style.backgroundColor='yellow' 
// })
// div.addEventListener('mousemove',function(dets){
//     console.log(dets.layerX)
//     console.log(dets.layerY)
//     div.style.top=`${dets.layerY}px`
//     div.style.left=`${dets.layerX}px`
// })

// Event bubbling
// let elem = document.querySelector('ul')
// elem.addEventListener('click',function(event){
//     console.log(event);
// })
// let li=document.querySelector('ul');
// li.addEventListener('click',function(evt){
//     console.log(evt.target)
//     evt.target.classList.toggle('lt')
// })
// let sampleArray=['raj','aed','rwfg','cer','dsse','awr3','12dse']
// sampleArray.sort();
// let arr=[12,32,134,53,23,63,35]
// let sortedArr= arr.sort((a,b)=>{
//      return b-a;
// }
// );
// for (let index = 0; index < arr.length; index++) {
//     if(arr[index] % 2 !== 0 ){
//         console.log(arr[index])
//         continue;
//     }
//     if(arr[index] % 2 === 0 ){
//         console.log(arr[index])
//         break;
//     }
    
// }