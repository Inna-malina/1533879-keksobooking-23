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
function randomElem(elem) {
  let rand = Math.floor(Math.random() * elem.length);
  return elem[rand];
}

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

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const author = {
  avatar: `img/avatars/user${images()}.png`
};


const offer = {
  title: 'Площадь помещения',
  address: [location.lat, location.lng], //строка — адрес предложения
  price: getRandomNumber(1000, 5000), //случайное целое число
  type: randomElem(TYPE),
  rooms: getRandomNumber(1, 7), //случайное целое число
  guests: getRandomNumber(1, 100), //случайное целое число, кол-во гостей
  checkin: randomElem(CHECK_IN),
  checkout: randomElem(CHECK_OUT),
  features: randomElem(FEATURES),
  description: 'Описание помещения',
  photos: randomElem(PHOTOS),
  location: {
    lat: getCoordinates(35.65000, 35.70000, 25), //число с плавающей точкой — широта
    lng: getCoordinates(139.70000, 139.80000, 25) //число с плавающей точкой — долгота
  }
};
