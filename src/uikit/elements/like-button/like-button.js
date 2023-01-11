"use strict";

(function () {
  liked();

  function liked() {
    let likeButtons = document.querySelectorAll(".like-button .like-button__body");
    likeButtons.forEach((likeButton) => {
      let likeCount = likeButton.querySelector(".like-button__value");
      let isLiked = false;

      likeButton.addEventListener("click", function (e) {
        if (isLiked) {
          e.currentTarget.classList.remove("like-button--liked");
          likeCount.value = +likeCount.value - 1;
          isLiked = false;
        } else {
          e.currentTarget.classList.add("like-button--liked");
          likeCount.value = +likeCount.value + 1;
          isLiked = true;
        }
      });
    });
  }
})();
