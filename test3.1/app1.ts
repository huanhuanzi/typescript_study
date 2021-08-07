//变量声明
var nubmer1 = 5;
let nubmer2 = 2;
const nubmer3 = 3;
// nubmer3 = 4；const定义的常数不可修改。
// 2、var和let都是定义变量，let是es6的语法，用来解决var作用域混乱的问题
// function doSomething(){
//     for(let i=0;i<5;i++){
//         console.log(i);
//     }
//     // console.log('fanally i is',i)
// }
// doSomething();

function add(n1: number,n2: number){
    return n1 + n2;
}
console.log(add(nubmer1,nubmer2));

//自动映射数据类型为boolean
let isTure = true;

// 手动指定类型
let isTure1: boolean;

// number类型
let total: number = 4;

// 字符串类型
let firstName: string = "wh";

// 字符串模板
let str = `我叫${firstName}`;

// 以上为声明变量，并指定数据类型

// 3.4数组和元组
let list1: number[]=[1,2,3,4];
// 泛型方式定义
let list2: Array<number> = [1,2,3,4];
let list3 = [1,2,3,4];
// 创建包含多种类型的数组
let list4 = [1,'23'];
let list5: any[] = [1,true,'45']

// 元组 是特殊数组，固定长度、固定类型，一定要指定数据类型
let person1: [number,string] = [1,"wh"]
// 元组有bug，定义两个，可以使用三个，编译器也不报错
// person1[2]=3,报错。person1.push(3)不报错

// union类型
let person2 = [1,'wh'];
person2[0] = "ee";
person2[1] = 2;
person2[2] = 5;

// 3.5 联合类型与文献类型
let union:string | number;
union = 2;
union = 'we';
// union = true;会报错
let union2 : string | number | boolean | string[]
function merge(n1: number|string,n2: number|string){
    if (typeof n1 === "string"||typeof n2==="string")
        return n1.toString()+n2.toString();
    else
        return n1 + n2;
}
// 调用
let mergeNumber = merge(2,3);
let mergeString = merge("hello","world");
console.log(mergeNumber);
console.log(mergeString);

// union给定取值范围,自面量类型
let union3: 0 | 1 | 2
union3 = 1
// union3 = 4 错误

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

let mergeNumber1 = merge2(2,3,'as-string');
let mergeNumber2 = merge2(2,3,'as-number');
let mergeString2 = merge2("hello","world","as-string");
console.log(mergeNumber1);
console.log(mergeNumber2);
console.log(mergeString2);

// 3.6枚举类型
enum Color{
    red,
    green,
    blue
}
let color = Color.blue;
console.log('枚举值是',color);

enum Color1{
    red = 6,
    green = 10,
    blue 
}
let color1 = Color1.blue;
console.log('枚举值是Color1',color1);

enum Color2{
    red = 'wanghuan',
    green = 'yzj',
    blue =1
}
let color2 = Color2.green;
console.log('枚举值是Color2',color2);

// 3.7 any 与 unkonwn
let  randomValue:any = 666;
randomValue = true;
randomValue = 'asdf';
randomValue = {};
// randomValue.toUpperCase();  错误

// unknowm 不保证类型，需要做一定程度的判断,比any更保险一点

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

//3.8 void undifined never,undifined指变量没有赋值，没有初始化。void指变量本身就不存在

// void 类型
function printResult(){
    console.log("lalal");
}
// 指定void 类型 ，所有void在javascript的输出都是undefined;
function printResult1():void{
    console.log("lalal");
}
console.log("voidshuchu",printResult1());

// 指定 undifined类型 
function printResult2():undefined{
    console.log("lalal");
    return;
}
console.log("voidshuchu",printResult1());

// 抛出异常代码
// function throwError(message: string,errorCode: number):never{
//     throw{
//         message,
//         errorCode
//     }    
// }
// throwError("not found",404);

// 3.9 类型适配 Type Assertions
let messageone : any;
messageone = "abc";

// 方式1：加箭头括号将any类型转化为string类型，适配的过程中外面要加上（）
let ddd=(<string>messageone).endsWith("c");
// 方式二：加上as,并加上（）
let ccc=(messageone as string).endsWith("d");

// 3-10 函数类型
let log = function(messagetwo){
    console.log(messagetwo);
}
// es6方式二 箭头函数,只有一条语句时，花括号可以省略
let log1=(messagethree)=>{
    console.log(messagethree);
}
// ts最大的区别就是可以给参数绑定类型，如下：调用时也只能调用相应类型
let log2=(messagefour:string)=>console.log(messagefour);
log2("hello")
// 多个参数
let log3=(messagefive:string,code:number)=>{
    console.log(messagefive,code);
}
log3("hello",3)

// 参数可选
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

// 4.1 对象object,可以认为object是any的子集  key to type 键类型对
const personone = {
    firstNameone:"wh",
    lastname:"we",
    ageone:18
}
console.log(personone)
console.log(personone.ageone)

// 4.2 interface接口
// interface Point{
//     x:number;
//     y:number;
// }
// let drawPoint = (point: Point)=>{
//     console.log({x: point.x,y: point.y});
// }
// drawPoint({x:105,y:24});

// class 类型
interface IPoint{
    x:number;
    y:number;
    drawPoint:()=>void;
    getDistances:(p:IPoint)=>number;
}

// 类
class Point implements IPoint{
    // x:number;
    // y:number;
    constructor(public x:number,public y:number){
        this.x=x;
        this.y=y;
    }
    drawPoint=()=>{
        console.log('x:',this.x,'y:',this.y);
    }
    getDistances=(p:IPoint)=>{
    return Math.pow(p.x-this.x,2)+Math.pow(p.y-this.y,2);
    }
}
// 声明实例创造对象
const point = new Point(2,3);//对象Object,实例instance
point.drawPoint();

// 构造函数constructor