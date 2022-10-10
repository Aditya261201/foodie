let left = document.getElementsByClassName('bi-arrow-left-circle')[0]; 
let right = document.getElementsByClassName('bi-arrow-right-circle')[0];
let cards = document.getElementsByClassName('cards')[0];


left.addEventListener('click', ()=>{
    console.log('left_sc_btn clicked');
    cards.scrollLeft -=140;
})
right.addEventListener('click', ()=>{
    console.log('right_sc_btn clicked');
    cards.scrollLeft +=140;
})


let poster = document.getElementById('poster');
let title = document.getElementById('title');
let price = document.getElementById('title_price');


Array.from(document.getElementsByClassName('card')).forEach((ele,i)=>{
    ele.addEventListener('click', ()=>{
        poster.src = ele.getElementsByTagName('img')[0].src;
        title.innerText = ele.getElementsByTagName('h5')[0].innerText;
        title_price.innerText = ele.getElementsByTagName('h4')[0].innerText;
    })
})