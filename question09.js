// 第一个只出现一次的字符
// 题目描述：在一个字符串（长度在1~10000，全部由大写字母组成）中找到一个第一个只出现一次的字符，并返回它的位置

// 思路：
// 1、新建一个对象，其中key用来存放字符，value用来存放该字符出现的次数
// 2、第一次循环，将所有的字符和对应的次数存放在map中，时间复杂度为O(n)
// 3、第二次循环找到value为1的字符所在的位置，把那个返回

function FirstNotRepeatingChar(str) {
  if (str.length == 0)
    return -1;

  var map = {};
  for (var i = 0; i < str.length; i++) {
    var charX = str[i]
    if (!map[charX]) {
      map[charX] = 1;
    } else {
      map[charX]++;
    }
  }

  for (var i = 0; i < str.length; i++) {
    var charY = str[i];
    if (map[charY] == 1)
      return i;
  }
}