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
}

export default Tree;