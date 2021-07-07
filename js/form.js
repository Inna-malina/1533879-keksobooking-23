const minTitle = 30;
const maxTitle = 100;
const titleInput = document.querySelector('#title');

const validateTitleInput = function () {
  titleInput.addEventListener('input', function () {
    const valueLength = titleInput.value.length;

    if (valueLength < minTitle) {
      titleInput.setCustomValidity(`Ещё ${minTitle-valueLength} символов`);
    } else if (valueLength > maxTitle) {
      titleInput.setCustomValidity(`Удалите лишние ${valueLength-minTitle} симв.`);
    } else {
      titleInput.setCustomValidity('');
    }
  });
  titleInput.reportValidity(); //проверка длины на каждом символе. Прикольная штучка
};

//цена за ночь
const priceInput = document.querySelector('#price');

const validatePriceInput = function () {
  priceInput.addEventListener('input', function () {
    if (priceInput.value > 1000000) {
      priceInput.setCustomValidity('Цена не должна превышать 1000 000');
    } else if (priceInput.value < 0) {
      priceInput.setCustomValidity('Цена не может быть меньше нуля');
    } else {
      priceInput.setCustomValidity('');
    }
  });
};


//этот код синхронизирует количество комнат и количество гостей
const room = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');

const validateRoom = function () {
  room.addEventListener('change', function () {
    if (room.value == "1") {
      capacity.value = "1";
    } else if (room.value == "2") {
      capacity.value = "2";
    } else if (room.value == "3") {
      capacity.value = "3";
    } else {
      capacity.value = "0";
    }
  });
};


export {
  validateTitleInput,
  validatePriceInput,
  validateRoom
};
