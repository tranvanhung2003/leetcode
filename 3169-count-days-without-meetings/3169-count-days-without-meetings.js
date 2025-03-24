/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function (days, meetings) {
  const set = new Set();
  meetings.sort((a, b) => a[0] - b[0]);
  let start = meetings[0][0],
    end = meetings[0][1];

  for (let i = 1; i < meetings.length; ++i) {
    let [a, b] = meetings[i];

    if (a > end + 1) {
      days += a - end - 1;
    }

    if (end < b) {
      end = b;
    }
  }

  return days - end + start - 1;
};
