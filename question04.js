// 题目描述
// 重建二叉树——输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。

// 思路：
// 1、先序遍历第一个位置是根节点treeNode，中序遍历的根节点位置在中间p，在p左边的肯定是treeNode的左子树的中序数组，p右边的肯定是treeNode的右子树的中序数组
// 2、先序遍历的第二个位置到p，也是treeNode左子树的先序子数组，剩下p右边的就是treeeNode的右子树的先序子数组，把四个数组找出来，分左右递归调用即可

function reConstructBinaryTree(pre, vin){
  if (!pre || pre.length === 0){
    return;
  }

  const treeNode = {
    value: pre[0]
  };

  for (let i = 0; i < pre.length; i++) {
    if (vin[i] === pre[0]) {
      treeNode.left = reConstructBinaryTree(pre.slice(1, i+1), vin.slice(0, i));
      treeNode.right = reConstructBinaryTree(pre.slice(i+1), vin.slice(i+1));
    }
  }

  return treeNode;
}

//知识点回顾：
// 二叉树是每个节点最多有两个子树的树结构。
// 　　前序遍历：首先访问根，再先序遍历左子树，最后先序遍历右子树。
// 　　中序遍历：首先中序遍历左子树，再访问根，最后中序遍历右子树。
// 　　后序遍历：首先后序遍历左子树，再后序遍历右子树，最后访问根。