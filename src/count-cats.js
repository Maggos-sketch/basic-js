const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let res = 0;
  const cat = "^^";
  for (let row of matrix) {
    for (let symb of row) {
      if (symb == cat) res += 1;
    }
  }
  return res;
};
