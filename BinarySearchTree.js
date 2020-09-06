//a binary tree can only have 2 children nodes
//binary search trees are ordered
//each subtree is less than or equal to the parent node
//each right subtree is greater than the parent node
class Node {
    constructor(data,left=null,right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null
    }
    add(data){
        const node = this.root
        if(node === null){
            this.root = new Node(data)
            return;
        }else{
           const searchTree = function (node) {
               if(data<node.data) {
                   if (node.left === null) {
                       node.left = new Node(data)
                       return
                   } else if (node.left !== null) {
                       return searchTree(node.left)
                   }
               }else if(data>node.data){
                       if(node.right === null){
                           node.right = new Node(data)
                           return
                       }else if(node.right !== null){
                           return searchTree(node.right)
                       }
                   }else{
                       return null // meaning data is equal to node.data then we wont add the node to the tree
                   }
               }
            return searchTree(node)// this is the initial call of the function if the node is not null
           }
        }
        //method to find the minimum of the array, the min node is the node all the way to left
        findMin(){
            let current = this.root;
            while(current.left !== null){
                current = current.left
            }
            return current.data
        }
        //the max value is in all the way to right
        findMax(){
            let current = this.root
            while(current.right !== null){
                current = current.right
            }
            return current.data
        }
        find(data){
           let current = this.root
            while(current.data !== data){
               if(data < current.data){
                   current = current.left
               } else {
                   current = current.right
               }
               if(current === null){
                   return null
               }
            }
            return current
        }
        isPresent(data){
        let current = this.root
         while(current){
            if(data === current.data){
                return true
            }
            if(data < current.data){
                current =  current.left
            }else{
                current =  current.right
            }
         }
         return false
        }
        remove(data){
        const removeNode = function (node,data) {
            if(node === null){
                return null
            }
            if(data === node.data){
                //node has no children
                if(node.left === null && node.right === null){
                    return null
                }
                //node has no left child
                if(node.left === null){
                    return node.right
                }
                //node has no right child
                if(node.right === null){
                    return node.left
                }
                //node has two children
                let tempNode = node.right
                // we will replace the node data with the right childrens leftest node of the parent node
                while(tempNode.left !== null){
                    tempNode = tempNode.left
                }
                node.data = tempNode.data
                node.right = removeNode(node.left,tempNode.data)
                return node
            }else if(data < node.data){
                node.left = removeNode(node.left, data)
                return node
            } else {
                node.right = removeNode(node.right, data)
            }
        }
        this.root = removeNode(this.root,data)
        }
        //height in  tree means distance from the roof node to any given leaf node
        // min height is the distance from the roof node to the first leaf node without two children(can have one children)
        findMinHeight(node=this.root){
           if (node === null){
               return -1
           }
           let left = this.findMinHeight(node.left)
           let right = this.findMinHeight(node.right)

           if(left < right){
               return left + 1
           } else {
               return right + 1
           }
        }
        //max height is the distance from the root node to the bottom
        findMaxHeight(node = this.root){
           if(node === null){
               return -1
           }
           let left =  this.findMaxHeight(node.left)
           let right = this.findMaxHeight(node.right)
            if(left>right){
                return left + 1
            } else {
                return right + 1
            }
        }
       //is balanced the difference between the min height and the max height should be at most one
        isBalanced(){
          return(this.findMinHeight() >= this.findMaxHeight() -1)
        }
        //in order traversal left-parent-right
        inOrder(){
        if(this.root === null){
            return null
        } else {
            let result = new Array()
            function traverseInOrder(node){
                node.left && traverseInOrder(node.left)
                result.push(node.data)
                node.right && traverseInOrder(node.right)
            }
            traverseInOrder(this.root)
            return result
        }
        }
        //preorder traversal parent fist then left right
       preOrder(){
           if(this.root === null){
               return null
           } else {
               let result = new Array()
               function traverseInOrder(node){
                   result.push(node.data)
                   node.left && traverseInOrder(node.left)
                   node.right && traverseInOrder(node.right)
               }
               traverseInOrder(this.root)
               return result
           }
       }
       //post order traversal leafs and children first then parent
        postOrder(){
            if(this.root === null){
                return null
            } else {
                let result = new Array()
                function traverseInOrder(node){
                    node.left && traverseInOrder(node.left)
                    node.right && traverseInOrder(node.right)
                    result.push(node.data)
                }
                traverseInOrder(this.root)
                return result
            }
        }
       //level order the nodes on the same level first
       //for this method we are using queues
      levelOrder(){
        let result = []
        let queue = []
        if(this.root !== null){
            queue.push(this.root)
            while(queue.length > 0){
                let node = queue.shift()
                result.push(node.data)
                if(node.left !== null){
                    queue.push(node.left)
                }
                if(node.right !== null){
                    queue.push(node.right)
                }
            }
            return result
        }  else {
            return null
        }
      }
}

const bst = new BST()
bst.add(4)
bst.add(3)
bst.add(6)
bst.add(5)
bst.add(7)
bst.add(8)
bst.add(9)
console.log(bst.findMinHeight())
console.log(bst.inOrder())
