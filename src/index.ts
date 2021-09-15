import express, {Request, Response} from 'express';
import {router} from "./routes/loginRoutes";
import cookieSession from "cookie-session";

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(cookieSession({keys: ['asdfasdf']}));
app.use(router);

app.listen(3000, () => {
    console.log('listening on port 3000');
})

// @classDecor
// class Car {
//
//     color: string = 'white';
//
//     @testDecor
//     get formattedColor(): string {
//         return `This color if ${this.color}`;
//     }
//
//     @logError('Car crashed oooo')
//     drive(@paramDecor speed:string,@paramDecor isStopped:boolean): void {
//         throw new Error('error!!!!')
//         console.log('driving!!!')
//         console.log('speed:'+ speed);
//     }
// }
//
// function classDecor(constructor: typeof Car){
//     console.log('constructor ', constructor)
// }
//
// function paramDecor(target:any, key:string, index:number){
//     console.log('target ', target)
//     console.log('key ', key)
//     console.log('index ', index)
// }
//
// function testDecor(target:any, key:string){
//     console.log('target ', target)
//     console.log('key ', key)
// }
//
// function logError(errorMessage:string) {
//     return function (target: any, key: string, desc: PropertyDescriptor): void {
//         const method = desc.value;
//
//         desc.value = function () {
//             try {
//                 method();
//             } catch (e) {
//                 console.log(errorMessage);
//             }
//         }
//     }
// }

