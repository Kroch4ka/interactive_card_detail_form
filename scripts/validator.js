const builtInRules = {
  notEmpty: {
    pattern: /^.+$/,
    message: "Can’t be blank",
  },
  shouldBeMonth: {
    pattern: /^(0[1-9])|((1[1,2,3]))$/,
    message: "Should be month format",
  },
  onlyNumbers: (from, to) => {
    return {
      pattern: new RegExp(`^[0-9]{${from},${to}}$`),
      message: "Wrong format, numbers only",
    };
  },
};

class Validator {
  constructor() {
    this.rules = [];
    this.valid = false;
  }

  addRule({ pattern, message }) {
    this.rules.push({
      pattern,
      message,
    });
  }

  validate(value) {
    return new Promise((resolve, reject) => {
      const rejectMessage = this.rules
        .filter(({ pattern, _ }) => !pattern.test(value.trim()))
        .shift()?.message;
      if (rejectMessage) {
        this.valid = false;
        reject(rejectMessage);
      } else {
        this.valid = true;
        resolve();
      }
    });
  }

  isValid() {
    return this.valid;
  }
}

export { Validator, builtInRules };
