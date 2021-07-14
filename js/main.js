import {
  createDataBase
} from "../js/description.js";

import {
  createCard,
  renderCard,
  renderCards
} from "../js/card.js";

import {
  mapDisabled,
  formDisabled
} from "../js/form.js";

const map = document.querySelector('.map__canvas');
const data = createDataBase(4);

renderCard(map, createCard(data[0]));
// renderCards(map, data);

// mapDisabled();
// formDisabled();
