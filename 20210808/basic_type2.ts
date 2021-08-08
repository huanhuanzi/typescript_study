// 一、面向对象-Object
// 1.1 定义 ，Person_one不仅是个对象，且仅有firstName、lastName、age这三个属性，且这三个属性都有它相对应的类型
// 1.1.1隐式定义
const Person_one = {
    firstName:'huan',
    lastName:'wang',
    age:18
}
// 1.1.2 显示定义
// const Person_one:{    
//     firstName:stirng,
//     lastName:stirng,
//     age:number
// } = {
//     firstName:'huan',
//     lastName:'wang',
//     age:18
// }
// 1.2调用
console.log(Person_one)
console.log(Person_one.age)

// 二 、Interface接口
// 2.1 定义，但一个坐标点是同时传入x和y的，所以要重构一下
let drawPoint = (x,y)=>{
    console.log({x,y});
}
// 2.2重构
// 2.2.1创建接口

interface Point_one{
    x:number;
    y:number;
}

let drawPoint_one = (point:Point_one)=>{
    console.log({x: point.x,y: point.y});
}

// 调用？？？？？？？？？？
// drawPoint_one({x:105,y:24});


// drawPoint({x:105,y:24});

// 三、class 类
// 3.1表明是一个interface
interface IPoint_one{
    x:number;//私有属性时去掉
    y:number;
    drawPoint:()=>void;//不接收任何参数，且函数也没有返回值
    getDistances:(p:IPoint_one)=>number;//接收p类型，且返回值是number类型
}
// 3.2根据接口的定义来实现这个类
// 关键字+类的名称+接口实现+接口名称
// class Point_one implements IPoint_one{
//     x:number;//成员变量1
//     y:number;//成员变量2

//     // 构造函数初始化
//     constructor( x:number, y:number){
//         this.x=x;
//         this.y=y;
//     }
//     // 成员方法1
//     drawPoint=()=>{
//         console.log('x:',this.x,'y:',this.y);
//     }
//        // 成员方法2
//     getDistances=(p:IPoint_one)=>{
//     return Math.pow(p.x-this.x,2)+Math.pow(p.y-this.y,2);
//     }
// }

//3.3.1 声明对象，创造实例对象1,此时声明x和y是多少，在类中不定义构造函数
// const point_one = new Point_one();//对象Object,也叫实例instance
// point_one.x=2;
// point_one.y=2;
// point_one.drawPoint();

//3.3.2 声明实例创造对象2，此时在类中加入构造函数，关键词是constructor,这样在初始化point_one的时候，就可以把坐标值一起填充进去
// const point_one = new Point_one(2,3);//对象Object,也叫实例instance
// point_one.drawPoint();

// 3.3.2 初始化的时候，不知道坐标点的数据或者初始化的时候不想赋值，可以把构造函数中的参数改为option可选项加个问号，用如下替换
// 这样在创建新对象的时候就可以不给point赋值了
// constructor( x?:number, y?:number){
//     this.x=x;
//     this.y=y;
// }
// const point_one = new Point_one();//对象Object,也叫实例instance
// point_one.drawPoint();

// 3.3.3 使用关键词public，去掉成员变量1，2和constructor的可选参数
class Point_one implements IPoint_one{
    // 构造函数初始化
    constructor( public x:number, public y:number=2){
        // this.x=x;
        // this.y=y;
    }
    // 成员方法1
    drawPoint=()=>{
        console.log('x:',this.x,'y:',this.y);
    }
       // 成员方法2
    getDistances=(p:IPoint_one)=>{
    return Math.pow(p.x-this.x,2)+Math.pow(p.y-this.y,2);
    return 0;
    }
    // setX = (value:number)=>{
    //     if(value<0){
    //         throw new Error("value不能小于0")
    //     }
    //     this.x=value;
    // }
    // getX = ()=>{
    //     return this.x
    // }

    // setY = (value:number)=>{
    //     if(value<0){
    //         throw new Error("value不能小于0")
    //     }
    //     this.y=value;
    // }
    // getY = ()=>{
    //     return this.y
    // }
}

// 四、Access Modifier访问修饰符
// 4.1 定义一个新的point_two实例
const point_two = new Point_one(24,50);//对象Object,也叫实例instance
// 4.2 还是可以通过访问对象给x轴和y轴重新赋值
// point_two.x=30;
// point_two.y=34;
// point_two.setX(10);
// console.log(point_two.getX());

// 上面这两行代码在实际中非常危险。


// 五 泛型
let list_one: number[]=[1,2,3,4];
// (1_2) 泛型方式定义
let list_two: Array<number> = [1,2,3,4];

// 5.1.1定义函数
let lastInArray=(arr:Array<number>)=>{
    return arr[arr.length-1];
}
// 5.1.2调用
const l1=lastInArray([1,2,3,4]);

// 5.2 动态类型定义T
let lastInArray_one=<T>(arr:Array<T>)=>{
    return arr[arr.length-1];
}
// 或者
let lastInArray_TWO=<T>(arr:T[])=>{
    return arr[arr.length-1];
}
const l2=lastInArray_TWO<string>(['1','2']);
const l3=lastInArray_TWO<string|number>(['1','2']);

// 多泛型表达方式
let makeTuple = (x:number,y:string)=>[x,y];
let makeTuple_one = <T,Y>(x:T,y:Y)=>[x,y];
const v1 = makeTuple_one(1,'one');
const v2 = makeTuple_one(true,'one');
const v3 = makeTuple_one<boolean,number>(true,1);

// 定义默认类型
let makeTuple_two = <T,Y=number>(x:T,y:Y)=>[x,y];
const v4 = makeTuple_two<boolean>(true,1);








