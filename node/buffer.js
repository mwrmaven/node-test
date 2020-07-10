// 创建Buffer类
// const buf = Buffer.alloc(10);

// // 写入缓冲区
// const len = buf.write('写入缓冲区的测试用例');
// console.log('写入的字节数为%d', len);
// // 从缓冲区中读取数据
// console.log('缓冲区中的数据为 %s', buf.toString());

// 将buffer转换为json对象
// buf.write('1,2,3,4,5');
// const json = JSON.stringify(buf);
// console.log(json);

// 缓冲区合并
var buffer1 = Buffer.from('缓冲区合并测试1');
var buffer2 = Buffer.from('缓冲区合并测试2');
// console.log('合并后的缓冲区为： %s', Buffer.concat([buffer1, buffer2]).toString());
//
// // 缓冲区比较
// var result = buffer1.compare(buffer2);
// if (result < 0) {
//     console.log('%s 在 %s 之前', buffer1, buffer2);
// } else if (result == 0) {
//     console.log('%s 与 %s 相同', buffer1, buffer2);
// } else {
//     console.log('%s 在 %s 之后', buffer1, buffer2);
// }
//
// // 拷贝缓冲区 , 将 buffer2插入到buffer1指定的位置上
// buffer2.copy(buffer1, 2, 0, 3); // 2为插入到buffer1中的位置，0为buffer2的起始位置，3为buffer2的结束位置
// console.log(buffer1.toString());

// 缓冲区裁剪
// console.log(buffer2.slice(1, 3).toString());

//缓冲区长度
// console.log(buffer2.length);