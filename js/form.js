//const form = document.querySelector('.ad-form');
const selectRoomNumber = document.querySelector('#room_number');
const capasitySelectGroop = document.querySelector('#capacity');
const capacitySelectItem = capasitySelectGroop.querySelectorAll('option');
const minPrice = {
  bungalo: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

/*
// Удаляет disabled у всех fieldset в форме ad-form
const removeDisabled = function () {
  const fieldset = form.querySelectorAll('fieldset');
  form.classList.remove('ad-form--disabled');

  fieldset.forEach((item) => {
    item.removeAttribute('disabled');
  });
};

removeDisabled();

// Добавляет disabled всем fieldset формы
const addDisabled = function () {
  const fieldset = form.querySelectorAll('fieldset');
  form.classList.add('ad-form--disabled');

  fieldset.forEach((item) => {
    item.setAttribute('disabled', true);
  });
};

addDisabled();
*/
const onCapacityPlacesChange = function () {
  if (selectRoomNumber.value === '1') {
    capacitySelectItem[0].setAttribute('disabled', true);
    capacitySelectItem[1].setAttribute('disabled', true);
    capacitySelectItem[2].removeAttribute('disabled');
    capacitySelectItem[3].setAttribute('disabled', true);
    capasitySelectGroop.value = '1';
  } else if (selectRoomNumber.value === '2') {
    capacitySelectItem[0].setAttribute('disabled', true);
    capacitySelectItem[1].removeAttribute('disabled');
    capacitySelectItem[2].removeAttribute('disabled');
    capacitySelectItem[3].setAttribute('disabled', true);
    capasitySelectGroop.value = '2';
  } else if (selectRoomNumber.value === '3') {
    capacitySelectItem[0].removeAttribute('disabled');
    capacitySelectItem[1].removeAttribute('disabled');
    capacitySelectItem[2].removeAttribute('disabled');
    capacitySelectItem[3].setAttribute('disabled', true);
    capasitySelectGroop.value = '3';
  } else if (selectRoomNumber.value === '100') {
    capacitySelectItem[0].setAttribute('disabled', true);
    capacitySelectItem[1].setAttribute('disabled', true);
    capacitySelectItem[2].setAttribute('disabled', true);
    capacitySelectItem[3].removeAttribute('disabled');
    capasitySelectGroop.value = '0';
  }
};

selectRoomNumber.addEventListener('change', onCapacityPlacesChange);

// Делает зависимость времени заезда и выезда
const timesIn = document.querySelector('#timein');
const timesOut = document.querySelector('#timeout');

timesIn.addEventListener('change', (evt) => {
  timesOut.value = evt.target.value;
});

timesOut.addEventListener('change', (evt) => {
  timesIn.value = evt.target.value;
});

// Устанавливает минимальную цену учитывая тип жилья
const priceInput = document.querySelector('#price');
const typeHose = document.querySelector('#type');

const setMinPrice = function (price) {
  priceInput.min = price;
  priceInput.placeholder = price;
};

typeHose.addEventListener('change', (evt) => {
  setMinPrice(minPrice[evt.target.value]);
});
