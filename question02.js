// 题目描述
// 实现呢一个函数，把字符串中的每个空格替换为%20

// 思路：通过正则表达式实现

function replaceBlank(str){
  return str.replace(/\s/g,'%20')
}