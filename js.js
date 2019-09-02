'use strict';
var a = +prompt('enter number');
var o = prompt('enter +');
var b = +prompt('enter number');

var sum = null;

if (o === '+') {
    sum = a + b;
} else if (o !== '+') {
    alert('enter only +');
}

if (res !== null) {
    alert('result: ' + sum);
}