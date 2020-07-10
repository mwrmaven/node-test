var fs = require('fs');
// TODO 流继承了events.EventEmiter
// TODO 从流中读取数据
// var data = '';
// // 创建可读流
// var readStream = fs.createReadStream('input.txt');
// // 设置编码格式
// readStream.setEncoding('UTF8');
// // 处理流事件 data, end, error
// // data 当有数据可读时触发
// // end 没有数据可读时触发
// // error 接收和写入过程中发生错误时触发
// // finish 所有数据已被写入到底层系统时触发
//
// // on 绑定事件
// readStream.on('data', function (chunk) {
//     data += chunk;
// });
// readStream.on('end', function () {
//     console.log(data);
// });
// readStream.on('error', function (err) {
//     console.log(err.stack);
// });
// console.log("从流中读取数据程序执行完毕");

// TODO 将流中数据写入文件
// var data = '这是从流写入文件的操作';
// // 创建一个写入流，写入到output文件中
// var writeStream = fs.createWriteStream('output.txt');
// // 使用utf8写入数据
// writeStream.write(data,'UTF8');
// // 标记文件末尾
// writeStream.end();
// // 处理流事件
// writeStream.on('finish', function () {
//     console.log('写入完成');
// });
// writeStream.on('error', function (err) {
//     console.log(err.stack);
// });
// console.log("将流中数据写入文件程序执行完毕");

// TODO 管道流
// // 管道提供了一个输出流到输入流的机制，通常我们用于从一个流中获取数据并将数据写入到另外一个流中
// // 创建可读流
// var readStream = fs.createReadStream('input.txt');
// // 创建写入流
// var writeStream = fs.createWriteStream('output.txt');
// // 管道读写操作，读取input.txt文件的内容，并将内容写入到output.txt文件中
// readStream.pipe(writeStream);
// console.log("管道流程序执行完毕");

// TODO 链式流
// 链式是通过连接输出流到另外一个流并创建多个流操作链的机制。链式流一般用于管道操作；
// 示例使用管道和链式来压缩文件
// var zlib = require('zlib');
// 压缩input.txt 文件为 input.txt.gz
// fs.createReadStream('input.txt')
//     .pipe(zlib.createGzip())
//     .pipe(fs.createWriteStream('input.txt.gz'));
// console.log("管道和链式来压缩文件程序执行完毕");
//  示例使用管道和链式来解压文件
// fs.createReadStream('input.txt.gz')
//     .pipe(zlib.createGunzip())
//     .pipe(fs.createWriteStream('unzipinput.txt'));
// console.log("管道和链式来解压文件程序执行完毕");














