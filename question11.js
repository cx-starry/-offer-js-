// 把数组排成最小的数
// 题目描述：输入一个整数数组，把数组里所有的数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。
// 例如：输入数组{3,32,321}，则打印出这三个数字能排成的最小的数字为321323。

// 思路：
// 1、制定规则
// 若ab > ba 则 a > b，
// 若ab < ba 则 a < b，
// 若ab = ba 则 a = b；
// 2、根据制定规则对数组进行排序，然后从小到大拼接即为所求结果。

function Comparator(a, b) {
  var s1 = a + "" + b;
  var s2 = b + "" + a;
  for (var i = 0; i < s1.length; i++) {
    if (s1.charAt(i) > s2.charAt(i)) {
      return 1;
    }
    if (s1.charAt(i) < s2.charAt(i)) {
      return -1;
    }
  }
  return 1;
}

function PrintMinNumber(numbers) {
  numbers.sort(Comparator);
  var result = "";
  for (var i = 0; i < numbers.length; i++) {
    result = result + numbers[i];
  }
  return result;
}
