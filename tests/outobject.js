const { output } = require('../index');

const obj = {
  username: 'user',
  password: 'pass',
};

output.ln().outln(obj).bgcyan(obj, 'White').ln(2);