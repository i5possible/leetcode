export interface Comparable<T> {
    compareTo(other: T): number;
}

class TreeNode<T> implements Comparable<T> {
    value: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    compareTo(other: T): number {
        if (this.value > other) return 1;
        if (this.value < other) return -1;
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

class Tree<T> {
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
        return current && current.compareTo(value) === 0;
    }

    static preorderTraversal<T>(node: TreeNode<T> | null, result: T[]): void {
        if (node === null) return;
        result.push(node.value);
        this.preorderTraversal(node.left, result);
        this.preorderTraversal(node.right, result);
    }

    static inorderTraversal<T>(node: TreeNode<T> | null, result: T[]): void {
        if (node === null) return;
        this.inorderTraversal(node.left, result);
        result.push(node.value);
        this.inorderTraversal(node.right, result);
    }

    static postorderTraversal<T>(node: TreeNode<T> | null, result: T[]): void {
        if (node === null) return;
        this.postorderTraversal(node.left, result);
        this.postorderTraversal(node.right, result);
        result.push(node.value);
    }

    static levelOrderTraversal<T>(node: TreeNode<T> | null, result: T[]): void {
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
}

export default Tree;