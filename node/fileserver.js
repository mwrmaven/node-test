var fs = require('fs');
var consoleerr = require('./consoleerr');

// 异步读取文件 使用 fs.readFile
fs.readFile('input.txt', function (err, data) {
    if (err) {
        return console.log(err);
    }
    console.log('未toString的data为：' + data);
    console.log('异步读取的数据为：%s', data.toString());
});

// 同步读取文件
// var data = fs.readFileSync('input.txt');
// console.log('未toString的data为：' + data);
// console.log('同步读取到的数据为：%s', data.toString());

// 打开文件
// 语法格式为 fs.open(path, flags[, mode], callback)
// fs.open('input.txt', 'r+', function (err, data) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log('文件打开成功！');
//     console.log('打开成功后，返回的data为：' + data);
// });

// 获取文件信息
// 语法 fs.stat(path, callback)
// 其中callback回调函数中包含 err、stats两个参数，stats是fs.Stats对象
// fs.stat('input.txt', function (err, stats) {
//     console.log(stats.isFile());
// });
// fs.stat('input.txt', function (err, stats) {
//     if (err) {
//         return console.error(err);
//     }
//     // console.log(stats);
//     console.log('读取文件信息成功');
//
//     // 检测文件类型
//     console.log('是否为文件：%s', stats.isFile());
//     console.log('是否为目录：%s', stats.isDirectory());
//     console.log('文件大小为: %dB', stats.size);
// })

// 写入文件
// 异步模式语法 fs.writeFile(file, data[, options], callback)
// 注意 writeFile直接打开文件，默认是 w 模式，所以如果文件存在，该方法写入的内容会覆盖旧的文件内容
//file - 文件名或文件描述符。
//data - 要写入文件的数据，可以是 String(字符串) 或 Buffer(缓冲) 对象。
//options - 该参数是一个对象，包含 {encoding, mode, flag}。默认编码为 utf8, 模式为 0666 ， flag 为 'w'
//callback - 回调函数，回调函数只包含错误信息参数(err)，在写入失败时返回。
// fs.writeFile('input.txt', '通过fs.writeFile写入文件的内容', function (err) {
//     if (err) {
//         return console.log(err.stack);
//     }
//     console.log('数据写入成功');
//     console.log('------------------------------------------');
//     console.log('读取写入的数据');
//     fs.readFile('input.txt', function (err, data) {
//         if (err) {
//             return console.log(err);
//         }
//         console.log('异步读取的数据为：%s', data);
//     })
// });

// 读取文件，使用 fs.read
// 语法 fs.read(fd, buffer, offset, length, position, callback)
//fd - 通过 fs.open() 方法返回的文件描述符。
//buffer - 数据写入的缓冲区。
//offset - 缓冲区写入的写入偏移量。
//length - 要从文件中读取的字节数。
//position - 文件读取的起始位置，如果 position 的值为 null，则会从当前文件指针的位置读取。
//callback - 回调函数，有三个参数err, bytesRead, buffer，err 为错误信息， bytesRead 表示读取的字节数，buffer 为缓冲区对象。
// var buf = new Buffer.alloc(1024);
// fs.open('input.txt', 'r+', function (err, fileDetail) {
//     if (err) {
//         return console.log(err.stack);
//     }
//     console.log('文件打开成功，读取文件：');
//     fs.read(fileDetail, buf, 0, buf.length, 0, function (err, bytes) {
//         if (err) {
//             console.log(err);
//         }
//         console.log(bytes + " 字节被读取");
//         // 输出buf中所有的缓存
//         console.log(buf.toString());
//         // 仅输出读取的字节
//         if (bytes > 0) {
//             console.log(buf.slice(0, bytes).toString());
//         }
//
//     });
// });

// 关闭文件
// 异步模式下关闭文件的语法 fs.close(fd, callback)
// fd - 通过 fs.open() 方法返回的文件描述符。
// callback - 回调函数，没有参数。
// var buf = Buffer.alloc(1024);
// fs.open('input.txt', 'r+', function (err, fd) {
//     if (err) {
//         return console.log(err.stack);
//     }
//     console.log('文件打开成功，准备读取文件：');
//
//     fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
//         if (err) {
//             console.log(err);
//         }
//
//         // 仅输出读取的字节
//         if (bytes > 0) {
//             console.log(buf.slice(0, bytes).toString());
//         }
//
//         // 关闭文件
//         fs.close(fd, function (err) {
//             if (err) {
//                 console.log(err.stack);
//             }
//             console.log('文件关闭成功');
//         })
//     })
// });

// 截取文件
// 异步模式下截取文件的语法格式 fs.ftruncate(fd, len, callback)
//fd - 通过 fs.open() 方法返回的文件描述符。
//len - 文件内容截取的长度。
//callback - 回调函数，没有参数。
// var buf = Buffer.alloc(1024);
// fs.open('input.txt', 'r+', function (err, fd) {
//     consoleerr(err);
//     console.log('文件打开成功，截取10个字节的文件内容，超出部分将被删除');
//
//     // 截取文件
//     fs.ftruncate(fd, 10, function (err) {
//         consoleerr(err);
//         console.log('文件截取成功，读取相同的文件');
//         fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
//             consoleerr(err);
//             // 仅输出读取的字节
//             if (bytes > 0) {
//                 console.log(buf.slice(0, bytes).toString());
//             }
//
//             // 关闭文件
//             fs.close(fd, function (err) {
//                 consoleerr(err);
//                 console.log('文件关闭成功')
//             })
//         })
//     })
// });










console.log('程序执行完毕');

