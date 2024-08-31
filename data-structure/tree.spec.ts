import Tree, {Comparable} from './tree';

class TestObject implements Comparable<TestObject> {
    value: number;

    constructor(value: number) {
        this.value = value;
    }

    compareTo(other: TestObject): number {
        if (this.value > other.value) return 1;
        if (this.value < other.value) return -1;
        return 0;
    }
}

describe('Tree', () => {
    describe('Number Tree', () => {

        const buildTree = () => {
            const tree = new Tree<number>();
            tree.insert(5);
            tree.insert(3);
            tree.insert(7);
            tree.insert(2);
            tree.insert(4);
            tree.insert(6);
            tree.insert(8);
            return tree;
        }

        it('should insert values', () => {
            const tree = buildTree();
            expect(tree.root?.value).toBe(5);
            expect(tree.root?.left?.value).toBe(3);
            expect(tree.root?.right?.value).toBe(7);
            expect(tree.root?.left?.left?.value).toBe(2);
            expect(tree.root?.left?.right?.value).toBe(4);
            expect(tree.root?.right?.left?.value).toBe(6);
            expect(tree.root?.right?.right?.value).toBe(8);
        });

        it('should delete values', () => {
            const tree = buildTree();
            // current:
            //    5
            //   / \
            //  3   7
            // / \ / \
            //2  4 6  8
            tree.delete(3);
            // current:
            //    5
            //   / \
            //  4   7
            // / \ / \
            //2  x 6  8
            expect(tree.root?.value).toBe(5);
            expect(tree.root?.left?.value).toBe(4);
            expect(tree.root?.right?.value).toBe(7);
            expect(tree.root?.left?.left?.value).toBe(2);
            expect(tree.root?.left?.right).toBe(null);
            expect(tree.root?.right?.left?.value).toBe(6);
            expect(tree.root?.right?.right?.value).toBe(8);
        });

        it('should search values', () => {
            const tree = buildTree();
            expect(tree.search(3)).toBe(true);
            expect(tree.search(9)).toBe(false);
        });
    });

    describe('String Tree', () => {

        const buildTree = () => {
            const tree = new Tree<string>();
            tree.insert('e');
            tree.insert('c');
            tree.insert('g');
            tree.insert('b');
            tree.insert('d');
            tree.insert('f');
            tree.insert('h');
            return tree;
        }

        it('should insert values', () => {
            const tree = buildTree();
            expect(tree.root?.value).toBe('e');
            expect(tree.root?.left?.value).toBe('c');
            expect(tree.root?.right?.value).toBe('g');
            expect(tree.root?.left?.left?.value).toBe('b');
            expect(tree.root?.left?.right?.value).toBe('d');
            expect(tree.root?.right?.left?.value).toBe('f');
            expect(tree.root?.right?.right?.value).toBe('h');
        });

        it('should delete values', () => {
            const tree = buildTree();
            tree.delete('c');
            expect(tree.root?.value).toBe('e');
            expect(tree.root?.left?.value).toBe('d');
            expect(tree.root?.right?.value).toBe('g');
            expect(tree.root?.left?.left?.value).toBe('b');
            expect(tree.root?.left?.right).toBe(null);
            expect(tree.root?.right?.left?.value).toBe('f');
            expect(tree.root?.right?.right?.value).toBe('h');
        });

        it('should search values', () => {
            const tree = buildTree();
            expect(tree.search('c')).toBe(true);
            expect(tree.search('i')).toBe(false);
        });
    })

    describe('Object Tree', () => {

        const buildTree = () => {
            const tree = new Tree<TestObject>();
            tree.insert(new TestObject(5));
            tree.insert(new TestObject(3));
            tree.insert(new TestObject(7));
            tree.insert(new TestObject(2));
            tree.insert(new TestObject(4));
            tree.insert(new TestObject(6));
            tree.insert(new TestObject(8));
            return tree;
        }

        it('should insert values', () => {
           const tree = buildTree();
            expect(tree.root?.value.value).toBe(5);
            expect(tree.root?.left?.value.value).toBe(3);
            expect(tree.root?.right?.value.value).toBe(7);
            expect(tree.root?.left?.left?.value.value).toBe(2);
            expect(tree.root?.left?.right?.value.value).toBe(4);
            expect(tree.root?.right?.left?.value.value).toBe(6);
            expect(tree.root?.right?.right?.value.value).toBe(8);
        });

        it('should delete values', () => {
            const tree = buildTree();

            expect(tree.root?.value.value).toBe(5);
            expect(tree.root?.left?.value.value).toBe(4);
            expect(tree.root?.right?.value.value).toBe(7);
            expect(tree.root?.left?.left?.value.value).toBe(2);
            expect(tree.root?.left?.right).toBe(null);
            expect(tree.root?.right?.left?.value.value).toBe(6);
            expect(tree.root?.right?.right?.value.value).toBe(8);
        });

        it('should search values', () => {
            const tree = buildTree();
            expect(tree.search(new TestObject(3))).toBe(true);
            expect(tree.search(new TestObject(9))).toBe(false);
        });
    });
});