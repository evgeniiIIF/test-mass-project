const body = document.body;

let prevTargets = [];

function showBlock(opts) {
  (function Func() {
    this.trigger = opts.e.target.closest(opts.trigger);
    this.target = opts.e.target.closest(opts.target);
    this.openableElement = opts.openableElement;
    this.addClass = opts.addClass;

    if (this.trigger) {
      if (this.prev) {
        if (this.prev.querySelector(opts.openableElement).contains(opts.e.target)) {
          if (this.prev.querySelector(opts.openableElement).contains(this.trigger)) {
            this.target.classList.toggle(opts.addClass);
            if (!this.prev.classList.contains("js-not-close")) {
              prevTargets.push(this.prev);
            }
            this.prev = this.target;
            return;
          } else {
            return;
          }
        }
        if (this.prev === this.target) {
          this.prev.classList.toggle(opts.addClass);

          return;
        }
        this.prev.classList.remove(opts.addClass);
      }
      if (this.target.querySelector(opts.openableElement).contains(opts.e.target)) {
        return;
      }
      prevTargets.forEach((item) => item.classList.remove(opts.addClass));
      prevTargets = [];

      this.target.classList.toggle(opts.addClass);
      this.prev = this.target;
    } else {
      if (this.prev) {
        if (this.prev.querySelector(opts.openableElement).contains(opts.e.target)) {
          return;
        }
        this.prev.classList.remove(opts.addClass);
        prevTargets.forEach((item) => item.classList.remove(opts.addClass));
        prevTargets = [];
      }
    }
  })();
}

function showSubmenu(event) {
  showBlock({
    e: event,
    trigger: ".js-button",
    target: ".js-target",
    addClass: "js--open",
    openableElement: ".js-openable-element",
  });
}
body.addEventListener("click", showSubmenu);

// ++++++++++++++++++++++++
