const { output } = require('../index.js');

output
  .white('npm')
  .spc()
  .blue('notice')
  .spc()
  .white('created a lockfile as package-lock.json. You should commit this file')
  .ln()
  .white('npm').spc().bgyellow('WARN', 'Black').spc().white('output@1.0.0 No repository field.').ln();

output
  .ln()
  .outln('Simple output', 'Cyan', 'White');

//
output
  .ln()
  .bgwhite(' Test Underscore with Bold '.Underline.Bold, 'green')
  .ln();

output
  .ln()
  .bgwhite(' Test '.Italic.Underline, 'black');
