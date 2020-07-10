// 封装一个接口
// exports.world = function () {
//     console.log('hello world')
// };

// 封装一个对象
function Hello() {
    let name;
    this.setName = function (theName) {
        name = theName;
    };
    this.sayHello = function () {
        console.log('hello %s', name);
    };
};

module.exports = Hello;

