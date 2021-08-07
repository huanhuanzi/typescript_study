//  一、基本类型

//（1） number类型，可表示整数、浮点数、正负数
let total_one1:number = 4;
//（2）  字符串类型
let firstName_1:string = "wh";
let str_1 = `我叫${firstName_1}`;
// （3）字符串模板
let str222 = "\u6211\u53EB" + firstName_1;
// (4_1) 自动映射数据类型为boolean,根据上下文自动适配类型
let isTure_1 = true;
// (4_2)手动指定类型
let isTure_2:boolean;

// 以上为声明变量，并指定数据类型

// 二、 数组、元组

// （1）定义同一类型的数组
// （1_1）数组
let list_1: number[]=[1,2,3,4];
// (1_2) 泛型方式定义
let list_2: Array<number> = [1,2,3,4];
// (1_3)不 写类型
let list_3 = [1,2,3,4];

// （2_1）创建包含多种类型的数组
let list_4 = [1,'23'];
// (2_2）显示声明类型
let list_5: any[] = [1,true,'45']

// 3、元组 是特殊数组，固定长度、固定类型，一定要指定数据类型,定义和声明类型必须一一对应
let person_1: [number,string] = [1,"wh"]
// 元组有bug，定义两个，可以使用三个，编译器也不报错
// person_1[2]=3,报错。person_1.push(3)不报错
// 使用元组时，一定要声明数据类型
// 只有在声明变量时，指定了它的数据类型，它才是一个tuple

// 注以下为union类型
let person_2=[1,'3'];
person_2[0] = "ee";
person_2[1] = 2;
person_2[2] = 5;

// 三、 联合类型（Union）与文献类型(Literal)
// 1、联合类型声明
let union:string | number;
// 1-1、声明之后定义，定义成number和string都不会报错，之外的都会报错
union = 2;
union = 'we';
// union = true;会报错

// 1-2、定义了四种不同的类型
let union2 : string | number | boolean | string[];

// 1-3、例子，合并   
function mergeone(n1: number|string,n2: number|string){
    if (typeof n1 === "string"||typeof n2==="string")
        return n1.toString()+n2.toString();
    else
        return n1 + n2;
}
// 1-4、调用
let mergeNumber = mergeone(2,3);
let mergeString = mergeone("hello","world");
console.log(mergeNumber);
console.log(mergeString);

// 2、自面量类型
// 2-1、union给定取值范围，也确定了它的类型
let union3: 0 | 1 | 2
union3 = 1
// union3 = 4 错误
// 2-2、他的特定数据就是它的自己的类型
const nubmer3 = 3;

// 2-3、字面量和联合类型联合
let literal : 1|"2"|true|[1,2,3,4]
function merge2(n1: number|string,n2: number|string,resultType:"as-number"|"as-string"){
    if (resultType==="as-string"){
        return n1.toString()+n2.toString();
    }
    if (typeof n1 === "string"||typeof n2==="string")
        return n1.toString()+n2.toString();
    else
        return n1 + n2;
}
// 2-4、调用
let mergeNumber1 = merge2(2,3,'as-string');
let mergeNumber2 = merge2(2,3,'as-number');
let mergeString2 = merge2("hello","world","as-string");
console.log(mergeNumber1);
console.log(mergeNumber2);
console.log(mergeString2);

// 四、枚举类型Enum
// 1、定义Color，下标默认从0开始，也可以指定
enum Color{
    red,
    green,
    blue
}
let color = Color.blue;
console.log('枚举值是',color);
// 输出2

enum Color1{
    red = 6,
    green = 10,
    blue 
}
let color1 = Color1.blue;
console.log('枚举值是Color1',color1);
// 输出11
enum Color2{
    red = 'wanghuan',
    green = 'yzj',
    blue =1
}
let color2 = Color2.green;
console.log('枚举值是Color2',color2);

// 五、any和unknown
// 1、声明并定义定义any
let  randomValue:any = 666;
randomValue = true;
randomValue = 'asdf';
randomValue = {};
// randomValue.toUpperCase();  错误，666时number类型，toUpperCase是string的方法

// 2、unknowm 不保证类型，需要做一定程度的判断,比any更保险一点
let  randomValue1:unknown = 666;
randomValue1 = true;
randomValue1 = 'asdf';
randomValue1 = {};
if (typeof randomValue1==="function"){
    randomValue1();
}
if (typeof randomValue1==="string"){
    randomValue1.toUpperCase();
}

// 六、void、undefined与Never
// ps：void undifined never,undifined指变量没有赋值，没有初始化。void指变量本身就不存在

// 1-1、void 类型,没有返回值就是void类型
function printResult_0(){
    console.log("lalal");
}
// 1-2、指定void 类型 ，所有void在javascript的输出都是undefined;
function printResult1():void{
    console.log("lalal");
}
console.log("voidshuchu",printResult1());

// 2、指定 undifined类型 ，返回了undefined
function printResult2():undefined{
    console.log("lalal");
    return;
}
console.log("voidshuchu",printResult1());

// 3、Never类型。一个函数永远执行不完
// 抛出异常代码
// function throwError(message: string,errorCode: number):never{
//     throw{
//         message,
//         errorCode
//     }    
// }
// throwError("not found",404);

// 七、类型适配（类型断言） Type Assertions
// 1、
let messageone : any;
messageone = "abc";

// 1-1:方式1：加箭头括号将any类型转化为string类型，适配的过程中外面要加上（）
let ddd=(<string>messageone).endsWith("c");
// 1_2:方式2：加上as,并加上（）
let ccc=(messageone as string).endsWith("d");

// 八、函数类型
// 1-1、常规定义
let log = function(messagetwo){
    console.log(messagetwo);
}
// 1-2、es6方式二 箭头函数,只有一条语句时，花括号可以省略
let log1=(messagethree)=>{
    console.log(messagethree);
}
// 省略花括号
let log_1=(messagethree)=>console.log(messagethree);

// ts最大的区别就是可以给参数绑定类型，如下：调用时也只能调用相应类型
let log2=(messagefour:string)=>console.log(messagefour);
log2("hello")
// 多个参数
let log3=(messagefive:string,code:number)=>{
    console.log(messagefive,code);
}
log3("hello",3)

// 参数可选，调用时code会返回undified
let log4=(messagefive:string,code?:number)=>{
    console.log(messagefive,code);
}
log4("hello")

// 设定默认值，当调用时参数和默认值不一致时，会将默认值覆盖掉
// 参数可选 两种都要放到后面，
let log5=(messagefive:string,code:number = 0)=>{
    console.log(messagefive,code);
}
log5("hello")
