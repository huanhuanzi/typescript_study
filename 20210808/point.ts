// interface Point_one{
//     x:number;
//     y:number;
// }

// let drawPoint_one = (point:Point_one)=>{
//     console.log({x: point.x,y: point.y});
// }

// class Point_one implements IPoint_one{
//     // 构造函数初始化
//     constructor( public x:number, public y:number=2){
//         // this.x=x;
//         // this.y=y;
//     }
//     // 成员方法1
//     drawPoint=()=>{
//         console.log('x:',this.x,'y:',this.y);
//     }
//        // 成员方法2
//     getDistances=(p:IPoint_one)=>{
//     return Math.pow(p.x-this.x,2)+Math.pow(p.y-this.y,2);
//     return 0;
//     }
//     // setX = (value:number)=>{
//     //     if(value<0){
//     //         throw new Error("value不能小于0")
//     //     }
//     //     this.x=value;
//     // }
//     // getX = ()=>{
//     //     return this.x
//     // }

//     // setY = (value:number)=>{
//     //     if(value<0){
//     //         throw new Error("value不能小于0")
//     //     }
//     //     this.y=value;
//     // }
//     // getY = ()=>{
//     //     return this.y
//     // }
// }