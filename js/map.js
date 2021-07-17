import {
  createDataBase
} from "../js/description.js";

import {
  PHOTOS
} from "../js/database.js";

import {
  getCoordinates,
  getArrayRandElement
} from "../js/utils.js";

createDataBase();
const map = L.map('mapid');
map.setView({
  lat: 35.7,
  lng: 139.77,
}, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

//размеры блока метки и чтоб метка указывала носиком на координату
const mainPinIcon = L.icon({
  iconUrl: '/img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

//координаты расположения метки по умолчанию
const marker = L.marker({
  lat: 35.7,
  lng: 139.77,
}, {
  draggable: true,
  icon: mainPinIcon,
});
marker.addTo(map);


const typeHouse = {
  palace: 'Дворец',
  flat: 'Кварира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель'
};
const points = [{
    title: typeHouse.palace,
    lat: Number(getCoordinates(35.65000, 35.70000, 25)),
    lng: Number(getCoordinates(139.70000, 139.80000, 25)),
  },
  {
    title: typeHouse.flat,
    lat: Number(getCoordinates(35.65000, 35.70000, 25)),
    lng: Number(getCoordinates(139.70000, 139.80000, 25)),
  },
  {
    title: typeHouse.house,
    lat: Number(getCoordinates(35.65000, 35.70000, 25)),
    lng: Number(getCoordinates(139.70000, 139.80000, 25)),
  },
  {
    title: typeHouse.bungalow,
    lat: Number(getCoordinates(35.65000, 35.70000, 25)),
    lng: Number(getCoordinates(139.70000, 139.80000, 25)),
  },
  {
    title: typeHouse.hotel,
    lat: Number(getCoordinates(35.65000, 35.70000, 25)),
    lng: Number(getCoordinates(139.70000, 139.80000, 25)),
  },
];


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

const templateFragment = document.querySelector('#card').content; //находим фрагмент с содержимым template
const popup = templateFragment.querySelector('.popup');

const createCard = function (item) {
  const newElement = popup.cloneNode(true);

  newElement.querySelector('.popup__title').textContent = item.title;
  // newElement.querySelector('.popup__text--address').textContent = item.offer.address;
  // newElement.querySelector('.popup__text--price').textContent = `${item.offer.price} ₽/ночь`;
  // newElement.querySelector('.popup__type').textContent = typeHouse[item.offer.type];
  // newElement.querySelector('.popup__text--capacity').textContent = `${item.offer.rooms}  комнаты для ${item.offer.guests} гостей`;
  // newElement.querySelector('.popup__text--time').textContent = `Заезд после ${item.offer.checkin}, выезд до ${item.offer.checkout}`;
  // newElement.querySelector('.popup__description').textContent = item.offer.description;
  // newElement.querySelector('.popup__avatar').src = item.author.avatar;

  // renderFeatures(newElement.querySelector('.popup__features'), item.offer.features);
  // renderImages(newElement.querySelector('.popup__photos'), item.offer.photos);

  return newElement;
};

points.forEach(function (item) {
  const {
    lat,
    lng
  } = item;
  const icon = L.icon({
    iconUrl: '/img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker({
    lat,
    lng,
  }, {
    icon,
  }, );

  marker
    .addTo(map)
    .bindPopup(
      createCard(item), {
        keepInView: true,
      },
    );
});

const renderCard = function (container, element) {
  container.appendChild(element);
};
const renderCards = function (container, data) {
  data.forEach((item) => renderCard(container, createCard(item)));
};

const resetButton = document.querySelector('.ad-form__reset');

resetButton.addEventListener('click', function () {
  marker.setLatLng({
    lat: 35.7,
    lng: 139.77,
  });

  map.setView({
    lat: 35.7,
    lng: 139.77,
  }, 10);
});

export {
  createCard,
  renderCard,
  renderCards
};
