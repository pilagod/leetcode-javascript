export interface Node<T> {
  value: T,
  next: Node<T> | null
}

export default class LinkedList<T> {
  private Node: new (value: T) => Node<T>
  private head: Node<T> | null

  constructor(Node: new (value: T) => Node<T>) {
    this.Node = Node
    this.head = null
  }

  public toArray(): T[] {
    const result = []
    let cur = this.head

    while (cur !== null) {
      result.push(cur.value)
      cur = cur.next
    }
    return result
  }

  public insert(value: T) {
    const node = new this.Node(value)
    const tail = this.findTailNode()

    tail === null
      ? this.head = node
      : tail.next = node
  }

  public delete(value: T) {
    if (this.head && this.head.value === value) {
      this.head = this.head.next
    }
    const prev = this.findPrevNodeOf(value)

    if (prev === null) {
      return
    }
    prev.next = prev.next ? prev.next.next : null
  }

  /* private */

  private findTailNode(): Node<T> | null {
    let cur = this.head

    while (cur && cur.next) {
      cur = cur.next
    }
    return cur
  }

  private findPrevNodeOf(value: T): Node<T> | null {
    let cur = this.head

    while (cur && cur.next) {
      if (cur.next.value === value) {
        break
      }
      cur = cur.next
    }
    if (cur === null) {
      return null
    }
    return this.isTail(cur)
      ? (cur.value === value ? cur : null)
      : cur
  }

  private isTail(node: Node<T>): boolean {
    return node.next === null
  }
}