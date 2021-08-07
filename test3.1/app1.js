//变量声明
var nubmer1 = 5;
var nubmer2 = 2;
var nubmer3 = 3;
// nubmer3 = 4；const定义的常数不可修改。
// 2、var和let都是定义变量，let是es6的语法，用来解决var作用域混乱的问题
// function doSomething(){
//     for(let i=0;i<5;i++){
//         console.log(i);
//     }
//     // console.log('fanally i is',i)
// }
// doSomething();
function add(n1, n2) {
    return n1 + n2;
}
console.log(add(nubmer1, nubmer2));
//自动映射数据类型为boolean
var isTure = true;
// 手动指定类型
var isTure1;
// number类型
var total = 4;
// 字符串类型
var firstName = "wh";
// 字符串模板
var str = "\u6211\u53EB" + firstName;
// 以上为声明变量，并指定数据类型
// 3.4数组和元组
var list1 = [1, 2, 3, 4];
// 泛型方式定义
var list2 = [1, 2, 3, 4];
var list3 = [1, 2, 3, 4];
// 创建包含多种类型的数组
var list4 = [1, '23'];
var list5 = [1, true, '45'];
// 元组 是特殊数组，固定长度、固定类型，一定要指定数据类型
var person1 = [1, "wh"];
// 元组有bug，定义两个，可以使用三个，编译器也不报错
// person1[2]=3,报错。person1.push(3)不报错
// union类型
var person2 = [1, 'wh'];
person2[0] = "ee";
person2[1] = 2;
person2[2] = 5;
// 3.5 联合类型与文献类型
var union;
union = 2;
union = 'we';
// union = true;会报错
var union2;
function merge(n1, n2) {
    if (typeof n1 === "string" || typeof n2 === "string")
        return n1.toString() + n2.toString();
    else
        return n1 + n2;
}
// 调用
var mergeNumber = merge(2, 3);
var mergeString = merge("hello", "world");
console.log(mergeNumber);
console.log(mergeString);
// union给定取值范围,自面量类型
var union3;
union3 = 1;
// union3 = 4 错误
var literal;
function merge2(n1, n2, resultType) {
    if (resultType === "as-string") {
        return n1.toString() + n2.toString();
    }
    if (typeof n1 === "string" || typeof n2 === "string")
        return n1.toString() + n2.toString();
    else
        return n1 + n2;
}
var mergeNumber1 = merge2(2, 3, 'as-string');
var mergeNumber2 = merge2(2, 3, 'as-number');
var mergeString2 = merge2("hello", "world", "as-string");
console.log(mergeNumber1);
console.log(mergeNumber2);
console.log(mergeString2);
// 3.6枚举类型
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
var color = Color.blue;
console.log('枚举值是', color);
var Color1;
(function (Color1) {
    Color1[Color1["red"] = 6] = "red";
    Color1[Color1["green"] = 10] = "green";
    Color1[Color1["blue"] = 11] = "blue";
})(Color1 || (Color1 = {}));
var color1 = Color1.blue;
console.log('枚举值是Color1', color1);
var Color2;
(function (Color2) {
    Color2["red"] = "wanghuan";
    Color2["green"] = "yzj";
    Color2[Color2["blue"] = 1] = "blue";
})(Color2 || (Color2 = {}));
var color2 = Color2.green;
console.log('枚举值是Color2', color2);
// 3.7 any 与 unkonwn
var randomValue = 666;
randomValue = true;
randomValue = 'asdf';
randomValue = {};
// randomValue.toUpperCase();  错误
// unknowm 不保证类型，需要做一定程度的判断,比any更保险一点
var randomValue1 = 666;
randomValue1 = true;
randomValue1 = 'asdf';
randomValue1 = {};
if (typeof randomValue1 === "function") {
    randomValue1();
}
if (typeof randomValue1 === "string") {
    randomValue1.toUpperCase();
}
//3.8 void undifined never
// void 类型
function printResult() {
    console.log("lalal");
}
// 指定void 类型
function printResult1() {
    console.log("lalal");
}
console.log("voidshuchu", printResult1());
