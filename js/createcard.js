import {
  createDescription
} from "../js/description.js";

const map = document.querySelector('.map__canvas'); //место куда отрисовываем попап

const templateFragment = document.querySelector('#card').content; //находим фрагмент с содержимым template

const popup = templateFragment.querySelector('.popup');
const descript = createDescription(1);

const someFunction = descript.forEach(() => {
  const newElement = popup.cloneNode(true);
  newElement.querySelector('.popup__title').textContent = descript.offer.title;
  newElement.querySelector('.popup__text--address').textContent = descript.offer.address;
  newElement.querySelector('.popup__text--price').textContent = `${descript.offer.address} ₽/ночь`;
  newElement.querySelector('.popup__type').textContent = descript.offer.type;
  newElement.querySelector('.popup__text--capacity').textContent = `${descript.offer.rooms}  комнаты для ${descript.offer.guests} гостей`;
  newElement.querySelector('.popup__text--time').textContent = `Заезд после ${descript.offer.checkin}, выезд до ${descript.offer.checkout}`;

  newElement.querySelector('.popup__features').textContent = descript.offer.features;
  newElement.querySelector('.popup__description').textContent = descript.offer.description;
  newElement.querySelector('.popup__photos').textContent = descript.offer.photos;
  newElement.querySelector('.popup__avatar').textContent = `src=${descript.author.avatar}`;

  map.appendChild(newElement);
});

export {
  someFunction
};
