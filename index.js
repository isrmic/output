const colors = require('./colorsref');

const stdoutput = (out) => { process.stdout.write(out), reset(); return output; };
const reset = () => { process.stdout.write(colors.Reset); };

const output = {
  black: (paramout) => stdoutput(prepareString(colors.FgBlack, paramout)),
  red: (paramout) => stdoutput(prepareString(colors.FgRed, paramout)),
  green: (paramout) => stdoutput(prepareString(colors.FgGreen, paramout)),
  yellow: (paramout) => stdoutput(prepareString(colors.FgGreen, paramout)),
  blue: (paramout) => stdoutput(prepareString(colors.FgGreen, paramout)),
  magenta: (paramout) => stdoutput(prepareString(colors.FgGreen, paramout)),
  cyan: (paramout) => stdoutput(prepareString(colors.FgGreen, paramout)),
  white: (paramout) => stdoutput(prepareString(colors.FgGreen, paramout)),
  spc: (numberspace = 1) => stdoutput(' '.repeat(numberspace)),  
};

const prepareString = (consolestyle, string) => {
  return `${consolestyle}${string}`;
};

const out = output.red("teste:").spc().green("OK");
