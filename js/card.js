// const map = document.querySelector('.map__canvas'); 
import {
  PHOTOS
} from "../js/database.js";

import {
  getCoordinates,
  getArrayRandElement,
  getRandomArraySlice
} from "../js/utils.js";



const typeHouse = {
  palace: 'Дворец',
  flat: 'Кварира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель'
};

const templateFragment = document.querySelector('#card').content; //находим фрагмент с содержимым template
const popup = templateFragment.querySelector('.popup');
//функция-генератор списка доп.услуг из features
const renderFeatures = function (container, features) {
  container.innerHTML = '';

  features.forEach(function (feature) {
    const li = document.createElement('li');
    li.classList.add('popup__feature');
    li.classList.add(`popup__feature--${feature}`);
    container.appendChild(li);
  });
};

//ф-ция-генератор фотки из списка photos
const renderImages = function (container, photos) {
  container.innerHTML = '';

  photos.forEach(function () {
    const img = document.createElement('img');
    img.classList.add('popup__photo');
    img.style.width = "45px";
    img.src = getArrayRandElement(PHOTOS);
    container.appendChild(img);
  });
};

const createCard = function (item) {
  const newElement = popup.cloneNode(true);

  newElement.querySelector('.popup__title').textContent = item.offer.title;
  newElement.querySelector('.popup__text--address').textContent = item.offer.address;
  newElement.querySelector('.popup__text--price').textContent = `${item.offer.price} ₽/ночь`;
  newElement.querySelector('.popup__type').textContent = typeHouse[item.offer.type];
  newElement.querySelector('.popup__text--capacity').textContent = `${item.offer.rooms}  комнаты для ${item.offer.guests} гостей`;
  newElement.querySelector('.popup__text--time').textContent = `Заезд после ${item.offer.checkin}, выезд до ${item.offer.checkout}`;
  newElement.querySelector('.popup__description').textContent = item.offer.description;
  newElement.querySelector('.popup__avatar').src = item.author.avatar;

  renderFeatures(newElement.querySelector('.popup__features'), item.offer.features);
  renderImages(newElement.querySelector('.popup__photos'), item.offer.photos);

  return newElement;
};



const renderCard = function (container, element) {
  container.appendChild(element);
};
const renderCards = function (container, data) {
  data.forEach((item) => renderCard(container, createCard(item)));
};


export {
  createCard,
  renderCard,
  renderCards
};
