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


//функция для выбора из массивов слуайного значения
function getArrayRandElement(elem) {
  let rand = Math.floor(Math.random() * elem.length);
  return elem[rand];
}

function getRandomArraySlice(array) {
  return array.slice(0, getRandomNumber(0, array.length - 1));
}


export {
  getRandomNumber,
  getCoordinates,
  getArrayRandElement,
  getRandomArraySlice,

};
