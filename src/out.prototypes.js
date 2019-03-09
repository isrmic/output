const colors = require('./colorsref');

Object.defineProperties(String.prototype, {
  Bold: {
    get () {
     return colors.Bright + this;
    },
  },
  Dim: {
    get () {
      return colors.Dim + this;
    },
  },
  Underline: {
    get () {
      return colors.Underscore + this;
    },
  },
  Inverse: {
    get () {
      return colors.Reverse + this;
    },
  },
  Hidden: {
    get () {
      return colors.Hidden + this;
    }
  },
  Italic: {
    get () {
      return colors.Italic + this;
    },
  }
});
