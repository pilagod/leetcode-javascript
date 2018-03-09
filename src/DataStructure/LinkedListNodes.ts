import { Node } from './LinkedList'

export class NumberNode implements Node<number> {
  public value: number
  public next: NumberNode | null

  constructor(number: number) {
    this.value = number
    this.next = null
  }
}