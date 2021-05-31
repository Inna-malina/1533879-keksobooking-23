// Функция, возвращающая случайное целое число из переданного диапазона включительно.
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max <= min) {
    throw new Error('max должно быть больше min на пять единиц');
  }
  //   return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум включается, минимум включается
}
getRandomNumber(3, 10);

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
// https://myrusakov.ru/js-random-numbers.html

function getCoordinates(min, max, decimalPoints) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (max <= min) {
    throw new Error('max должно быть больше min на пять единиц');
  }
  let randomize = Math.random() * (max - min) + min;
  // return Math.random() * (max - min) + min;

  return Number.parseFloat(randomize.toFixed(decimalPoints));
}
getCoordinates(1, 100, 25);
