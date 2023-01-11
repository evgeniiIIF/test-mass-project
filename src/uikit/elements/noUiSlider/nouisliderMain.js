// https://www.youtube.com/watch?v=kWoAKq7N2Ew
import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";

var slider = document.querySelector(".js-nouislider-plugin");
if (slider) {
  noUiSlider.create(slider, {
    start: [5000, 10000],
    connect: true,
    step: 1,
    range: {
      min: 0,
      max: 15000,
    },
  });

  slider.noUiSlider.on("update", function (values, handle) {
    let rangeSliderValues = document.querySelector(".range-slider__values");
    let value1 = Math.round(values[0]);
    let value2 = Math.round(values[1]);
    rangeSliderValues.innerHTML = `${value1}₽ - ${value2}₽`;
  });
}
// ================One===================

var sliderOne = document.querySelector(".js-nouislider-plugin-one");
if (sliderOne) {
  noUiSlider.create(sliderOne, {
    start: [1670],
    connect: [true, false],
    step: 1,
    range: {
      min: 0,
      max: 6000,
    },
  });

  const currentInput = sliderOne.closest(".js-range-slider-one").querySelector(".js-field__input");
  let currentValue;
  const words = ["литр", "литра", "литров"];

  sliderOne.noUiSlider.on("update", function (values, handle) {
    currentValue = Math.round(values[0]);
    currentInput.value = currentValue + " " + getSubstr(words, currentValue);
  });

  currentInput.addEventListener("focus", function () {
    this.value = "";
  });
  currentInput.addEventListener("blur", function () {
    this.value = currentValue + " " + getSubstr(words, currentValue);
  });
  currentInput.addEventListener("change", function () {
    sliderOne.noUiSlider.set(this.value);
  });

  function getSubstr(arr, counter) {
    let cr = counter.toString().slice(-2);
    let substr;
    if (cr > 9 && cr < 20) substr = arr[2];
    else {
      cr = counter.toString().slice(-1);
      if (cr == 0) substr = arr[2];
      if (cr == 1) substr = arr[0];
      if (cr > 1) substr = arr[1];
      if (cr > 4) substr = arr[2];
    }
    return substr;
  }
}
