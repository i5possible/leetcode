type Optional<T> = T | null;

type ListNode<T> = {
    value: T;
    next: Optional<ListNode<T>>
};


type LinkedList<T> = {
    head: Optional<ListNode<T>>;
    // tail is the last node
    tail: Optional<ListNode<T>>;
    length: number;
};

type LoopLinkedList<T> = {
    head: Optional<ListNode<T>>;
    // tail.next points to head
    tail: Optional<ListNode<T>>;
    length: number;
};

type BiListNode<T> = {
    value: T;
    next: Optional<BiListNode<T>>;
    prev: Optional<BiListNode<T>>;
};

type BiLinkedList<T> = {
    head: Optional<BiListNode<T>>;
    tail: Optional<BiListNode<T>>;
    length: number;
};

const mergeTwoSortedLinkedList = <T>(l1: LinkedList<T>, l2: LinkedList<T>): LinkedList<T> => {
    let node1 = l1.head;
    let node2 = l2.head;
    const head = node1.value < node2.value ? node1 : node2;
    const mergedList: LinkedList<T> = {
        head: head,
        tail: head,
        length: 0
    };
    while (node1 && node2) {
        if (node1.value < node2.value) {
            mergedList.tail.next = node1;
            mergedList.tail = node1;
            node1 = node1.next;
        } else {
            mergedList.tail.next = node2;
            mergedList.tail = node2;
            node2 = node2.next;
        }
        mergedList.length++;
    }
    if (node1) {
        mergedList.tail.next = node1;
        mergedList.tail = l1.tail;
        mergedList.length += l1.length;
    }
    if (node2) {
        mergedList.tail.next = node2;
        mergedList.tail = l2.tail;
        mergedList.length += l2.length;
    }
    return mergedList;
}