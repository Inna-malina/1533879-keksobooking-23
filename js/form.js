const minTitle = 30;
const maxTitle = 100;
const titleInput = document.querySelector('#title');


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


//цена за ночь
const priceInput = document.querySelector('#price');


priceInput.addEventListener('input', function () {
  if (priceInput.value > 1000000) {
    priceInput.setCustomValidity('Цена не должна превышать 1000 000');
  } else if (priceInput.value < 0) {
    priceInput.setCustomValidity('Цена не может быть меньше нуля');
  } else {
    priceInput.setCustomValidity('');
  }
});



//этот код синхронизирует количество комнат и количество гостей
// ---------------------------------------------------------
const RoomsValue = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};
const room = document.querySelector('#room_number');

const rooms = document.querySelectorAll("#room_number option");
const onRoomsNumberSelect = function (peopleAmount) {
  const optionCapacityRoomElement = document.querySelectorAll("#capacity option");
  optionCapacityRoomElement.forEach(function (option) {
    option.disabled = true;
  });

  RoomsValue[peopleAmount].forEach(function (seatsAmount) {

    optionCapacityRoomElement.forEach(function (option) {
      if (Number(option.value) === seatsAmount) {
        option.disabled = false;
        option.selected = true;
      }
    });
  });
};

room.addEventListener('change', function (event) {
  onRoomsNumberSelect(event.target.value);
});

onRoomsNumberSelect(room.value);
