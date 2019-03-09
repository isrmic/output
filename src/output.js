const colors = require('./colorsref');
const util = require('util');

const stdoutput = (out) => { process.stdout.write(out), reset(); return output; };
const reset = () => { process.stdout.write(colors.Reset); };

const output = {
  
  out (paramout = '', textcolor = '', bgcolor = '') {
    return stdoutput(prepareString(colors[`Fg${textcolor}`], colors[`Bg${bgcolor}`], paramout));
  },
  outln (paramout = '', textcolor = '', bgcolor = '') {
    return stdoutput(prepareString(colors[`Fg${textcolor}`], colors[`Bg${bgcolor}`], paramout) + '\r\n');
  },

  //output text with colors
  black: (paramout, bgcolor) => stdoutput(prepareString(colors.FgBlack, colors[`Bg${bgcolor}`], paramout)),
  red: (paramout, bgcolor) => stdoutput(prepareString(colors.FgRed, colors[`Bg${bgcolor}`], paramout)),
  green: (paramout, bgcolor) => stdoutput(prepareString(colors.FgGreen, colors[`Bg${bgcolor}`], paramout)),
  yellow: (paramout, bgcolor) => stdoutput(prepareString(colors.FgYellow, colors[`Bg${bgcolor}`], paramout)),
  blue: (paramout, bgcolor) => stdoutput(prepareString(colors.FgBlue, colors[`Bg${bgcolor}`], paramout)),
  magenta: (paramout, bgcolor) => stdoutput(prepareString(colors.FgMagenta, colors[`Bg${bgcolor}`], paramout)),
  cyan: (paramout, bgcolor) => stdoutput(prepareString(colors.FgCyan, colors[`Bg${bgcolor}`], paramout)),
  white: (paramout, bgcolor) => stdoutput(prepareString(colors.FgWhite, colors[`Bg${bgcolor}`], paramout)),

  //output text with background colors
  bgblack: (paramout, textcolor) => stdoutput(prepareString(colors.BgBlack, colors[`Fg${textcolor}`], paramout)),
  bgred: (paramout, textcolor) => stdoutput(prepareString(colors.BgRed, colors[`Fg${textcolor}`], paramout)),
  bggreen: (paramout, textcolor) => stdoutput(prepareString(colors.BgGreen, colors[`Fg${textcolor}`], paramout)),
  bgyellow: (paramout, textcolor) => stdoutput(prepareString(colors.BgYellow, colors[`Fg${textcolor}`], paramout)),
  bgblue: (paramout, textcolor) => stdoutput(prepareString(colors.BgBlue, colors[`Fg${textcolor}`], paramout)),
  bgmagenta: (paramout, textcolor) => stdoutput(prepareString(colors.BgMagenta, colors[`Fg${textcolor}`], paramout)),
  bgcyan: (paramout, textcolor) => stdoutput(prepareString(colors.BgCyan, colors[`Fg${textcolor}`], paramout)),
  bgwhite: (paramout, textcolor) => stdoutput(prepareString(colors.BgWhite, colors[`Fg${textcolor}`], paramout)),
  
  //output space
  spc: (spacenumbers = 1) => stdoutput(' '.repeat(spacenumbers)),
  //output tabulation
  tab: (tabnumbers = 1) => stdoutput('\t'.repeat(tabnumbers)),
  //output new line
  ln: (numberln = 1) => stdoutput('\r\n'.repeat(numberln)),
};

const prepareString = (consolestyle = '', consolestyle2 = '', paramout) => {

  return `${consolestyle}${consolestyle2}${typeof paramout !== 'string' ? util.inspect(paramout) : paramout }`;
};

module.exports = output;