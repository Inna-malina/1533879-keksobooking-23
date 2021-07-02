const mapFilters = document.querySelector('.map__filters');
const mapSelect = document.querySelectorAll('.map__filters select');
const mapFieldset = document.querySelector('.map__filters fieldset');

const mapDisabled = function () {
  mapFilters.classList.add('ad-form--disabled');
  mapFieldset.disabled = true;
  mapSelect.forEach(function (select) {
    select.disabled = true;
  });
};

const adForm = document.querySelector('.ad-form');
const formFieldset = document.querySelectorAll('.ad-form fieldset');

const formDisabled = function () {
  adForm.classList.add('ad-form--disabled');
  formFieldset.forEach(function (fieldset) {
    fieldset.disabled = true;
  });
};

export {
  mapDisabled,
  formDisabled
};
