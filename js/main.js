// Функция, возвращающая случайное целое число из переданного диапазона включительно.
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max <= min) {
    throw new Error('max должно быть больше min');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум включается, минимум включается
}

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
// https://myrusakov.ru/js-random-numbers.html

function getCoordinates(min, max, decimalPoints) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (max < min) {
    // throw new Error('max должно быть больше min');
  }
  const randomize = Math.random() * (max - min) + min;
  return Number.parseFloat(randomize.toFixed(decimalPoints));
}

//функция для перебора изображений
function images() {
  let counter = '';
  for (let i = 1; i <= 10; i++) {
    counter = '0' + i;
    if (i == 10) {
      counter = 10;
    }
  }
}

//функция для выбора из массивов слуайного значения
function getArrayRandElement(elem) {
  let rand = Math.floor(Math.random() * elem.length);
  return elem[rand];
}

const TITLE_LIST = [
  'Название одно',
  'Название второе',
  'Название третье',
];

const CHECK_IN = [
  '12:00',
  '13:00',
  '14:00'
];

const CHECK_OUT = [
  '12:00',
  '13:00',
  '14:00'
];

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const DESCRIPTION = [
  'Описание один',
  'Описание два',
  'Описание три'
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];



const createDescription = function (addNumber) {
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
        'features': getArrayRandElement(FEATURES),
        'description': getArrayRandElement(DESCRIPTION),
        'photos': getArrayRandElement(PHOTOS),
      },

      'location': {
        'lat': locationX,
        'lng': locationY,
      },

    });
  }
  return result;
};

createDescription(10);

// const createAds = (adNumber) => {
//   const result = [];

//   for (let i = 1; i <= adNumber; i += 1) {

//     const locationX = Number(getRandomNoninteger(LAT_MIN, LAT_MAX, LOCATION_DIGITS_AMOUNT));
//     const locationY = Number(getRandomNoninteger(LNG_MIN, LNG_MAX, LOCATION_DIGITS_AMOUNT));

//     result.push({
//       'author': {
//         'avatar': `img/avatars/user0${i}.png`,
//       },
//       'offer': {
//         'title': getArrayRandElement(TITLE_LIST),
//         'address': `${locationX}, ${locationY}`,
//         'price': getRandomNumber(PRICE_MIN, PRICE_MAX),
//         'type': getArrayRandElement(TYPE_LIST),
//         'rooms': getRandomNumber(ROOMS_MIN, ROOMS_MAX),
//         'guests': getRandomNumber(GUESTS_MIN, GUESTS_MAX),
//         'checkin': getArrayRandElement(CHECKIN_LIST),
//         'checkout': getArrayRandElement(CHECKOUT_LIST),
//         'features': getArrayRandLength(FEATURES_LIST),
//         'description': getArrayRandElement(DESCRIPTION_LIST),
//         'photos': getArrayRandLength(PHOTOS_LIST),
//       },
//       'location': {
//         'lat': locationX,
//         'lng': locationY,
//       },
//     });
//   }
//   return result;
// };
