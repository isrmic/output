(() => {
  
  const { output } = require('../index');
  output
    .ln()
    .bgwhite('Iniciando os testes de saída', 'Cyan')
    .ln(2);
  
  output
    .bgwhite(' ID ', 'Black').spc().bgwhite(' UserName ', 'Black')
    .ln(2);

  require('./out')
  require('./outobject')
})();