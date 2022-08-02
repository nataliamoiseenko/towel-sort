
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return matrix
    ? matrix.reduce((acc, cur, i) => {
        return acc.concat((!(i % 2) ? cur : cur.reverse()));
      }, [])
    : [];
}
