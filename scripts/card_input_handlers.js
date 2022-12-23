import cardValidators from "./card_validators.js";
import {
  currentCardFormStatus,
  changeCardFormStatus,
  IDLE,
  SUCCESS,
} from "./state.js";

const checkAccessNextStep = () => {
  if (!cardValidators.isValidCard()) {
    document.querySelector('[data-confirmation]').disabled = true;
  } else {
    document.querySelector('[data-confirmation]').disabled = false;
  }
}

const getAlertNode = (input) => {
  const alertNode = input.closest(".field").querySelector("[data-alert]");
  return alertNode;
};

const resetAlertStatus = (input) => {
  input.classList.remove("alert");
  const alertNode = getAlertNode(input);
  alertNode.classList.remove("alert");
  alertNode.classList.add("hide");
};

const resetSuccessStatus = (input) => {
  input.classList.remove("success");
};

const setAlertStatus = (message, input) => {
  resetSuccessStatus(input);
  const alertNode = getAlertNode(input);
  alertNode.textContent = message;
  alertNode.classList.add("alert");
  alertNode.classList.remove("hide");
  input.classList.add("alert");
};

const setSuccessStatus = (input) => {
  resetAlertStatus(input);
  input.classList.add("success");
};

const cardHolderInputHandler = (e) => {
  const value = e.target.value || "";
  cardValidators.cardHolderValidator
    .validate(value)
    .then(() => {
      checkAccessNextStep();
      setSuccessStatus(e.target);
      document.dispatchEvent(
        new CustomEvent("successCardHolder", {
          detail: value,
        })
      );
    })
    .catch((message) => {
      setAlertStatus(message, e.target);
      document.dispatchEvent(new CustomEvent("failCardHolder"));
    });
};

const cardNumberInputHandler = (e) => {
  let value = e.target.value || "";

  cardValidators.cardNumberValidator
    .validate(value)
    .then(() => {
      checkAccessNextStep();
      setSuccessStatus(e.target);
      document.dispatchEvent(
        new CustomEvent("successCardNumber", {
          detail: value,
        })
      );
    })
    .catch((message) => {
      setAlertStatus(message, e.target);
      document.dispatchEvent(new CustomEvent("failCardNumber"));
    });
};

const cardExpiredMonthInputHandler = (e) => {
  const value = e.target.value.trim();
  cardValidators.monthDateValidator
    .validate(value)
    .then(() => {
      checkAccessNextStep();
      setSuccessStatus(e.target);
      document.dispatchEvent(
        new CustomEvent("successCardMonth", {
          detail: value,
        })
      );
    })
    .catch((message) => {
      setAlertStatus(message, e.target);
      document.dispatchEvent(new CustomEvent("failCardMonth"));
    });
};

const cardExpiredYearInputHandler = (e) => {
  const value = e.target.value || "";
  cardValidators.yearDateValidator
    .validate(value)
    .then(() => {
      checkAccessNextStep();
      setSuccessStatus(e.target);
      document.dispatchEvent(
        new CustomEvent("successCardYear", {
          detail: value,
        })
      );
    })
    .catch((message) => {
      setAlertStatus(message, e.target);
      document.dispatchEvent(new CustomEvent("failCardYear"));
    });
};

const cardCVCInputHandler = (e) => {
  const value = e.target.value || "";
  cardValidators.cvcValidator
    .validate(value)
    .then(() => {
      checkAccessNextStep();
      setSuccessStatus(e.target);
      document.dispatchEvent(
        new CustomEvent("successCardCVC", {
          detail: value,
        })
      );
    })
    .catch((message) => {
      setAlertStatus(message, e.target);
      document.dispatchEvent(new CustomEvent("failCardCVC"));
    });
};

const confirmationBtnHandler = () => {
  if (cardValidators.isValidCard()) {
    document.querySelector("[data-status]").dataset.status = SUCCESS;
    changeCardFormStatus();
  }
};

const continueBtnHandler = () => {
  document.querySelector("[data-status]").dataset.status = IDLE;
  changeCardFormStatus();
};

const bindCardInputsHandlers = () => {
  checkAccessNextStep();
  document
    .querySelector("[data-check-cardholder]")
    .addEventListener("input", cardHolderInputHandler);
  document
    .querySelector("[data-check-number]")
    .addEventListener("input", cardNumberInputHandler);
  document
    .querySelector("[data-check-month]")
    .addEventListener("input", cardExpiredMonthInputHandler);
  document
    .querySelector("[data-check-year]")
    .addEventListener("input", cardExpiredYearInputHandler);
  document
    .querySelector("[data-check-cvc]")
    .addEventListener("input", cardCVCInputHandler);
  document
    .querySelector("[data-confirmation]")
    .addEventListener("click", confirmationBtnHandler);
  document
    .querySelector("[data-continue]")
    .addEventListener("click", continueBtnHandler);
};

export default bindCardInputsHandlers;
