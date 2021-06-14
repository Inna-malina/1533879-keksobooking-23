// Функция, возвращающая случайное целое число из переданного диапазона включительно.
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max <= min) {
    throw new Error('max должно быть больше min');
  }


  //   return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум включается, минимум включается
}



// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
// https://myrusakov.ru/js-random-numbers.html

function getCoordinates(min, max, decimalPoints) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (max <= min) {
    // throw new Error('max должно быть больше min');
  }

  const randomize = Math.random() * (max - min) + min;

  return Number.parseFloat(randomize.toFixed(decimalPoints));
}



let author = {
  avatar: `img/avatars/user${getRandomNumber(1,10)}.png`

};

console.log(author.avatar);

let offer = {
  title: 'Площадь помещения',
  address: `${location.lat}, ${location.lng}`, //строка — адрес предложения
  price: getRandomNumber(1000, 5000), //случайное целое число
  type: 'palace, flat, house, bungalow, hotel', // одно из этих значений
  rooms: getRandomNumber(1, 7), //случайное целое число
  guests: getRandomNumber(1, 100), //случайное целое число, кол-во гостей
  checkin: '12:00, 13:00, 14:00',
  checkout: '12:00, 13:00, 14:00',
  features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
  description: 'Описание помещения',
  photos: ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'],
  location: {
    lat: getCoordinates(35.65000, 35.70000, 25), //число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000
    lng: getCoordinates(139.70000, 139.80000, 25) //число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000
  }



};
// console.log(offer.address);
