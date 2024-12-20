class StudentNode {
    constructor(id, name, score) {
        this.id = id;
        this.name = name;
        this.score = score;
        this.left = null;
        this.right = null;
    }
}

class StudentBST {
    constructor() {
        this.root = null;
    }

    addStudent(id, name, score) {
        const newNode = new StudentNode(id, name, score);
        if (!this.root) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode);
        }
    }

    _insertNode(node, newNode) {
        if (newNode.score < node.score) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }

    searchStudent(score) {
        return this._searchNode(this.root, score);
    }

    _searchNode(node, score) {
        if (!node) return null;
        if (score === node.score) return node;
        if (score < node.score) return this._searchNode(node.left, score);
        return this._searchNode(node.right, score);
    }

    inOrderTraversal(node = this.root, students = []) {
        if (node) {
            this.inOrderTraversal(node.left, students);
            students.push(node);
            this.inOrderTraversal(node.right, students);
        }
        return students;
    }
}

module.exports = new StudentBST();
