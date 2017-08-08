"use strict";
exports.__esModule = true;
function main(p) {
    console.log(p.age, p.age, p.getAge(44));
}
main({ name: 'gogo', age: 2, getAge: function (age) { return age * 10; } });
