const rootSelector = "[data-js-input-mask]";

class InputMask {
  constructor(rootElement) {
    this.rootElement = rootElement;
    this.init();
  }

  init() {
    const isLibReady = typeof window.IMask !== "undefined";

    if (isLibReady) {
      window.IMask(this.rootElement, {
        mask: this.rootElement.dataset.jsInputMask,
      });
    } else {
      console.error("Библиотека IMask не подключена");
    }
  }
}

export default class InputMaskCollection {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new InputMask(element);
    });
  }
}

// IMask(document.getElementById("phone-mask"), {
//   mask: "+{7}(000)000-00-00",
// });
