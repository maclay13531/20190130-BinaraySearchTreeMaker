$(document).ready(function () {
    // create a binary search tree and its new node(s)
    class NewNode {
        constructor(value) {
            this.value = value;
            this.left = null;
            this.right = null;
        }
    }

    class BinarySearchTree {
        constructor() {
            this.root = null;
        }

        insert(value) {
            const newNode = new NewNode(value);

            if (!this.root) {
                this.root = newNode;
                return this;
            }

            let currentNodeToCheck = this.root;
            while (currentNodeToCheck) {
                if (currentNodeToCheck.value > value) {
                    if (!currentNodeToCheck.left) {
                        currentNodeToCheck.left = newNode;
                        return this;
                    }
                    currentNodeToCheck = currentNodeToCheck.left;
                } else {
                    if (!currentNodeToCheck.right) {
                        currentNodeToCheck.right = newNode;
                        return this;
                    }
                    currentNodeToCheck = currentNodeToCheck.right;
                }
            }
        }
    }

    let userBinarySearchTree = new BinarySearchTree();

    $("#insert-number").click(function () {
        let userInsertedNumber = $("#user-insert-number").val();
        userBinarySearchTree.insert(userInsertedNumber);
    })
});

