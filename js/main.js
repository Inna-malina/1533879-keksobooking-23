import {
  mapTokio,
  resetButton,
  markerHouseAll
} from "../js/map.js";

import {
  createDataBase
} from "../js/description.js";

import {
  createCard,
  renderCard,
  renderCards,

} from "../js/card.js";

const map = document.querySelector('.map__canvas');
const data = createDataBase(5);


renderCard(map, createCard(data[0]));

markerHouseAll(data);
