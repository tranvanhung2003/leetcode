/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
  seats = seats.sort((a, b) => a - b);
  students = students.sort((a, b) => a - b);

  return seats.reduce((prevVal, currVal, currIdx) => {
    if (currVal !== students[currIdx]) {
      return (prevVal += Math.abs(currVal - students[currIdx]));
    } else {
      return prevVal;
    }
  }, 0);
};
