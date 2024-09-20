export interface Comparable<T> {
    compareTo(other: T): number;
}

type NodeType<T> = Comparable<T> | string | number;

class TreeNode<T extends NodeType<T>> {
    value: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    compareTo(other: T): number {
        if (typeof this.value === 'string' || typeof this.value === 'number') {
            if (this.value > other) return 1;
            if (this.value < other) return -1;
        } else {
            if (this.value.compareTo(other) > 0) return 1;
            if (this.value.compareTo(other) < 0) return -1;
        }
        return 0;
    }

    insert(value: T): void {
        if (this.compareTo(value) === 1) {
            if (this.left === null) {
                this.left = new TreeNode(value);
            } else {
                this.left.insert(value);
            }
        } else {
            if (this.right === null) {
                this.right = new TreeNode(value);
            } else {
                this.right.insert(value);
            }
        }
    }
}

class Tree<T extends NodeType<T>> {
    root: TreeNode<T> | null;

    constructor() {
        this.root = null;
    }

    insert(value: T): void {
        if (this.root === null) {
            this.root = new TreeNode(value);
        } else {
            this.root.insert(value);
        }
    }

    delete(value: T): void {
        // find the node
        let current = this.root;
        let parent = null;
        while (current !== null && current.compareTo(value) !== 0) {
            parent = current;
            if (current.compareTo(value) === 1) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        if (current === null) return;
        // if the node has no child, delete it
        if (current.left === null && current.right === null) {
            // if the node is the root, set the root to null
            if (parent === null) {
                this.root = null;
            } else {
                if (parent.left === current) {
                    parent.left = null;
                } else {
                    parent.right = null;
                }
            }
        }
        // if the node has one child, replace it with the child
        else if (current.left === null || current.right === null) {
            let child = current.left ? current.left : current.right;
            if (parent === null) {
                // if the node is the root, set the root to the child
                this.root = child;
            } else {
                if (parent.left === current) {
                    parent.left = child;
                } else {
                    parent.right = child;
                }
            }
        } else {
            // if the node has two children, replace it with the smallest node in the right subtree
            let successor = current.right;
            let successorParent = current;
            while (successor.left !== null) {
                successorParent = successor;
                successor = successor.left;
            }
            current.value = successor.value;
            // delete the successor
            if (successorParent.left === successor) {
                successorParent.left = successor.right;
            } else {
                successorParent.right = successor.right;
            }
        }
    }

    search(value: T): boolean {
        let current = this.root;
        while (current !== null && current.compareTo(value) !== 0) {
            if (current.compareTo(value) === 1) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return !!current && current.compareTo(value) === 0;
    }

    static preorderTraversal<T extends NodeType<T>>(node: TreeNode<T> | null, result: T[]): void {
        if (node === null) return;
        result.push(node.value);
        this.preorderTraversal(node.left, result);
        this.preorderTraversal(node.right, result);
    }

    static preorderTraversalIterative<T extends NodeType<T>>(root: TreeNode<T> | null): number[] {
        if (!root) {
            return [];
        }
        const result = [];
        const stack = [root];
        while (stack.length) {
            const current = stack.pop()!;
            result.push(current.value);
            if (current.right) {
                stack.push(current.right);
            }
            if (current.left) {
                stack.push(current.left);
            }
        }
        return result;
    }

    static inorderTraversal<T extends NodeType<T>>(node: TreeNode<T> | null, result: T[]): void {
        if (node === null) return;
        this.inorderTraversal(node.left, result);
        result.push(node.value);
        this.inorderTraversal(node.right, result);
    }

    static inorderTraversalIterative<T extends NodeType<T>>(root: TreeNode<T> | null): number[] {
        if (!root) {
            return [];
        }
        const result = [];
        let current = root;
        let parents = [];
        // stack is not empty or current is not null
        while (current || parents.length) {
            // recursively visit the left most child
            while (current) {
                parents.push(current);
                current = current.left;
            }
            // back to the parent node
            current = parents.pop();
            // visit the node
            result.push(current.value);
            // visit the right child
            current = current.right;
        }
        return result;
    };

    static postorderTraversal<T extends NodeType<T>>(node: TreeNode<T> | null, result: T[]): void {
        if (node === null) return;
        this.postorderTraversal(node.left, result);
        this.postorderTraversal(node.right, result);
        result.push(node.value);
    }

    static postorderTraversalIterative<T extends NodeType<T>>(root: TreeNode<T> | null): number[] {
        if (!root) {
            return [];
        }
        const result = [];
        const stack = [root];
        const output = [];

        // preorder traversal from right to left
        while (stack.length) {
            const current = stack.pop()!;
            output.push(current.value);
            if (current.left) {
                stack.push(current.left);
            }
            if (current.right) {
                stack.push(current.right);
            }
        }
        // reverse the output
        while (output.length) {
            result.push(output.pop());
        }
        return result;
    }

    static levelOrderTraversal<T extends NodeType<T>>(node: TreeNode<T> | null, result: T[]): void {
        if (node === null) return;
        const queue = [node];
        while (queue.length > 0) {
            const current = queue.shift()!;
            result.push(current.value);
            if (current.left !== null) {
                queue.push(current.left);
            }
            if (current.right !== null) {
                queue.push(current.right);
            }
        }
    }

    static maxDepth<T extends NodeType<T>>(node: TreeNode<T> | null): number {
        if (node === null) return 0;
        return Math.max(this.maxDepth(node.left), this.maxDepth(node.right)) + 1;
    }

    static maxDepthIterative<T extends NodeType<T>>(root: TreeNode<T> | null): number {
        // BFS: Level Order Traversal
        if (!root) {
            return 0;
        }
        let depth = 0;
        const queue = [root];
        while (queue.length) {
            let size = queue.length;
            // iterate through the current level
            while (size--) {
                const current = queue.shift()!;
                if (current.left) {
                    queue.push(current.left);
                }
                if (current.right) {
                    queue.push(current.right);
                }
            }
            // process current node
            depth++;
        }
        return depth;
    }

    static invertTree<T extends NodeType<T>>(root: TreeNode<T> | null): TreeNode<T> | null {
        if (!root) {
            return null;
        }
        const temp = root.left;
        root.left = Tree.invertTree(root.right);
        root.right = Tree.invertTree(temp);
        return root;
    }

    static invertTreeIterative<T extends NodeType<T>>(root: TreeNode<T> | null): TreeNode<T> | null {
        if (!root) {
            return null;
        }
        const queue = [root];
        while (queue.length) {
            const current = queue.shift()!;

            // process current node
            const temp = current.left;
            current.left = current.right;
            current.right = temp;

            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
        }
        return root;
    }

    static bfsTemplate<T extends NodeType<T>>(root: TreeNode<T> | null): void {
        if (!root) {
            return;
        }
        const queue = [root];
        while (queue.length) {
            const current = queue.shift()!;
            // process current node
            // ...
            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
        }
    }

    static isSymmetric<T extends NodeType<T>>(root: TreeNode<T> | null): boolean {
        if (!root) {
            return true;
        }
        const isMirror = (left: TreeNode<T> | null, right: TreeNode<T> | null): boolean => {
            if (!left && !right) {
                return true;
            }
            if (!left || !right) {
                return false;
            }
            return left.value === right.value && isMirror(left.left, right.right) && isMirror(left.right, right.left);
        }
        return isMirror(root.left, root.right);
    }

    static isSymmetricIterative<T extends NodeType<T>>(root: TreeNode<T> | null): boolean {
        if (!root) {
            return true;
        }
        const queue = [root.left, root.right];
        while (queue.length) {
            const left = queue.shift()!;
            const right = queue.shift()!;
            if (!left && !right) {
                continue;
            }
            if (!left || !right || left.value !== right.value) {
                return false;
            }
            queue.push(left.left, right.right);
            queue.push(left.right, right.left);
        }
        return true;
    }

    static diameterOfBinaryTree<T extends NodeType<T>>(root: TreeNode<T> | null): number {
        let diameter = 0;
        const depth = (node: TreeNode<T> | null): number => {
            if (!node) {
                return 0;
            }
            const left = depth(node.left);
            const right = depth(node.right);
            diameter = Math.max(diameter, left + right);
            return Math.max(left, right) + 1;
        }
        depth(root);
        return diameter;
    }
    static diameterOfBinaryTreeIterative<T extends NodeType<T>>(root: TreeNode<T> | null): number {
        let diameter = 0;
        const stack = [];
        const depth = new Map();
        stack.push(root);
        while (stack.length) {
            const node = stack[stack.length - 1];
            if (node.left && !depth.has(node.left)) {
                // has left and it's not visited yet
                stack.push(node.left);
            } else if (node.right && !depth.has(node.right)) {
                // has right and it's not visited yet
                stack.push(node.right);
            } else {
                // either left/right node is null or both are visited
                const left = depth.get(node.left) || 0;
                const right = depth.get(node.right) || 0;
                diameter = Math.max(diameter, left + right);
                depth.set(node, Math.max(left, right) + 1);
                stack.pop();
            }
        }
        return diameter;
    }

    static sortedArrayToBST<T extends NodeType<T>>(nums: T[]): TreeNode<T> | null {
        const buildTree = (left: number, right: number): TreeNode<T> | null => {
            if (left > right) {
                return null;
            }
            const mid = Math.floor(left + (right - left) / 2);
            const node = new TreeNode(nums[mid]);
            node.left = buildTree(left, mid - 1);
            node.right = buildTree(mid + 1, right);
            return node;
        }
        return buildTree(0, nums.length - 1);
    }

    static sortedArrayToBSTIterative<T extends NodeType<T>>(nums: T[]): TreeNode<T> | null {
        if (!nums.length) {
            return null;
        }
        const stack = [];
        const root = new TreeNode(null);
        stack.push(root);
        const indexStack = [0, nums.length - 1];
        while (stack.length) {
            const node = stack.pop()!;
            const right = indexStack.pop()!;
            const left = indexStack.pop()!;
            const mid = left + Math.floor((right - left) / 2);
            node.value = nums[mid];
            if (left <= mid - 1) {
                node.left = new TreeNode(null);
                stack.push(node.left);
                indexStack.push(left);
                indexStack.push(mid - 1);
            }
            if (mid + 1 <= right) {
                node.right = new TreeNode(null);
                stack.push(node.right);
                indexStack.push(mid + 1);
                indexStack.push(right);
            }
        }
        return root;
    }

    // https://leetcode.cn/problems/kth-smallest-element-in-a-bst
    static kthSmallest<T extends NodeType<T>> (root: TreeNode<T> | null, k: number): T  {
        let count = 0;
        let current = root;
        let stack: TreeNode<T>[] = [];
        // inorderTraverse
        while (current || stack.length) {
            while (current) {
                stack.push(current);
                current = current.left;
            }
            current = stack.pop();
            // core logic
            count++;
            if (count === k) {
                return current.value;
            }

            current = current.right;
        }
        return null;
    };

    // https://leetcode.cn/problems/binary-tree-right-side-view
    static rightSideView<T extends NodeType<T>>(root: TreeNode<T> | null): T[] {
        if (!root) {
            return [];
        }
        const result = [];
        let queue = [root];
        while (queue.length) {
            let size = queue.length;
            while (size--) {
                const current = queue.shift()!;
                if (size === 0) {
                    result.push(current.value);
                }
                if (current.left) {
                    queue.push(current.left);
                }
                if (current.right) {
                    queue.push(current.right);
                }
            }
        }
        return result
    }

    // https://leetcode.cn/problems/flatten-binary-tree-to-linked-list
    static flattenToRightOnlyLinkedList<T extends NodeType<T>>(root: TreeNode<T> | null): void {
        if (!root) {
            return;
        }
        let previous = null;
        let stack = [];
        while (stack.length > 0) {
            const current = stack.pop();
            if (previous !== null) {
                previous.left = null
                previous.right = current
            }
            if (current.right !== null) {
                stack.push(current.right)
            }
            if (current.left !== null) {
                stack.push(current.left)
            }
            previous = current
        }
    }
}

export default Tree;