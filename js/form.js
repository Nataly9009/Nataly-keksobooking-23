const form = document.querySelector('.ad-form');

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
