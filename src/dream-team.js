const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(args) {
  //throw new CustomError('Not implemented');
    let isT = 0;
  let dT = "";
  for (let arg of args) {
    if (typeof arg == "string") {
      dT += arg[0];
      isT++;
    }
  }

  dT = dT.split("").sort().join("");
  if (isT == 0) {
    return false;
  } else {
    return dT.toUpperCase();
  }
};
