var romanToInt = function (s) {
  const mang = [
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ];
  const map = new Map(mang);
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) < map.get(s[i + 1])) {
      result -= map.get(s[i]);
    } else {
      result += map.get(s[i]);
    }
  }

  return result;
};
