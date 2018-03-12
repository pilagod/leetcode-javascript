export default class Heap {
  public static heapifyFromTop(nums: number[]): Heap {
    const heap = new Heap(nums)
    heap.buildHeapFromTop()
    return heap
  }
  public static heapifyFromBottom(nums: number[]): Heap {
    const heap = new Heap(nums)
    heap.buildHeapFromBottom()
    return heap
  }
  private heap: number[]

  constructor(nums: number[] = []) {
    this.heap = nums
  }

  /* public */

  public getCurrentHeapAsArray() {
    return this.heap.slice()
  }

  public insert(num: number) {
    this.heap.push(num)
    this.floatUpIfNeeded(this.heap.length - 1)
  }

  public remove() {
    const result = this.heap[0]

    this.heap[0] = this.heap[this.heap.length - 1]
    this.heap.splice(this.heap.length - 1, 1)
    this.floatDownIfNeeded(0)

    return result
  }

  public sort(): number[] {
    const heap = this.clone()
    const result: number[] = []

    let length = heap.getCurrentHeapAsArray().length

    while ((length--) > 0) {
      result.unshift(heap.remove())
    }
    return result
  }

  /* private */

  private buildHeapFromTop() {
    // Sigma (1 -> n) log i = O(nlogn) 
    for (let child = 0; child < this.heap.length; child++) {
      this.floatUpIfNeeded(child)
    }
  }

  private floatUpIfNeeded(child: number) {
    const parent = this.getParentIndex(child)

    if (parent >= 0 && this.heap[parent] < this.heap[child]) {
      this.swap(parent, child)
      this.floatUpIfNeeded(parent)
    }
  }

  private getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2)
  }

  private swap(node1: number, node2: number) {
    [this.heap[node1], this.heap[node2]] =
      [this.heap[node2], this.heap[node1]]
  }

  private buildHeapFromBottom() {
    // H(i) = 2H(i-1) + i = 2^(i + 1) - (i + 2) = O(n), n = 2^(i + 1) - 1
    let parent = Math.floor(this.heap.length / 2) - 1

    for (; parent >= 0; parent--) {
      this.floatDownIfNeeded(parent)
    }
  }

  private floatDownIfNeeded(parent: number) {
    const [left, right] = this.getChildrenIndex(parent)

    if (left >= this.heap.length) {
      return
    }
    const maxChild =
      (!this.heap[right] || this.heap[left] > this.heap[right])
        ? left
        : right
    if (this.heap[parent] < this.heap[maxChild]) {
      this.swap(parent, maxChild)
      this.floatDownIfNeeded(maxChild)
    }
  }

  private getChildrenIndex(index: number): [number, number] {
    return [
      index * 2 + 1,
      index * 2 + 2
    ]
  }

  private clone() {
    return new Heap(this.heap.slice())
  }
}