export class ListNode {
    val: number;
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export const listToArray = (head: ListNode | null): number[] => {
    let current = head;
    const result = []
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

const printList = (head: ListNode | null) => {
    let current = head;
    const result = []
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join('->'));
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if (head === null) {
        return null;
    }
    let first = new ListNode(0, head);
    let prev = first;
    let nextGroupStart;
    let current = head;
    let i = 1;
    while (current) {
        if (i === k) {
            nextGroupStart = current.next;
            current = prev.next;
            let target = nextGroupStart;
            while (current != nextGroupStart) {
                // console.log(`current: ${current?.val}, target: ${target?.val}`)
                const next = current.next;
                current.next = target;
                target = current;
                current = next;
            }
            // console.log(`current: ${current?.val}, target: ${target?.val}`)
            let temp = prev.next;
            prev.next = target;
            prev = temp;

            // printList(first);
            i = 0;
        } else {
            current = current.next;
        }

        i++;
    }
    // printList(first);

    return first.next;
}

export default reverseKGroup;


// printList(reverseKGroup(head, 3));