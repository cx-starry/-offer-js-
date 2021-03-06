// 变态跳台阶
// 一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。

// 思路：
// 假定第一次跳的是n阶，那么剩下的是0个台阶，跳法是f（0）=1；
// 假定第一次跳的是（n-1）阶，那么剩下的是1个台阶，跳法是f（1）=1；
// ... ...
// 假定第一次跳的是1阶，那么剩下的是（n-1）个台阶，跳法是f（n-1）；
// 以此类推， 由假设得出总跳法为：f（n）=f（n-1）+f（n-2）+···+f（1）+f（0）；
// 由于f（n-1）=f（0）+f（1）+···f（n-2），
// 因此f（n）=（f（0）+f（1）+···f（n-2））+f（n-1）=f（n-1）+f（n-1）；
// 由此可得
// n=1, f(n)=1
// n>1,且为整数, f(n)=2*f(n-1)

function jumpFloor(number)
{
  if (number<0){
    return -1;
  }else if(number <=2){
    return number
  }
  let arr = [];
  arr[0] = 1;
  arr[1] = 1;
  for(let i = 2; i <= number; i++) {
    arr[i] = 2*arr[i - 1];
  }
  return arr[number];
}
