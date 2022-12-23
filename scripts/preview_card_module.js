import { defaultCardData } from "./state.js";

const onSuccessCardHolder = ({ detail: cardHolder }) => {
  document.querySelector("[data-preview-owner]").textContent = cardHolder;
};

const onFailCardHolder = () => {
  document.querySelector("[data-preview-owner]").textContent =
    defaultCardData.owner;
};

const onSuccessCardNumber = ({ detail: cardNumber }) => {
  const qintets = [...cardNumber.matchAll(/..../g)].map((match) => match[0]);
  document.querySelectorAll("[data-preview-qintet]").forEach((node, idx) => {
    node.textContent = qintets[idx];
  });
};

const onFailCardNumber = () => {
  document.querySelectorAll("[data-preview-qintet]").forEach((node, idx) => {
    node.textContent = defaultCardData.number[idx];
  });
};

const onSuccessCardMonth = ({ detail: cardMonth }) => {
  document.querySelector("[data-preview-expiry-month]").textContent = cardMonth;
};

const onFailCardMonth = () => {
  document.querySelector("[data-preview-expiry-month]").textContent =
    defaultCardData.expiry.month;
};

const onSuccessCardYear = ({ detail: cardYear }) => {
  document.querySelector("[data-preview-expiry-year]").textContent = cardYear;
};

const onFailCardYear = () => {
  document.querySelector("[data-preview-expiry-year]").textContent = defaultCardData.expiry.year
};

const onSuccessCVC = ({ detail: cvc }) => {
  document.querySelector("[data-preview-cvc]").textContent = cvc;
}

const onFailCVC = () => {
  document.querySelector("[data-preview-cvc]").textContent = defaultCardData.cvc;
}

const bindPreviewCardHandlers = () => {
  document.addEventListener("successCardHolder", onSuccessCardHolder);
  document.addEventListener("failCardHolder", onFailCardHolder);
  document.addEventListener("successCardNumber", onSuccessCardNumber);
  document.addEventListener("failCardNumber", onFailCardNumber);
  document.addEventListener("successCardMonth", onSuccessCardMonth);
  document.addEventListener("failCardMonth", onFailCardMonth);
  document.addEventListener("successCardYear", onSuccessCardYear);
  document.addEventListener("failCardYear", onFailCardYear);
  document.addEventListener("successCardCVC", onSuccessCVC);
  document.addEventListener("failCardCVC", onFailCVC);
};

export default bindPreviewCardHandlers;
