const button = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

button.addEventListener('click',() => {
  button.classList.toggle('active');
  menu.classList.toggle('active');
})


const lists = document.querySelectorAll('.menu-list');

lists.forEach(list => {
  list.addEventListener('click' , () => {
    button.classList.toggle('active');
    menu.classList.toggle('active');
  })
})
