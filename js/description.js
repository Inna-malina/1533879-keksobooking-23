import {
  TITLE_LIST,
  CHECK_IN,
  CHECK_OUT,
  TYPE,
  FEATURES,
  DESCRIPTION,
  PHOTOS
} from "../js/database.js";

import {
  getRandomNumber,
  getCoordinates,
  getArrayRandElement,
  getRandomArraySlice,

} from "../js/utils.js";


const createDataBase = function (addNumber) {
  const result = [];

  for (let i = 1; i <= addNumber; i++) {
    let imgNumber = '';
    if (i == 10) {
      imgNumber = `img/avatars/user${i}.png`;
    } else {
      imgNumber = `img/avatars/user${'0'+ i}.png`;
    }
    const locationX = Number(getCoordinates(35.65000, 35.70000, 25));
    const locationY = Number(getCoordinates(139.70000, 139.80000, 25));


    result.push({
      'author': {
        avatar: imgNumber,
      },

      'offer': {
        'title': getArrayRandElement(TITLE_LIST),
        'address': `${locationX}, ${locationY}`,
        'price': getRandomNumber(1000, 5000),
        'type': getArrayRandElement(TYPE),
        'rooms': getRandomNumber(1, 7),
        'guests': getRandomNumber(1, 100),
        'checkin': getArrayRandElement(CHECK_IN),
        'checkout': getArrayRandElement(CHECK_OUT),
        'features': getRandomArraySlice(FEATURES),
        'description': getArrayRandElement(DESCRIPTION),
        'photos': getRandomArraySlice(PHOTOS)
      },

      'location': {
        'lat': locationX,
        'lng': locationY,
      },

    });

  }
  return result;

};


export {
  createDataBase
};
