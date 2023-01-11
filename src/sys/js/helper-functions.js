function toggleClass(opts) {
  opts.trigger.addEventListener("click", (e) => {
    opts.target.classList.toggle(opts.addClass);
    console.log(opts.target);
  });
}

// toggleClass({
//   target: document.body,
//   trigger: document.querySelector('.js-menu__icon'),
//   addClass: '_lock'
// });

export { toggleClass };

// +++++++++++++++++++++++++++++++

function toggleLock(opts) {
  const body = document.body;
  const header = document.querySelector(".js-header");
  const menu = document.querySelector(".js-menu");
  let lockInstalled = false;

  opts.trigger.addEventListener("click", (e) => {
    if (body || header) {
      if (!lockInstalled) {
        body.classList.add("_lock");
        addScrollWidth();
        lockInstalled = true;
      } else {
        body.classList.remove("_lock");
        removeScrollWidth();
        lockInstalled = false;
      }

      const mediaQuery = window.matchMedia("(min-width: 992px)");
      mediaQuery.addListener(handleTabletChange);
      handleTabletChange(mediaQuery);

      function handleTabletChange(e) {
        if (e.matches) {
          menu.classList.remove("js--open");
          body.classList.remove("_lock");
          removeScrollWidth();
          lockInstalled = false;
        }
      }

      function addScrollWidth() {
        const scrollWidth = getScrollWidth();
        header.style.paddingRight = scrollWidth;
        body.style.paddingRight = scrollWidth;
      }
      function removeScrollWidth() {
        header.style.paddingRight = "";
        body.style.paddingRight = "";
      }
      function getScrollWidth() {
        let div = document.createElement("div");

        div.style.overflowY = "scroll";
        div.style.width = "50px";
        div.style.height = "50px";

        document.body.append(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;

        div.remove();
        return scrollWidth + "px";
      }
    }
  });
}

// toggleLock({
//   trigger: document.querySelector(".js-menu__icon"),
// });

export { toggleLock };
