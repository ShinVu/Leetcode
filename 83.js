// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// var deleteDuplicates = function (head) {
//   if (head == null) {
//     return null;
//   }
//   let ptr = new ListNode(head.val, null);
//   let result = ptr;
//   while (head != null) {
//     if (ptr.val !== head.val) {
//       ptr.next = head;
//       ptr = ptr.next;
//     }
//     head = head.next;
//   }
//   ptr.next = null;
//   return result;
// };
qweqweqwewqewqe;
