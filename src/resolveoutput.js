const util = require('util');

const resolveColorName = require('./resolvecolor');
const colors = require('./colorsref');

const resolveoutputstring = (textcolor = '', bgcolor ='', paramout) => {
  
  const cst1 = resolveColorName(textcolor);
  const cst2 = resolveColorName(bgcolor);
  
  const tcolor = (cst1 && cst1 !== '') ? (colors[`Fg${cst1}`] || colors[cst1]) : '';
  const bcolor = (cst2 && cst2 !== '') ? (colors[`Bg${cst2}`] || colors[cst2]) : '';  

  return prepareString(
    tcolor || '',
    bcolor || '',
    paramout,
  );
};


const prepareString = (consolestyle, consolestyle2 , paramout) => {  
  return `${consolestyle}${consolestyle2}${typeof paramout !== 'string' ? util.inspect(paramout) : paramout }`;
};

module.exports = resolveoutputstring;