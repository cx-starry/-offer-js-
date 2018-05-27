// 题目描述
// 从尾到头打印链表

// 思路：
// 1、从头到尾打印链表，通过js中数组的unshift（向数组的开头添加一个或更多元素）实现从尾到头

function printListFromTailToHead(head){
  var res = [];
  while(head) {
    res.unshift(head.val);
    head=head.next;
  }
  return res;
}
