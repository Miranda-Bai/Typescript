"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let str = "1"; //根据初始赋值推导出变量的类型，以后str的类型不能修改了
console.log(str);
const num = 2;
// ts原始数据类型 就是 JS原始数据类型 number string boolean undefined null symbol
let str1 = "1";
let bool = true;
let num1 = 12.345;
num1.toFixed(2);
console.log("num1 = ", num1);
let und = undefined;
let nul = null;
let sy = Symbol("123");
console.log("sy = ", sy);
let vo = undefined;
function fn() {
}
