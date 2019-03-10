# Output
Output Javascript Console is a simple package for styling the data outputs in order to give a better visualization of the information through the console.
# Installation
```
$ npm install --save outputjsc
```
# Usage
To use Output first we must import it
```javascript
//use es6 syntax
const { output } = require('outputjsc');

    //output Object
    output
        
        //methods of output object
        
        //basic methods
        .<method> (<data-output>, <text-color>?, <bg-color>?)
        .out //print data
        .outln //print data with new line (\r\n)
        
        //text color
        .<method> (<data-output>, <bg-color>?)
        .black
        .red
        .green
        .yellow
        .blue
        .magenta
        .cyan
        .white
        
        //background colors
        .<method> (<data-output>, <text-coolor>?)
        .bgblack
        .bgred
        .bggreen
        .bgyellow
        .bgblue
        .bgmagenta
        .bgcyan
        .bgwhite
        
        //other utils methods
        
        //to add space
        .spc (n <number of spaces>?) //default space number is 1
        
        //to add tabulation: "\t"
        .tab (n <number of spaces>?) //default tab number is 1
        
        //to add a new line: '\r\n'
        .ln (n <number of spaces>?) //default new lines is 1
```

As the methods of the output object are chain methods, so each call of these methods is returned the output object again and can re-use the output methods without needing to call the output methods separately.
```javascript
//without chain method resource
output.red('red color ');
output.green('green color ');
output.blue('blue color');

//with chain method resource
output.red('red color ').green('green color ').blue('blue color');
```

##### Examples:
```javascript
    const { output } = require('outputjsc');
    
    output.green('Hello World'); //print 'Hello World' with green text color
    
    output.bgwhite('Hello World'); //print 'Hello World' with green background color
    
    output.bgcyan('Test Output', 'white'); //print 'Test Output' with cyan background color and white text color
    
    output
        .yellow('1 + 1 = ').green('2')
        .ln()
        .yellow('2 + 3 = ').green('5')
        .ln()
        .yellow('10 + 10 = ')
        .bgred('21');
    //output expected
    /*
        1 + 1 = 2
        2 + 3 = 5
        10 + 10 = 21
    */
    output
      .white('npm')
      .spc()
      .blue('notice')
      .spc()
      .white('created a lockfile as package-lock.json. You should commit this file')
      .ln()
      .white('npm').spc().bgyellow('WARN','Black').spc().white('outputjsc@1.0.0 No repository field.')
      .ln();
```

# String properties
At the time the Output package is imported, new properties are generated as prototypes in the String object and can be used to give a small stylized output methods can not provide.

Example:
```javascript
    const { output } = require('outputjsc');
    
    output.green('Hello World'.Bold); //apply a bold style on text content
    output.yellow('1 + 1 = ').red('3'.Underline); //apply a Underline style on text content (on '3' string)
```
other available properties
```
  .Dim
  .Inverse
  .Hidden
  .Italic
```
# License
MIT
