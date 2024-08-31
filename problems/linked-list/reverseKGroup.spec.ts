import reverseKGroup, {ListNode, listToArray} from "./reverseKGroup";

describe('Reverse K group', () => {
    it('should reverse k group', () => {
        const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(8))))))));
        const k = 3;
        const expected = new ListNode(3, new ListNode(2, new ListNode(1, new ListNode(6, new ListNode(5, new ListNode(4, new ListNode(7, new ListNode(8))))))));
        const result = reverseKGroup(head, k);
        expect(listToArray(result).join(', ')).toEqual(listToArray(expected).join(', '));
    })
})