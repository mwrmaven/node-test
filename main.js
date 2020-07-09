// 获取命令行中输入的参数 process.argv
// process.argv.forEach((val, index) => {
// 	console.log(`${index}: ${val}`)
// });

// const args = require('minimist')(process.argv.slice(2));
// for(i in args) {
// 	console.log(args[i]);
// }

// 计算耗时 console.time console.timeEnd
// const doSomething = () => console.log('测试')
// const measureDoingSomething = () => {
//   console.time('flag') // 这里的flag是一个自定义的label标签，在做时间计算的时候使用
//   //做点事，并测量所需的时间。
//   doSomething()
//   console.timeEnd('flag')
// }
// measureDoingSomething()

// 创建进度条 progress
// const ProgressBar = require('progress')
// const bar = new ProgressBar(':bar', { total: 10 })
// const timer = setInterval(() => {
// 	bar.tick()
// 	if (bar.complete) {
// 		clearInterval(timer)
// 	}
// }, 100)

// 从命令行接收输入
// const readline = require('readline').createInterface({
// 	input: process.stdin,
// 	output: process.stdout
// })

// readline.question(`你叫什么名字？`, name => {
// 	console.log(`你好 ${name}!`)
// 	readline.close()
// })


const inquirer = require('inquirer')

var questions = [
  {
    type: 'input',
    name: 'name',
    message: "你叫什么名字?"
  }
]

inquirer.prompt(questions).then(answers => {
  console.log(`你好 ${answers['name']}!`)
})



