// Start of function levelOrder
this.levelOrder = function(root) {

        // Add your code here
        // To print values separated by spaces use process.stdout.write(someValue + ' ')
        let array = [root];

        while (array.length) {
            let treeNode = array.shift();
            process.stdout.write(treeNode.data + ' ');
            if (treeNode.left) {
                array.push(treeNode.left);
            }
            if (treeNode.right) {
                array.push(treeNode.right);
            }
        }
	}; // End of function levelOrder
