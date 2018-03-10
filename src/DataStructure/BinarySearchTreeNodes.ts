import { CompareResult, TreeNode } from './BinarySearchTree'

export class NumberTreeNode implements TreeNode<number> {
  public value: number
  public left: TreeNode<number> | null
  public right: TreeNode<number> | null

  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }

  public compare(other: TreeNode<number>): CompareResult {
    if (this.value === other.value) {
      return CompareResult.EQ
    } else if (this.value < other.value) {
      return CompareResult.LT
    } else {
      return CompareResult.GT
    }
  }
}