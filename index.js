// index.js
module.exports = function greet(name) {
   return `Hello, ${name}!`;
};

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('请输入你的名字：', name => {
  // 使用我们定义的 greet 函数来生成问候语
  const greeting = greet(name);
  // 打印出问候语
  console.log(greeting);
  readline.close();
});