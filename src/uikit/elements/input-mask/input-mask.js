import inputmask from "../../../sys/js/plugins/Inputmask/dist/inputmask";

const inputsTel = document.querySelectorAll("input[type='tel']");
const im = new inputmask("+7 (999) 999-99-99");
im.mask(inputsTel);
