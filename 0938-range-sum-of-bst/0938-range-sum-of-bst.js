function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  const map = new Map();
  let total = 0;

  function inRange(node) {
    if (low <= node.val && node.val <= high) {
      return true;
    } else {
      return false;
    }
  }

  function sum(node) {
    let tong = 0;

    if (inRange(node)) {
      tong += node.val;
    }

    if (node.left) {
      tong += sum(node.left);
    }

    if (node.right) {
      tong += sum(node.right);
    }

    return tong;
  }

  return sum(root);
};
