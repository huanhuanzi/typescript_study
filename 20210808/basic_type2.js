// 一、面向对象-Object
// 1.1 定义 ，Person_one不仅是个对象，且仅有firstName、lastName、age这三个属性，且这三个属性都有它相对应的类型
// 1.1.1隐式定义
var Person_one = {
    firstName: 'huan',
    lastName: 'wang',
    age: 18
};
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
console.log(Person_one);
console.log(Person_one.age);
// 二 、Interface接口
// 2.1 定义，但一个坐标点是同时传入x和y的，所以要重构一下
var drawPoint = function (x, y) {
    console.log({ x: x, y: y });
};
var drawPoint_one = function (point) {
    console.log({ x: point.x, y: point.y });
};
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
var Point_one = /** @class */ (function () {
    // 构造函数初始化
    function Point_one(x, y) {
        var _this = this;
        if (y === void 0) { y = 2; }
        this.x = x;
        this.y = y;
        // 成员方法1
        this.drawPoint = function () {
            console.log('x:', _this.x, 'y:', _this.y);
        };
        // 成员方法2
        this.getDistances = function (p) {
            return Math.pow(p.x - _this.x, 2) + Math.pow(p.y - _this.y, 2);
            return 0;
        };
        // this.x=x;
        // this.y=y;
    }
    return Point_one;
}());
// 四、Access Modifier访问修饰符
// 4.1 定义一个新的point_two实例
var point_two = new Point_one(24, 50); //对象Object,也叫实例instance
// 4.2 还是可以通过访问对象给x轴和y轴重新赋值
// point_two.x=30;
// point_two.y=34;
// point_two.setX(10);
// console.log(point_two.getX());
// 上面这两行代码在实际中非常危险。
