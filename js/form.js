const adForm = document.querySelector('.ad-form');
const selectRoomNumber = adForm.querySelector('#room_number');
const capasitySelectGroop = adForm.querySelector('#capacity');
const typeInput = adForm.querySelector('#type');
const priceInput = adForm.querySelector('#price');
const timeInInput = adForm.querySelector('#timein');
const timeOutInput = adForm.querySelector('#timeout');
const Price = {
  MIN: {
    'bungalo': 1,
    'flat': 1000,
    'hotel': 3000,
    'house': 5000,
    'palace': 10000,
  },
  MAX: 1000000,
};

const NOT_FOR_GUESTS_ROOM_NUMBER = 100;

const enableValidation = () => {

  typeInput.addEventListener('input', () => {
    const currentTypeMinPrice = Price.MIN[typeInput.value];

    priceInput.placeholder = currentTypeMinPrice;
    priceInput.min = currentTypeMinPrice;
  });


  priceInput.addEventListener('input', () => {
    const currentTypeMinPrice = Price.MIN[typeInput.value];

    if (!priceInput.value) {
      priceInput.setCustomValidity('Введите цену, пожалуйста');
    } else if (priceInput.value > Price.MAX) {
      priceInput.setCustomValidity(`Максимально допустимая цена - ${Price.MAX}`);
    } else if (priceInput.value < currentTypeMinPrice) {
      priceInput.setCustomValidity(`Цена не может быть ниже ${currentTypeMinPrice}`);
    }  else {
      priceInput.setCustomValidity('');
    }

    priceInput.reportValidity();
  });

  timeInInput.addEventListener('input', () => {
    timeOutInput.value = timeInInput.value;
  });

  timeOutInput.addEventListener('input', () => {
    timeInInput.value = timeOutInput.value;
  });

  capasitySelectGroop.addEventListener('input', () => {
    if (Number(selectRoomNumber.value) < Number(capasitySelectGroop.value)) {
      capasitySelectGroop.setCustomValidity('Столько людей не влезет в выбранное количество комнат');
    } else if (Number(selectRoomNumber.value) === NOT_FOR_GUESTS_ROOM_NUMBER && Number(capasitySelectGroop.value)) {
      capasitySelectGroop.setCustomValidity('100 комнат — не для гостей');
    } else if (Number(selectRoomNumber.value) !== NOT_FOR_GUESTS_ROOM_NUMBER && !Number(capasitySelectGroop.value)) {
      capasitySelectGroop.setCustomValidity('Не для гостей - выберите опцию 100 комнат');
    } else {
      capasitySelectGroop.setCustomValidity('');
    }

    capasitySelectGroop.reportValidity();
  });
};

enableValidation();


const timesIn = document.querySelector('#timein');
const timesOut = document.querySelector('#timeout');

timesIn.addEventListener('change', (evt) => {
  timesOut.value = evt.target.value;
});

timesOut.addEventListener('change', (evt) => {
  timesIn.value = evt.target.value;
});


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
