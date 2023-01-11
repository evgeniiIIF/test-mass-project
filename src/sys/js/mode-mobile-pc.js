let mobileDisplayMode;

function setMobilePcMode() {
  const isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
    },
  };

  const mediaQuery = window.matchMedia("(min-width: 992px)");
  // mediaQuery.addListener(handleTabletChange);
  // handleTabletChange(mediaQuery);

  // function handleTabletChange(e) {
  //   if (e.matches) {
  //     // menu.classList.remove("js-menu--open");
  //   }
  // }

  const body = document.body;

  window.addEventListener("resize", watchDevice);
  watchDevice();

  function watchDevice() {
    mobileDisplayMode = !mediaQuery.matches;
    if (isMobile.any() || !mediaQuery.matches) {
      if (body.classList.contains("pc")) {
        body.classList.remove("pc");
      }
      body.classList.add("mobile");
    } else {
      if (body.classList.contains("mobile")) {
        body.classList.remove("mobile");
      }
      body.classList.add("pc");
    }
    return mobileDisplayMode;
  }
}

export { setMobilePcMode, mobileDisplayMode };
