import { expect } from 'chai'
import { NumberTreeNode } from '../../src/DataStructure/BinarySearchTreeNodes'
import BinarySearchTree from '../../src/DataStructure/BinarySearchTree'

describe('BinarySearchTree', () => {
  it('should insert new node to root given tree is empty', () => {
    const bst = new BinarySearchTree(NumberTreeNode)

    const result = bst.insert(1)

    expect(result).to.be.true
    expect(bst.toArray()).to.deep.equal([1])
  })

  it('should not insert node that has value already in tree', () => {
    const bst = new BinarySearchTree(NumberTreeNode)

    bst.insert(1)

    expect(bst.insert(1)).to.be.false
    expect(bst.toArray()).to.deep.equal([1])
  })

  it('should insert new node to left of root given its value is lower than root\'s', () => {
    const bst = new BinarySearchTree(NumberTreeNode)

    bst.insert(2) // this is root
    bst.insert(1)

    expect(bst.toArray()).to.deep.equal([1, 2])
  })

  it('should insert new node to right of root given its value is greater than root\'s', () => {
    const bst = new BinarySearchTree(NumberTreeNode)

    bst.insert(2) // this is root
    bst.insert(3)

    expect(bst.toArray()).to.deep.equal([2, 3])
  })

  it('should delete root node that has no children properly', () => {
    const bst = new BinarySearchTree(NumberTreeNode)

    bst.insert(1)

    const result = bst.delete(1)

    expect(result).to.be.true
    expect(bst.toArray()).to.deep.equal([])
  })

  it('should delete root node that has only one child properly', () => {
    const bst = new BinarySearchTree(NumberTreeNode)

    bst.insert(1)
    bst.insert(2)

    const result = bst.delete(1)

    expect(result).to.be.true
    expect(bst.toArray()).to.deep.equal([2])
  })

  it('should delete root node that has two children properly', () => {
    const bst = new BinarySearchTree(NumberTreeNode)

    bst.insert(2)
    bst.insert(1)
    bst.insert(3)

    const result = bst.delete(2)

    expect(result).to.be.true
    expect(bst.toArray()).to.deep.equal([1, 3])
  })

  it('should delete tree node that has no children properly', () => {
    const bst = new BinarySearchTree(NumberTreeNode)

    bst.insert(2)
    bst.insert(1)
    bst.insert(3)

    expect(bst.delete(1)).to.be.true
    expect(bst.toArray()).to.deep.equal([2, 3])

    expect(bst.delete(3)).to.be.true
    expect(bst.toArray()).to.deep.equal([2])
  })

  it('should delete tree node that has only one child properly', () => {
    const bst = new BinarySearchTree(NumberTreeNode)

    bst.insert(2)
    // 1 has left node 0
    bst.insert(1)
    bst.insert(0)
    // 3 has right node 4
    bst.insert(3)
    bst.insert(4)

    expect(bst.delete(1)).to.be.true
    expect(bst.toArray()).to.deep.equal([0, 2, 3, 4])

    expect(bst.delete(3)).to.be.true
    expect(bst.toArray()).to.deep.equal([0, 2, 4])
  })

  it('should delete tree node that has two children properly', () => {
    const bst = new BinarySearchTree(NumberTreeNode)

    bst.insert(4)
    // 2 has two children nodes 1 and 3
    bst.insert(2)
    bst.insert(1)
    bst.insert(3)

    expect(bst.delete(2)).to.be.true
    expect(bst.toArray()).to.deep.equal([1, 3, 4])
  })
})