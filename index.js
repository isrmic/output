const colors = require('./colorsref');

const stdoutput = (out) => { process.stdout.write(out), reset(); return output; };
const reset = () => { process.stdout.write(colors.Reset); };

const output = {
  black: (paramout, bgcolor) => stdoutput(prepareString(colors.FgBlack, colors[`Bg${bgcolor}`], paramout)),
  red: (paramout, bgcolor) => stdoutput(prepareString(colors.FgRed, colors[`Bg${bgcolor}`], paramout)),
  green: (paramout, bgcolor) => stdoutput(prepareString(colors.FgGreen, colors[`Bg${bgcolor}`], paramout)),
  yellow: (paramout, bgcolor) => stdoutput(prepareString(colors.FgYellow, colors[`Bg${bgcolor}`], paramout)),
  blue: (paramout, bgcolor) => stdoutput(prepareString(colors.FgBlue, colors[`Bg${bgcolor}`], paramout)),
  magenta: (paramout, bgcolor) => stdoutput(prepareString(colors.FgMagenta, colors[`Bg${bgcolor}`], paramout)),
  cyan: (paramout, bgcolor) => stdoutput(prepareString(colors.FgCyan, colors[`Bg${bgcolor}`], paramout)),
  white: (paramout, bgcolor) => stdoutput(prepareString(colors.FgWhite, colors[`Bg${bgcolor}`], paramout)),
  bgblack: (paramout, textcolor) => stdoutput(prepareString(colors.BgBlack, colors[`Fg${textcolor}`], paramout)),
  bgred: (paramout, textcolor) => stdoutput(prepareString(colors.BgRed, colors[`Fg${textcolor}`], paramout)),
  bggreen: (paramout, textcolor) => stdoutput(prepareString(colors.BgGreen, colors[`Fg${textcolor}`], paramout)),
  bgyellow: (paramout, textcolor) => stdoutput(prepareString(colors.BgYellow, colors[`Fg${textcolor}`], paramout)),
  bgblue: (paramout, textcolor) => stdoutput(prepareString(colors.BgBlue, colors[`Fg${textcolor}`], paramout)),
  bgmagenta: (paramout, textcolor) => stdoutput(prepareString(colors.BgMagenta, colors[`Fg${textcolor}`], paramout)),
  bgcyan: (paramout, textcolor) => stdoutput(prepareString(colors.BgCyan, colors[`Fg${textcolor}`], paramout)),
  bgwhite: (paramout, textcolor) => stdoutput(prepareString(colors.BgWhite, colors[`Fg${textcolor}`], paramout)),
  
  spc: (numberspace = 1) => stdoutput(' '.repeat(numberspace)),
  ln: (numberln = 1) => stdoutput('\r\n'.repeat(numberln)),
};

const prepareString = (consolestyle, consolestyle2 = '', string) => {
  return `${consolestyle}${consolestyle2}${string}`;
};

module.exports = { output };