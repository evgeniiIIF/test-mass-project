"use strict";
(function () {
  function ItemQuantityDropdown(el) {
    const currentDropdown = el.closest(".dropdown");
    const dropdownInput = currentDropdown.querySelector(".dropdown__input");
    let totalCount;
    const itemCount = {};
    const iqDropdownItems = el.querySelectorAll(".iq-dropdown-item");
    let wordsTotal;
    let wordsItem;
    let wordsItem1;
    let wordsItem2;
    let wordsItem3;
    const iqDropdownId = el.dataset.id;

    if (iqDropdownId == "guests") {
      wordsTotal = ["гость", "гостя", "гостей"];
      wordsItem = ["младенец", "младенца", "младенцев"];
    }
    if (iqDropdownId == "facilities") {
      wordsItem1 = ["спальня", "спальни", "спален"];
      wordsItem2 = ["кровать", "кровати", "кроватей"];
      wordsItem3 = ["ванная комнаты", "ванные комнаты", "ванных комнат"];
    }

    let buttonClear = el.querySelector("[data-name='clear']");
    let buttonApply = el.querySelector("[data-name='apply']");

    iqDropdownItems.forEach((iqDropdownItem) => {
      const itemId = iqDropdownItem.dataset.id;
      const itemViewCount = iqDropdownItem.querySelector(".iq-dropdown-item__count");
      itemCount[itemId] = +itemViewCount.outerText;
      let decrementButton = iqDropdownItem.querySelector("[data-action=decrement-button]");
      let incrementButton = iqDropdownItem.querySelector("[data-action=increment-button]");

      // if (iqDropdownItems.length === Object.values(itemCount).length) {
      updateItemCountDisplay();
      // }

      decrementButton.addEventListener("click", () => {
        if (itemCount[itemId] <= 0) {
          return;
        }
        itemCount[itemId] -= 1;
        updateItemCountDisplay();
      });

      incrementButton.addEventListener("click", () => {
        itemCount[itemId] += 1;
        updateItemCountDisplay();
      });
      if (buttonClear) {
        buttonClear.addEventListener("click", () => {
          totalCount = 0;
          itemCount[itemId] = 0;
          updateItemCountDisplay();
        });
      }
      if (buttonApply) {
        buttonApply.addEventListener("click", () => {
          currentDropdown.classList.remove("dropdown--menu-open");
        });
      }

      function updateItemCountDisplay() {
        totalCount = getTotalCount();
        showButtonClear();

        if (totalCount == 0) {
          dropdownInput.value = "";
        } else {
          dropdownInput.value = getStr();
        }
        if (itemCount[itemId] <= 0) {
          decrementButton.classList.add("iq-dropdown-item__quantity-button--disabled");
          itemCount[itemId] = 0;
        }
        if (itemCount[itemId] > 0) {
          decrementButton.classList.remove("iq-dropdown-item__quantity-button--disabled");
        }

        itemViewCount.innerHTML = itemCount[itemId];
      }

      function getTotalCount() {
        return Object.values(itemCount).reduce((prev, current) => prev + +current, 0);
      }

      function showButtonClear() {
        if (buttonClear) {
          if (totalCount <= 0) {
            buttonClear.classList.add("iq-dropdown__button--disabled");
          } else {
            buttonClear.classList.remove("iq-dropdown__button--disabled");
          }
        }
      }

      function getStr() {
        let str;

        if (iqDropdownId == "guests") {
          let item3 = itemCount["item3"];
          let substrGuest;
          let substBaby;

          substrGuest = getSubstr(wordsTotal, totalCount);

          if (item3) {
            substBaby = getSubstr(wordsItem, item3);
            str = `${totalCount} ${substrGuest}, ${item3} ${substBaby}`;
          } else {
            str = `${totalCount} ${substrGuest}`;
          }
        }

        if (iqDropdownId == "facilities") {
          let countItem1 = itemCount["item1"];
          let countItem2 = itemCount["item2"];
          let countItem3 = itemCount["item3"];
          let substrItem1;
          let substrItem2;
          let substrItem3;

          if (countItem1) {
            substrItem1 = getSubstr(wordsItem1, countItem1);
            str = `${countItem1} ${substrItem1}`;
          }
          if (countItem2) {
            substrItem2 = getSubstr(wordsItem2, countItem2);
            str = `${countItem1} ${substrItem1}, ${countItem2} ${substrItem2}`;
          }
          if (countItem3) {
            substrItem3 = getSubstr(wordsItem3, countItem3);
            str = `${countItem1} ${substrItem1}, ${countItem2} ${substrItem2}, ${countItem3} ${substrItem3}`;
          }
        }

        return str;
      }

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
    });
  }

  const iqDropdownElements = document.querySelectorAll(".iq-dropdown");
  iqDropdownElements.forEach((iqDropdown) => {
    new ItemQuantityDropdown(iqDropdown);
  });
})();
