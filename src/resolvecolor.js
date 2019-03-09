const resolveColorString = (colorname) => {
  
  if (colorname) {    
    var result = colorname.toLowerCase();
    result = result[0].toUpperCase() + result.substr(1, colorname.length - 1);
  }

  return result;
};

module.exports = resolveColorString;