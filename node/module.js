// node.js 模块系统
// 调用接口
// var hello = require('./hello');
// hello.world();

// 创建对象
var Hello = require('./hello');
let hello = new Hello();
hello.setName('test');
hello.sayHello();
