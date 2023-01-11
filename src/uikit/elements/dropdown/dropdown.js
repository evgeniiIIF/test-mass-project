"use strict";

(function () {
  const dropdownLists = document.querySelectorAll(".js-dropdown");

  if (dropdownLists.length) {
    let currentDropdownInput;
    let currentDropdown;
    let body = document.body;
    let prevDropdown;

    dropdownLists.forEach((dropdown) => {
      let inputs = dropdown.querySelectorAll(".js-dropdown__button");
      inputs.forEach((currentInput) => {
        currentInput.addEventListener("focus", init);
        currentInput.addEventListener("mouseover", init);
        currentInput.addEventListener("click", toggleDropdown);
        currentInput.addEventListener("keydown", keypress);
      });
    });

    function init(e) {
      currentDropdownInput = e.currentTarget;
      currentDropdown = currentDropdownInput.closest(".js-dropdown");
    }

    function toggleDropdown(e) {
      currentDropdown.classList.toggle("dropdown--menu-open");
      bodyClear(currentDropdown);
    }

    function bodyClear(element) {
      if (element.classList.contains("dropdown--menu-open")) {
        body.addEventListener("click", removeClass);
      } else {
        body.removeEventListener("click", removeClass);
      }
    }

    function removeClass(event) {
      if (!currentDropdown.contains(event.target)) {
        body.removeEventListener("click", removeClass);
        currentDropdown.classList.remove("dropdown--menu-open");
      }
      if (prevDropdown && prevDropdown != currentDropdown) {
        prevDropdown.classList.remove("dropdown--menu-open");
      }
      prevDropdown = currentDropdown;
    }

    function keypress(e) {
      if (e.keyCode === 27) {
        currentDropdown.classList.remove("dropdown--menu-open");
      }
      if (e.keyCode === 13) {
        toggleDropdown(e);
      }
    }
  }
})();
