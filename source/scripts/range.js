const rangeContainer = document.querySelector('.range-slider');
const priceInput = document.querySelectorAll('.price__input');
const buttonReset = document.querySelector('.button--reset');

noUiSlider.create(rangeContainer, {
  start: [0, 900],
  connect: true,
  margin: 1,
  step: 1,
  range: {
    'min': 0,
    'max': 1000
  }
});

rangeContainer.noUiSlider.on('update', (values, handle) => {
  priceInput[handle].value = Math.round(values[handle]);
});

const setRangeSlider = (index, value) => {
  const values = [null, null];
  values[index] = value;
  rangeContainer.noUiSlider.set(values);
};

priceInput.forEach((input, index) => {
  input.addEventListener('change', (evt) => {
    setRangeSlider(index, evt.target.value);
  });
});

buttonReset.addEventListener('click', () => {
  rangeContainer.noUiSlider.reset();
});
