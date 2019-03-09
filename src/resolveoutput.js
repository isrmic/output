const util = require('util');

const resolveColorName = require('./resolvecolor');
const colors = require('./colorsref');

const resolveoutputstring = (style1 = '', style2 ='', paramout) => {
  
  const cst1 = resolveColorName(style1);
  const cst2 = resolveColorName(style2);
  
  const st1 = (cst1 && cst1 !== '') ? (colors[`Fg${cst1}`] || colors[cst1]) : '';
  const st2 = (cst2 && cst2 !== '') ? (colors[`Bg${cst2}`] || colors[cst2]) : '';  

  return prepareString(
    st1 || '',
    st2 || '',
    paramout,
  );
};


const prepareString = (consolestyle, consolestyle2 , paramout) => {  
  return `${consolestyle}${consolestyle2}${typeof paramout !== 'string' ? util.inspect(paramout) : paramout }`;
};

module.exports = resolveoutputstring;