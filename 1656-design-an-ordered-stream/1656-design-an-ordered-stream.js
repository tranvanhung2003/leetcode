/**
 * @param {number} n
 */
var OrderedStream = function (n) {
  this.arr = new Array(n);
  this.ptr = 1;
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
  this.arr[idKey] = value;

  if (this.arr[this.ptr] === undefined) {
    return [];
  }

  const mang = [];

  while (this.arr[this.ptr] !== undefined) {
    mang.push(this.arr[this.ptr]);
    ++this.ptr;
  }

  return mang;
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
