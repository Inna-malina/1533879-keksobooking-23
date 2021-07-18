import {
  createCard
} from "../js/card.js";

const mapTokio = L.map('map-canvas').setView({
  lat: 35.6938,
  lng: 139.75
}, 10);

const imageMap = L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(mapTokio);

const iconTokio = L.icon({
  iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const markerTokio = L.marker({
  lat: 35.682872,
  lng: 139.753956
}, {
  draggable: true,
  icon: iconTokio,
}).addTo(mapTokio);

markerTokio.on('moveend', function (evt) {
  const imputAddress = document.querySelector('#address');
  const coords = {
    lat: "",
    lng: "",
  };
  coords.lat = evt.target.getLatLng().lat;
  coords.lng = evt.target.getLatLng().lng;
  imputAddress.placeholder = `широта: ${coords.lat}, долгота: ${coords.lng}`;

});




const iconHose = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const markerHouse = function (data) {
  L.marker([data.location.lat, data.location.lng], {
      icon: iconHose,
      title: data.offer.title,
    }).addTo(mapTokio)
    .bindPopup(
      createCard(data), {
        keepInView: true,
      });
};

const markerHouseAll = function (datas) {
  datas.forEach(function (data) {
    markerHouse(data);
  });
};


const resetButton = document.querySelector('.ad-form__reset');
resetButton.addEventListener('click', function () {
  markerTokio.setLatLng({
    lat: 35.6938,
    lng: 139.75
  });
});

export {
  mapTokio,
  resetButton,
  markerHouseAll
};
