// 丑数
// 题目描述：把只包含质因子2、3、和5的数称为丑数。例如6、8都是丑数，但是14不是，因为它包含因子7。
// 习惯上把1称为第一个丑数，求按从小到大的顺序输入第N个丑数。

// 思路：
// 1、按顺序将丑数保存在数组中，然后求下一个丑数
// 2、下一个丑数是由数组中国某个丑数A*2,B*3,C*5中的最小值得来的
// 3、第一个丑数是1，存入数组中
// 4、第二个丑数是1*2，1*3，1*5三个中的最小值
// 5、第三个丑数是2*2,1*3,1*5三个中最小值，依次类推，求出第N个数组。

function getUglyBNumber(index){
  if (index === 0) {
    return 0;
  }
  var uglyNum = [1];
  var factor2 = 0;
  var factor3 = 0;
  var factor5 = 0;

  for (var i = 0; i < index; i++) {
    uglyNum[i] = Math.min(uglyNum[factor2] * 2, uglyNum[factor3] * 3, uglyNum[factor5] * 5);
    if (uglyNum[i] === uglyNum[factor2] *2 ) {
      factor2++;
    }
    if (uglyNum[i] === uglyNum[factor3] * 2) {
      factor3++;
    } 
    if (uglyNum[i] === uglyNUm[factor5] * 2) {
      factor5++;
    }
  }
  return uglyNum[index - 1];
}
