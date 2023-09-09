# php.js

Author: Nishant Shah

## About

`php.js` is a collection of JavaScript functions that mimic the behavior of some commonly used PHP functions. These functions can be useful when you're working with JavaScript and need to replicate PHP functionality.

## Usage

### Function: echo(output)

This function mimics PHP's `echo` function and writes the `output` to the document.

Usage:
```javascript
echo("Hello, World!");
```
### Function: print_r(output)

This function mimics PHP's `print_r` function and logs the `output` to the console.

Usage:
```javascript
print_r({ name: "John", age: 30 });
```
### Function: str_replace(find, replace, word)
This function mimics PHP's str_replace function and replaces find with replace in word.

Usage:
```javascript
const replaced = str_replace("world", "there", "Hello, world!");
console.log(replaced); // Outputs: "Hello, there!"
```
# More Information
For more information and a complete list of available functions, please check the source code in `index.js`. Feel free to contribute and expand the functionality of this library.

# License
This project is licensed under the GPL License.
