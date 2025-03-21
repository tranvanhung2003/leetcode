var countConsistentStrings = function (allowed, words) {
  const set = new Set(allowed.split(""));

  return words.filter((val) => {
    for (let i of val) {
      console.log(i);
      if (!set.has(i)) {
        return false;
      }
    }
    return true;
  }).length;
};