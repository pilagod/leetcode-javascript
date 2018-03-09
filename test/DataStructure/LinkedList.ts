import { expect } from 'chai'
import LinkedList from '../../src/DataStructure/LinkedList'
import { NumberNode } from '../../src/DataStructure/LinkedListNodes'

describe('LinkedList', () => {
  it('should be [] given no node is inserted', () => {
    const list = new LinkedList(NumberNode)

    expect(list.toArray()).to.deep.equal([])
  })

  it('should be [1] given value 1 is inserted', () => {
    const list = new LinkedList(NumberNode)

    list.insert(1)

    expect(list.toArray()).to.deep.equal([1])
  })

  it('should be [1, 3, 2] given value 1, 3, 2 are inserted in order', () => {
    const list = new LinkedList(NumberNode)

    list.insert(1)
    list.insert(3)
    list.insert(2)

    expect(list.toArray()).to.deep.equal([1, 3, 2])
  })

  it('should not do anything given deleted value is not in list', () => {
    const list = new LinkedList(NumberNode)

    list.insert(1)
    list.delete(0)

    expect(list.toArray()).to.deep.equal([1])
  })

  it('should delete head node properly', () => {
    const list = new LinkedList(NumberNode)

    list.insert(1)
    list.delete(1)

    expect(list.toArray()).to.deep.equal([])
  })

  it('should delete node between nodes properly', () => {
    const list = new LinkedList(NumberNode)

    list.insert(1)
    list.insert(3)
    list.insert(2)

    list.delete(3)

    expect(list.toArray()).to.deep.equal([1, 2])
  })

  it('should delete tail node properly', () => {
    const list = new LinkedList(NumberNode)

    list.insert(1)
    list.insert(2)

    list.delete(2)

    expect(list.toArray()).to.deep.equal([1])
  })
})