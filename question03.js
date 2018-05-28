// 题目描述
// 从尾到头打印链表

// 思路：
// 1、从头到尾打印链表，通过js中数组的unshift（向数组的开头添加一个或更多元素）实现从尾到头

function printListFromTailToHead(head){
  const res = [];
  while(head) {
    res.unshift(head.val);
    head=head.next;
  }
  return res;
}


// 知识点回顾
// 链表是一种物理存储单元上非连续、非顺序的存储结构，数据元素的逻辑顺序是通过链表中的指针链接次序实现的。
// 链表由一系列结点（链表中每一个元素称为结点）组成，结点可以在运行时动态生成。每个结点包括两个部分：一个是存储数据元素的数据域，另一个是存储下一个结点地址的指针域。