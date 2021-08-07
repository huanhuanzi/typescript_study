//  一、基本类型
//（1） number类型，可表示整数、浮点数、正负数
var total_one = 4;
//（2）  字符串类型
var firstName_1 = "wh";
var str_1 = "\u6211\u53EB" + firstName_1;
// （3）字符串模板
var str222 = "\u6211\u53EB" + firstName_1;
// (4_1) 自动映射数据类型为boolean,根据上下文自动适配类型
var isTure_1 = true;
// (4_2)手动指定类型
var isTure_2;
// 以上为声明变量，并指定数据类型
// 二、 数组、元组
// （1）定义同一类型的数组
// （1_1）数组
var list_1 = [1, 2, 3, 4];
// (1_2) 泛型方式定义
var list_2 = [1, 2, 3, 4];
// (1_3)不 写类型
var list_3 = [1, 2, 3, 4];
// （2_1）创建包含多种类型的数组
var list_4 = [1, '23'];
// (2_2）显示声明类型
var list_5 = [1, true, '45'];
// 3、元组 是特殊数组，固定长度、固定类型，一定要指定数据类型,定义和声明类型必须一一对应
var person_1 = [1, "wh"];
// 元组有bug，定义两个，可以使用三个，编译器也不报错
// person_1[2]=3,报错。person_1.push(3)不报错
// 使用元组时，一定要声明数据类型
// 只有在声明变量时，指定了它的数据类型，它才是一个tuple
// 注以下为union类型
var person_2 = [1, '3'];
person_2[0] = "ee";
person_2[1] = 2;
person_2[2] = 5;
// 三、 联合类型（Union）与文献类型(Literal)
// 1、联合类型声明
var union;
// 1-1、声明之后定义，定义成number和string都不会报错，之外的都会报错
union = 2;
union = 'we';
// union = true;会报错
// 1-2、定义了四种不同的类型
var union2;
// 1-3、例子，合并   
function mergeone(n1, n2) {
    if (typeof n1 === "string" || typeof n2 === "string")
        return n1.toString() + n2.toString();
    else
        return n1 + n2;
}
// 1-4、调用
var mergeNumber = mergeone(2, 3);
var mergeString = mergeone("hello", "world");
console.log(mergeNumber);
console.log(mergeString);
// 2、自面量类型
// 2-1、union给定取值范围，也确定了它的类型
var union3;
union3 = 1;
// union3 = 4 错误
// 2-2、他的特定数据就是它的自己的类型
var nubmer3 = 3;
// 2-3、字面量和联合类型联合
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
// 2-4、调用
var mergeNumber1 = merge2(2, 3, 'as-string');
var mergeNumber2 = merge2(2, 3, 'as-number');
var mergeString2 = merge2("hello", "world", "as-string");
console.log(mergeNumber1);
console.log(mergeNumber2);
console.log(mergeString2);
// 四、枚举类型Enum
// 1、定义Color，下标默认从0开始，也可以指定
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
var color = Color.blue;
console.log('枚举值是', color);
// 输出2
var Color1;
(function (Color1) {
    Color1[Color1["red"] = 6] = "red";
    Color1[Color1["green"] = 10] = "green";
    Color1[Color1["blue"] = 11] = "blue";
})(Color1 || (Color1 = {}));
var color1 = Color1.blue;
console.log('枚举值是Color1', color1);
// 输出11
var Color2;
(function (Color2) {
    Color2["red"] = "wanghuan";
    Color2["green"] = "yzj";
    Color2[Color2["blue"] = 1] = "blue";
})(Color2 || (Color2 = {}));
var color2 = Color2.green;
console.log('枚举值是Color2', color2);
