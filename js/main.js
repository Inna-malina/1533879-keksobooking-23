// Функция, возвращающая случайное целое число из переданного диапазона включительно. 
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max <= min) {
    console.log('max должно быть больше min на пять единиц');

  }

  //   return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум включается, минимум включается


}
// console.log(getRandomNumber(3, 10));

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
// https://myrusakov.ru/js-random-numbers.html

function getCoordinates(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (max <= min) {
    console.log('max должно быть больше min на пять единиц');
  }

  return Math.random() * (max - min) + min;

}
// console.log(getCoordinates(1, 3));


// Функция для проверки максимальной длины строки
function getStrLength(str, max) {
  if (str.length >= max) {
    console.log(true);
  }
  if (str.length < max) {
    console.log(false);
  }
}
getStrLength('werqwersdfghjkl', 10);
