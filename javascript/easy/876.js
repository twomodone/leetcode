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
var middleNode = function(head) {
    let size = 0;
    let tempNode = head;

    while(tempNode){
        size++;
        tempNode = tempNode.next;
    }

    tempNode = head;

    for (let i = 1; i < Math.floor(size / 2) + 1; i++){
        tempNode = tempNode.next;
    }
    
    return tempNode;
};
