"use strict";
// import express, {Request, Response} from 'express';
// import {router} from "./routes/loginRoutes";
// import cookieSession from "cookie-session";
//
// const app = express();
//
// app.use(express.urlencoded({extended: true}));
// app.use(cookieSession({keys: ['asdfasdf']}));
// app.use(router);
//
// app.listen(3000, () => {
//     console.log('listening on port 3000');
// })
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var Car = /** @class */ (function () {
    function Car() {
        this.color = 'white';
    }
    Object.defineProperty(Car.prototype, "formattedColor", {
        get: function () {
            return "This color if " + this.color;
        },
        enumerable: false,
        configurable: true
    });
    Car.prototype.drive = function (speed, isStopped) {
        throw new Error('error!!!!');
        console.log('driving!!!');
        console.log('speed:' + speed);
    };
    __decorate([
        testDecor,
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], Car.prototype, "formattedColor", null);
    __decorate([
        logError('Car crashed oooo'),
        __param(0, paramDecor),
        __param(1, paramDecor),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Boolean]),
        __metadata("design:returntype", void 0)
    ], Car.prototype, "drive", null);
    Car = __decorate([
        classDecor
    ], Car);
    return Car;
}());
function classDecor(constructor) {
    console.log('constructor ', constructor);
}
function paramDecor(target, key, index) {
    console.log('target ', target);
    console.log('key ', key);
    console.log('index ', index);
}
function testDecor(target, key) {
    console.log('target ', target);
    console.log('key ', key);
}
function logError(errorMessage) {
    return function (target, key, desc) {
        var method = desc.value;
        desc.value = function () {
            try {
                method();
            }
            catch (e) {
                console.log(errorMessage);
            }
        };
    };
}
