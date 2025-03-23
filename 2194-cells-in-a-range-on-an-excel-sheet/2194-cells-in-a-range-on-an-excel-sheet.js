/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function (s) {
  const chuoiDau = s.charCodeAt(0),
    chuoiCuoi = s.charCodeAt(3),
    soDau = +s[1],
    soCuoi = +s[4];
  const mangChuoi = [];

  for (let i = chuoiDau; i <= chuoiCuoi; ++i) {
    mangChuoi.push(String.fromCharCode(i));
  }

  const arr = [];

  for (let val of mangChuoi) {
    for (let i = soDau; i <= soCuoi; ++i) {
      arr.push(val + i);
    }
  }

  return arr;
};
