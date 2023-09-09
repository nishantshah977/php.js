/* 
* Author: Nishant Shah
* Project: php.js
* License: GPL
*/

// ----------- -----------//

// ----------- document.write -----------//

function echo(output){
    document.write(output);
}

// ----------- console.log -----------//

function print_r(output){
    console.log(output);
}

// ----------- Str_replace -----------//

function str_replace(find,replace,word){
    return word.replace(find,replace);
} 

// ----------- array_count -----------//

function array_count(arr) {
    return arr.length;
}

// ----------- implode -----------//

function implode(symbol,arr){
    return arr.join(symbol);
}

// ----------- explode -----------//

function explode(symbol,str){
    return str.split(symbol);
}

// ----------- strlen -----------//

function strlen(str){
    return str.length;
}

// ----------- array_push -----------//

function array_push(arr,val){
    arr.push(val);
    return arr;
}

// ----------- array_pop -----------//

function array_pop(arr){
    return arr.pop();
}

// ----------- array_shift -----------//

function array_shift(arr){
    return arr.shift();
}

function count(arr) {
    return arr.length;
}


function array_unshift(arr, val) {
    arr.unshift(val);
    return arr;
}


function array_key_exists(key, obj) {
    return key in obj;
}


function array_merge() {
    var result = [];
    for (var i = 0; i < arguments.length; i++) {
        if (Array.isArray(arguments[i])) {
            result = result.concat(arguments[i]);
        }
    }
    return result;
}


function in_array(needle, haystack) {
    return haystack.includes(needle);
}


function json_encode(obj) {
    return JSON.stringify(obj);
}

function json_decode(jsonStr) {
    return JSON.parse(jsonStr);
}

function array_slice(arr, start, length) {
    return arr.slice(start, start + length);
}

function array_splice(arr, start, deleteCount) {
    return arr.splice(start, deleteCount);
}

function array_reverse(arr) {
    return arr.slice().reverse();
}

function array_unique(arr) {
    return Array.from(new Set(arr));
}

function array_values(arr) {
    return Object.values(arr);
}

function array_keys(arr) {
    return Object.keys(arr);
}

function strpos(haystack, needle) {
    return haystack.indexOf(needle);
}

function str_repeat(str, count) {
    return str.repeat(count);
}

function substr(str, start, length) {
    return str.substr(start, length);
}

function trim(str) {
    return str.trim();
}

function date(format, timestamp) {
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    };
    const dateObj = timestamp ? new Date(timestamp) : new Date();
    return dateObj.toLocaleString(undefined, options);
}


function strtotime(dateString) {
    return Date.parse(dateString);
}

function is_numeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

function urlencode(str) {
    return encodeURIComponent(str).replace(/%20/g, '+');
}

function urldecode(str) {
    return decodeURIComponent(str.replace(/\+/g, '%20'));
}

function htmlspecialchars(str) {
    return str.replace(/&/g, '&amp;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')
              .replace(/"/g, '&quot;')
              .replace(/'/g, '&#039;');
}

function strip_tags(input) {
    return input.replace(/<[^>]*>/g, '');
}

function htmlentities(str) {
    return String(str).replace(/&/g, '&amp;')
                      .replace(/</g, '&lt;')
                      .replace(/>/g, '&gt;')
                      .replace(/"/g, '&quot;')
                      .replace(/'/g, '&#039;');
}
