import { Validator, builtInRules } from "./validator.js";

const CARD_LENGTH = 16;
const YEAR_LENGTH = 2;
const CVC_LENGTH = 4;

const cardHolderValidator = new Validator();
cardHolderValidator.addRule(builtInRules.notEmpty);

const cardNumberValidator = new Validator();
cardNumberValidator.addRule(builtInRules.notEmpty);
cardNumberValidator.addRule(builtInRules.onlyNumbers(CARD_LENGTH, CARD_LENGTH));

const monthDateValidator = new Validator();
monthDateValidator.addRule(builtInRules.notEmpty);
monthDateValidator.addRule(builtInRules.shouldBeMonth);

const yearDateValidator = new Validator();
yearDateValidator.addRule(builtInRules.notEmpty);
yearDateValidator.addRule(builtInRules.onlyNumbers(YEAR_LENGTH, YEAR_LENGTH));

const cvcValidator = new Validator();
cvcValidator.addRule(builtInRules.notEmpty);
cvcValidator.addRule(builtInRules.onlyNumbers(CVC_LENGTH, CVC_LENGTH));

const isValidCard = () => {
  return (
    cardHolderValidator.isValid() &&
    cardNumberValidator.isValid() &&
    monthDateValidator.isValid() &&
    yearDateValidator.isValid() &&
    cvcValidator.isValid()
  );
};

export default {
  cardHolderValidator,
  cardNumberValidator,
  monthDateValidator,
  yearDateValidator,
  cvcValidator,
  isValidCard,
  CARD_LENGTH
};
