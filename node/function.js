// 函数
// function say(word) {
//     console.log(word)
// }
//
function execute(someFunction, value) {
    someFunction(value);
}
//
// execute(say, 'hello');

// 匿名函数，未给函数命名
execute(function (word) {
    console.log(word);
}, '匿名函数');

