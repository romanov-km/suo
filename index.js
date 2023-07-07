const menuButton = document.querySelector('.menu__button-6')
//const popup = document.querySelector('.popup');
const infoPopup = document.querySelector('.info-popup');
const closedButton = document.querySelector('.popup__closed-button');

function openPopup(element) {
  element.classList.add('popup_opened');
}

function closePopup(element) {
  element.classList.remove('popup_opened');
}

function  closePopupByClickOverlay() {
  document.addEventListener('click', (evt) => {
    closePopup(evt.target);
  });
}

menuButton.addEventListener('click',() => openPopup(infoPopup));

closedButton.addEventListener('click', () => closePopup(infoPopup));

 closePopupByClickOverlay();