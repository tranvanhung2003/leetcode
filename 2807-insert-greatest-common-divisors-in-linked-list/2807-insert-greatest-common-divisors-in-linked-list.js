/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ucln(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);

    while (b !== 0) {
        a %= b;
        [a, b] = [b, a];
    }

    return a;
}

var insertGreatestCommonDivisors = function (head) {
    let bien = head;

    while (bien.next) {
        const tempBien = bien.next;
        const tempValue = ucln(bien.val, bien.next.val);
        const newNode = new ListNode(tempValue, tempBien);
        bien.next = newNode;
        bien = tempBien;
    }

    return head;
};