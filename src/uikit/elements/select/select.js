"use strict";

(function selectsHandler() {
  const selects = document.querySelectorAll(".select");
  selects.forEach((select) => {
    setStartValue(select);
    select.addEventListener("click", selectChoose);
  });

  function selectChoose(e) {
    const currentSelect = e.currentTarget;
    const selectInput = currentSelect.querySelector(".js-dropdown__button");

    const selectItem = e.target.closest(".js-select__item");
    if (selectItem) {
      selectInput.value = selectItem.textContent;
      currentSelect.querySelector(".js-dropdown").classList.remove("dropdown--menu-open");
    }
  }

  function setStartValue(select) {
    const startValue = select.querySelector(".js-select__item").textContent;
    const selectInput = select.querySelector(".js-dropdown__button");
    selectInput.value = startValue;
  }
})();
