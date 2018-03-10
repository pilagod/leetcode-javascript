export enum CompareResult {
  LT = -1,
  EQ = 0,
  GT = 1
}

interface Comparable<T> {
  compare(other: T): CompareResult
}

export interface TreeNode<T> extends Comparable<TreeNode<T>> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
}

export default class BinarySearchTree<T> {

  private NodeCtr: new (value: T) => TreeNode<T>
  private root: TreeNode<T> | null

  constructor(NodeCtr: new (value: T) => TreeNode<T>) {
    this.NodeCtr = NodeCtr
    this.root = null
  }

  public getRoot(): TreeNode<T> | null {
    return this.root
  }

  public toArray(): T[] {
    const result: T[] = []

    this.inorderTraverse(this.root, (node) => {
      result.push(node.value)
    })
    return result
  }

  public find(value: T): TreeNode<T> | null {
    if (this.root === null) {
      return null
    }
    const node = new this.NodeCtr(value)
    let cur: TreeNode<T> | null = this.root

    while (cur !== null) {
      switch (node.compare(cur)) {
        case CompareResult.LT:
          cur = cur.left
          break
        case CompareResult.EQ:
          return cur
        case CompareResult.GT:
          cur = cur.right
          break
      }
    }
    return null
  }

  public insert(value: T): boolean {
    const node = new this.NodeCtr(value)

    if (this.root === null) {
      this.root = node
      return true
    }
    let cur: TreeNode<T> | null = this.root
    let parent: TreeNode<T> | null = null

    while (cur !== null) {
      parent = cur

      switch (node.compare(cur)) {
        case CompareResult.LT:
          cur = cur.left
          break
        case CompareResult.EQ:
          return false
        case CompareResult.GT:
          cur = cur.right
          break
      }
    }
    if (parent !== null) {
      if (node.compare(parent) === CompareResult.LT) {
        parent.left = node
      } else {
        parent.right = node
      }
      return true
    }
    return false
  }

  public delete(value: T): boolean {
    const node = new this.NodeCtr(value)
    let cur: TreeNode<T> | null = this.root
    let parent: TreeNode<T> | null = null

    while (cur !== null) {
      switch (node.compare(cur)) {
        case CompareResult.LT:
          parent = cur
          cur = cur.left
          break
        case CompareResult.EQ:
          this.deleteNodeFrom(parent, cur)
          return true
        case CompareResult.GT:
          parent = cur
          cur = cur.right
          break
      }
    }
    return false
  }

  /* private */

  private inorderTraverse(
    node: TreeNode<T> | null,
    action: (node: TreeNode<T>) => void
  ): void {
    if (node !== null) {
      if (node.left !== null) {
        this.inorderTraverse(node.left, action)
      }
      action(node)

      if (node.right !== null) {
        this.inorderTraverse(node.right, action)
      }
    }
  }

  private deleteNodeFrom(
    parent: TreeNode<T> | null,
    node: TreeNode<T>
  ) {
    if (node.left === null && node.right === null) {
      this.deleteNoChildrenNode(parent, node)
    } else if (node.left && node.right) {
      this.deleteTwoChildrenNode(node)
    } else {
      this.deleteOnlyOneChildNode(parent, node)
    }
  }

  private deleteNoChildrenNode(
    parent: TreeNode<T> | null,
    node: TreeNode<T>
  ) {
    if (parent === null) {
      this.root = null
    } else if (this.isLeftNode(parent, node)) {
      parent.left = null
    } else {
      parent.right = null
    }
  }

  private isLeftNode(
    parent: TreeNode<T>,
    node: TreeNode<T>
  ): boolean {
    return node.compare(parent) === CompareResult.LT
  }

  private deleteTwoChildrenNode(node: TreeNode<T>) {
    let parent: TreeNode<T> = node
    let cur = <TreeNode<T>>node.left

    while (cur.right !== null) {
      parent = cur
      cur = cur.right
    }
    if (parent === node) {
      parent.left = null
    } else {
      parent.right = cur.left ? cur.left : null
    }
    node.value = cur.value
  }

  private deleteOnlyOneChildNode(
    parent: TreeNode<T> | null,
    node: TreeNode<T>
  ) {
    const validChild = node.left || node.right

    if (parent === null) {
      this.root = validChild
    } else if (this.isLeftNode(parent, node)) {
      parent.left = validChild
    } else {
      parent.right = validChild
    }
  }
}