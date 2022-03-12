const popup = document.querySelector('.popup');
const popupBthClose = popup.querySelector('.popup__bth-close');
const profileButtonEdit = document.querySelector('.profile__button-edit');
const form = document.querySelector('.form');
const inputName = form.querySelector('.form__input_value_name');
const inputWork = form.querySelector('.form__input_value_work');
const formBthSave = document.querySelector('.form__bth-save');
const profileName = document.querySelector('.profile__title');
const profileWork = document.querySelector('.profile__subtitle');

const openPopup = function(){
  popup.classList.add('popup_opened');
  inputName.value = profileName.textContent;
  inputWork.value = profileWork.textContent;
};
const closePopup = function(){
  popup.classList.remove('popup_opened');
};
const formSubmitHandler = function(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileWork.textContent = inputWork.value;
  closePopup();
};
profileButtonEdit.addEventListener('click', openPopup);
popupBthClose.addEventListener('click', closePopup);
form.addEventListener('submit', formSubmitHandler);

