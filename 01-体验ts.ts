// tyscript把整个环境当成一个全局的，默认文件是导出使用的，设置导出为空，其他文件就检测不到，就可以写同名的变量了
export{}
let str = "1"; //根据初始赋值推导出变量的类型，以后str的类型不能修改了

console.log(str);

const num = 2;

// ts原始数据类型 就是 JS原始数据类型 number string boolean undefined null symbol
let str1:string = "1";
let bool:boolean = true;
let num1:number = 12.345;
num1.toFixed(2);
console.log("num1 = ", num1);

let und:undefined= undefined;
let nul:null= null;
let sy:symbol= Symbol("123");
console.log("sy = ", sy);
let vo:void = undefined;

function fn():void{
    
}