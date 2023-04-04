
const buttonMenu = document.querySelectorAll('.menu__item-1');



buttonMenu.addEventListener('click', function (event) {
    console.log('Произошло событие', event.type)
});


const element = document.querySelector('button')

element.addEventListener('click', function (event) {
  console.log('Произошло событие', event.type)
})
