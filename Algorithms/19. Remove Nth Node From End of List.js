/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  // return twoPassTraverse(head, n);
  return arrayBridge(head, n);
  // return javaMethod1(head, n);
};

function twoPassTraverse(head, n) {
  let length = 0;
  let currentNode = head;

  while (currentNode) {
    currentNode = currentNode.next;
    length++;
  }

  // list length is now length
  let count = 0;
  let nextToNodeToDelete = (nodeToDelete = head);
  let beforeNodeToDelete = new ListNode(head.val);

  while (length - n + 1 > count) {
    nextToNodeToDelete = nextToNodeToDelete.next;
    // beforeNodeToDelete.next = nextToNodeToDelete;
    count++;
  }

  if (count === 1) {
    return [];
  } else {
    beforeNodeToDelete.next = nextToNodeToDelete;
    return beforeNodeToDelete;
  }
}

function arrayBridge(head, n) {
  let arrayBridge = [];
  let currentNode = head;

  while (currentNode) {
    arrayBridge.push(currentNode.val);
    currentNode = currentNode.next;
  }

  if (n === 1 && n === arrayBridge.length) return [];

  arrayBridge.splice(arrayBridge.length - n, 1);

  let list = (curr = new ListNode(arrayBridge[0]));
  let count = 1;

  while (count < arrayBridge.length) {
    curr.next = new ListNode(arrayBridge[count]);
    curr = curr.next;
    count++;
  }

  return list;
}

function javaMethod1(head, n) {
  //https://discuss.leetcode.com/topic/7031/simple-java-solution-in-one-pass/8

  let newHead = new ListNode(0);
  newHead.next = head;
  let p = newHead;
  let runner = newHead;

  while (n > 0) {
    runner = runner.next;
    n--;
  }

  while (runner.next != null) {
    runner = runner.next;
    p = p.next;
  }

  p.next = p.next.next;
  return newHead.next;
}
