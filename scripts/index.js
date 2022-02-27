const popup = document.querySelector('.popup');
const popupBthClose = popup.querySelector('.popup__bth-close');
const profileButtonEdit = document.querySelector('.profile__button-edit');
const formPopup = document.querySelector('.popup__form');
const inputName = formPopup.querySelector('.popup__input-name');
const inputWork = formPopup.querySelector('.popup__input-work');
const popupBthSave = document.querySelector('.popup__bth-save');
const profileName = document.querySelector('.profile__title');
const profileWork = document.querySelector('.profile__subtitle');

const openPopup = function(){
  popup.classList.add('popup_opened');
};
const closePopup = function(){
  popup.classList.remove('popup_opened');
};
const formSubmitHandler = function(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileWork.textContent = inputWork.value;
};
profileButtonEdit.addEventListener('click', openPopup);
popupBthClose.addEventListener('click', closePopup);
formPopup.addEventListener('submit', formSubmitHandler);
popupBthSave.addEventListener('click', closePopup);
