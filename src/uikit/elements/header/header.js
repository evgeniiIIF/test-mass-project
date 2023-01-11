// import { setMobilePcMode, mobileDisplayMode } from "../../../sys/js/mode-mobile-pc";
// import { toggleLock } from "../../../sys/js/helper-functions";

// (function () {
//   toggleLock({
//     trigger: document.querySelector(".js-menu__icon"),
//   });

//   function DrawerBlock(drawerBlockClassName) {
//     const view = {
//       // toggleClassOpen(el, className) {
//       //   el.classList.toggle(className);
//       // },
//       // removeClassOpen(el, className) {
//       //   el.classList.remove(className);
//       // },
//       floatingBlockHandle() {
//         const floatingBlock = document.querySelector(".js-floating-block");
//         const parentDrawerBlock = document.querySelector(".js-target");
//         const drawerBlock = document.querySelector(drawerBlockClassName);
//         if (mobileDisplayMode) {
//           drawerBlock.append(floatingBlock);
//         } else {
//           parentDrawerBlock.before(floatingBlock);
//         }
//       },
//     };

//     const module = {};

//     const controller = {
//       // showDrawerBlock(e) {
//       //   e.stopPropagation();
//       //   const parentDrawerBlock = e.currentTarget.closest(".js-parent-drawer-block");
//       //   view.toggleClassOpen(parentDrawerBlock, "js-drawer-block--open");
//       //   const body = document.body;
//       //   body.addEventListener("click", bodyClear);
//       //   function bodyClear(e) {
//       //     if (!e.target.closest(drawerBlockClassName)) {
//       //       view.removeClassOpen(parentDrawerBlock, "js-drawer-block--open");
//       //       body.removeEventListener("click", bodyClear);
//       //     }
//       //   }
//       // },
//       // prevButton: undefined,
//       // showSubmenu(e) {
//       //   const submenuButton = e.target.closest(".js-submenu-button");
//       //   const body = document.body;
//       //   if (submenuButton) {
//       //     if (this.prevButton) {
//       //       body.removeEventListener("click", bodyClear);
//       //       console.log("remove");
//       //       view.removeClassOpen(this.prevButton, "item-menu--submenu-open");
//       //     }
//       //     submenuButton.classList.add("item-menu--submenu-open");
//       //     body.addEventListener("click", bodyClear);
//       //     this.prevButton = submenuButton;
//       //   }
//       // },
//     };
//     // function bodyClear(e) {
//     //   if (e.target.closest(".js-submenu-button")) {
//     //     return;
//     //   }
//     //   if (!e.target.closest(".submenu")) {
//     //     view.removeClassOpen(submenuButton, "item-menu--submenu-open");
//     //     body.removeEventListener("click", bodyClear);
//     //   }
//     // }

//     const app = {
//       init() {
//         setMobilePcMode();
//         view.floatingBlockHandle();
//         this.events();
//       },
//       events() {
//         // const buttonDrawerBlock = document.querySelector(".js-button-drawer-block");
//         // buttonDrawerBlock.addEventListener("click", controller.showDrawerBlock);
//         window.addEventListener("resize", view.floatingBlockHandle);

//         // const menu = document.querySelector(".js-menu");
//         // menu.addEventListener("click", controller.showSubmenu);
//       },
//     };

//     app.init();
//   }

//   DrawerBlock(".menu__body");
//   //   const menuIcon = body.querySelector(".js-menu");
//   //   menuIcon.addEventListener("click", showMobileMenu);
//   //   const header = menuIcon.closest(".header");
//   //   let isOpenMobileMenu = false;

//   //   function showMobileMenu(event) {
//   //     const menu = event.currentTarget;

//   //     if (event.target.closest(".menu__icon")) {
//   //       if (!isOpenMobileMenu) {
//   //         menu.classList.add("js-menu--open");
//   //         body.classList.add("_lock");
//   //         addScrollWidth();
//   //         isOpenMobileMenu = true;
//   //       } else {
//   //         menu.classList.remove("js-menu--open");
//   //         body.classList.remove("_lock");
//   //         removeScrollWidth();
//   //         isOpenMobileMenu = false;
//   //       }

//   //       const mediaQuery = window.matchMedia("(min-width: 992px)");
//   //       mediaQuery.addListener(handleTabletChange);
//   //       handleTabletChange(mediaQuery);

//   //       function handleTabletChange(e) {
//   //         if (e.matches) {
//   //           menu.classList.remove("js-menu--open");
//   //           body.classList.remove("_lock");
//   //         }
//   //       }
//   //       function addScrollWidth() {
//   //         const scrollWidth = getScrollWidth();
//   //         header.style.paddingRight = scrollWidth;
//   //         body.style.paddingRight = scrollWidth;
//   //       }
//   //       function removeScrollWidth() {
//   //         header.style.paddingRight = "";
//   //         body.style.paddingRight = "";
//   //       }
//   //       function getScrollWidth() {
//   //         let div = document.createElement("div");

//   //         div.style.overflowY = "scroll";
//   //         div.style.width = "50px";
//   //         div.style.height = "50px";

//   //         document.body.append(div);
//   //         let scrollWidth = div.offsetWidth - div.clientWidth;

//   //         div.remove();
//   //         return scrollWidth + "px";
//   //       }
//   //     }
//   //   }

//   //   if (isMobile.any() || !mediaQuery.matches) {
//   //     body.addEventListener("click", showSubmenu);
//   //     let submenuIsOpen = false;
//   //     console.log("sudbb");

//   //     function showSubmenu(e) {
//   //       const submenuButton = e.target.closest(".js-item-menu--has-submenu");
//   //       const body = e.currentTarget;

//   //       if (submenuButton) {
//   //         if (!submenuIsOpen) {
//   //           submenuButton.classList.add("js-item-menu--submenu-open");
//   //           body.addEventListener("click", hideSubmenu);
//   //           submenuIsOpen = true;
//   //         } else {
//   //           body.removeEventListener("click", hideSubmenu);
//   //         }
//   //       }

//   //       function hideSubmenu(e) {
//   //         if (!e.target.closest(".submenu")) {
//   //           submenuButton.classList.remove("js-item-menu--submenu-open");
//   //           body.removeEventListener("click", hideSubmenu);
//   //           submenuIsOpen = false;
//   //         }
//   //       }
//   //     }
//   //   }

//   // const headerContent = document.querySelector(".js-header__content");

//   // if (headerContent) {
//   //   window.addEventListener("resize", replaceHeaderContent);

//   //   function replaceHeaderContent() {
//   //     const menuBody = document.querySelector(".js-menu__body");
//   //     menuBody.append(headerContent);

//   //     if (mediaQuery.matches) {
//   //       const headerMenu = document.querySelector(".js-menu");
//   //       if (headerMenu) {
//   //         headerMenu.before(headerContent);
//   //       }
//   //     }
//   //   }
//   // }
// })();
