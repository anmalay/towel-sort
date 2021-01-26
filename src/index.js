
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  if (matrix.length !== 0) return matrix.map((item, index) => index % 2 === 0 ? item : item.reverse()).flat();
  return matrix;
}
