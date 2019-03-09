const resolveOutputString = require('./resolveoutput');
const { Reset } = require('./colorsref');
//exec stdout.write, reset and the last elment of expression is returned;
const stdoutput = (out) => (process.stdout.write(out), reset(), output);

const reset = () => { process.stdout.write(Reset); };

const output = {
  
  out (paramout = '', textcolor, bgcolor) {
    return stdoutput(resolveOutputString(textcolor, bgcolor, paramout, true));
  },
  outln (paramout = '', textcolor, bgcolor) {
    return stdoutput(resolveOutputString(textcolor, bgcolor, paramout, true) + '\r\n');
  },

  //output text with colors
  black: (paramout, bgcolor) => stdoutput(resolveOutputString('black', bgcolor, paramout, true)),
  red: (paramout, bgcolor) => stdoutput(resolveOutputString('red', bgcolor, paramout, true)),
  green: (paramout, bgcolor) => stdoutput(resolveOutputString('green', bgcolor, paramout, true)),
  yellow: (paramout, bgcolor) => stdoutput(resolveOutputString('yellow', bgcolor, paramout, true)),
  blue: (paramout, bgcolor) => stdoutput(resolveOutputString('blue', bgcolor, paramout, true)),
  magenta: (paramout, bgcolor) => stdoutput(resolveOutputString('magenta', bgcolor, paramout, true)),
  cyan: (paramout, bgcolor) => stdoutput(resolveOutputString('cyan', bgcolor, paramout, true)),
  white: (paramout, bgcolor) => stdoutput(resolveOutputString('white', bgcolor, paramout, true)),

  //output text with background colors
  bgblack: (paramout, textcolor) => stdoutput(resolveOutputString(textcolor, 'black', paramout, false)),
  bgred: (paramout, textcolor) => stdoutput(resolveOutputString(textcolor, 'red', paramout, false)),
  bggreen: (paramout, textcolor) => stdoutput(resolveOutputString(textcolor, 'green', paramout, false)),
  bgyellow: (paramout, textcolor) => stdoutput(resolveOutputString(textcolor, 'yellow', paramout, false)),
  bgblue: (paramout, textcolor) => stdoutput(resolveOutputString(textcolor, 'blue', paramout, false)),
  bgmagenta: (paramout, textcolor) => stdoutput(resolveOutputString(textcolor, 'magenta', paramout, false)),
  bgcyan: (paramout, textcolor) => stdoutput(resolveOutputString(textcolor, 'cyan', paramout, false)),
  bgwhite: (paramout, textcolor) => stdoutput(resolveOutputString(textcolor, 'white', paramout, false)),  

  //output space
  spc: (spacenumbers = 1) => stdoutput(' '.repeat(spacenumbers)),
  //output tabulation
  tab: (tabnumbers = 1) => stdoutput('\t'.repeat(tabnumbers)),
  //output new line
  ln: (numberln = 1) => stdoutput('\r\n'.repeat(numberln)),
};


module.exports = output;