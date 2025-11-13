// console.log('in JS practice')
// let timer = 0;
// let intervalTimer = setInterval(function(){
//     timer++;
//     let h3= document.querySelector('h3')
//     let main= document.querySelector('.main')
//     h3.textContent=timer;
//     if(timer >= 20){
//         h3.textContent='Stopped';
//         main.style.backgroundColor='red';
//         main.style.border='dotted 5px white';
//         clearTimeout(intervalTimer)
//     }
//     else{
//         h3.textContent=timer;
//         h3.style.color='white';
//     }
// },500)
let dummyJson = [
    {
        "id": 98,
        "title": "Rolex Reno ",
        "price": 13999.99,
        "quantity": 1,
        "total": 13999.99,
        "discountPercentage": 16.35,
        "discountedTotal": 11710.99,
        "thumbnail": "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/thumbnail.png"
    },
    {
        "id": 125,
        "title": "Rol Reno",
        "price": 249.99,
        "quantity": 5,
        "total": 1249.95,
        "discountPercentage": 16.54,
        "discountedTotal": 1043.21,
        "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20A57/thumbnail.png"
    },
    {
        "id": 55,
        "title": "Egg Slicer",
        "price": 6.99,
        "quantity": 2,
        "total": 13.98,
        "discountPercentage": 16.04,
        "discountedTotal": 11.74,
        "thumbnail": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Egg%20Slicer/thumbnail.png"
    },
    {
        "id": 62,
        "title": "Ice Cube Tray",
        "price": 5.99,
        "quantity": 2,
        "total": 11.98,
        "discountPercentage": 8.25,
        "discountedTotal": 10.99,
        "thumbnail": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Ice%20Cube%20Tray/thumbnail.png"
    },
    {
        "id": 132,
        "title": "Samsung Galaxy S8",
        "price": 499.99,
        "quantity": 3,
        "total": 1499.97,
        "discountPercentage": 8.84,
        "discountedTotal": 1367.37,
        "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S8/thumbnail.png"
    }
]
    let main = document.querySelector('#main');
    let productNmae = document.querySelector('input');
    searchProduct(dummyJson);
    function searchProduct(arr) {
            document.querySelectorAll('.card').forEach(card => card.remove());
            arr.forEach(element => {
                // document.querySelectorAll('.card').remove()
                let card = document.createElement('div');
                card.className = 'card';
                let img = document.createElement('img');
                img.setAttribute('src', element.thumbnail)
                img.className = 'imgCss';
                let h3 = document.createElement('h3');
                h3.textContent = element.title;
                h3.className = 'h3Csss';
                let p = document.createElement('p');
                p.textContent = element.total;
                p.className = 'pCss';
                card.appendChild(img);
                card.appendChild(h3);
                card.appendChild(p);
                main.appendChild(card);
            });
    }

    productNmae.addEventListener('input',function(inp){
    let val = inp.target.value.toLowerCase();
    let filterProduct = dummyJson.filter(function(elem){
        return elem.title.toLowerCase().includes(val);
    })
    console.log(filterProduct)
    searchProduct(filterProduct)
})