var events = require('events');

// // 创建 EventEmitter对象
// var eventEmitter = new events.EventEmitter();
// // 创建事件处理程序
// var connectHandler = function () {
//     console.log('连接成功');
//     // 触发 data_received 事件
//     eventEmitter.emit('data_received');
// };
// // 事件对象绑定 connected 事件及其处理程序
// eventEmitter.on('connected', connectHandler);
// // 事件对象绑定 data_received 事件，及其处理程序
// eventEmitter.on('data_received', function () {
//     console.log('数据接收成功');
// });
// // 触发connected事件
// eventEmitter.emit('connected');

// TODO 事件参数作为回调函数参数传递
// var emitter = new events.EventEmitter();
// emitter.on('someEvent', function (a1, a2) {
//     console.log('listener1', a1, a2);
// });
// emitter.on('someEvent', function (a3, a4) {
//     console.log('listener2', a3, a4);
// });
// emitter.emit('someEvent', '参数1', '参数2');
//
// console.log('程序执行完成');

// TODO EventEmitter类的方法调用
var emitter = new events.EventEmitter();
// 监听器1
var listener1 = function () {
    console.log('监听器 listener1 执行')
};
// 监听器2
var listener2 = function () {
    console.log('监听器 listener2 执行')
};
// 绑定connect事件，监听器1
emitter.on('connect', listener1);
// 绑定connect事件，监听器2
emitter.on('connect', listener2);

var eventListenersCount = emitter.listenerCount('connect');
console.log("%d 个监听器监听连接事件。", eventListenersCount);

// 触发 connect事件
emitter.emit('connect');

// 移除绑定的listener1
emitter.removeListener('connect', listener1);
console.log('listener1 不再受监听。');

// 触发 connect事件
emitter.emit('connect');

eventListenersCount = emitter.listenerCount('connect');
console.log("%d 个监听器监听连接事件。", eventListenersCount);

console.log("程序执行完毕。");


