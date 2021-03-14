const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(/* date */) {
 // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  
    if (typeof date == "undefined") {
    return "Unable to determine the time of year!";
  }
  let res = "";
  let r1 = {
    0: 31,
    1: 28,
    2: 31,
    3: 30,
    4: 31,
    5: 30,
    6: 31,
    7: 31,
    8: 30,
    9: 31,
    10: 30,
    11: 31,
  };

  let r2 = {
    0: 311,
    1: 29,
    2: 31,
    3: 30,
    4: 31,
    5: 30,
    6: 31,
    7: 31,
    8: 30,
    9: 31,
    10: 30,
    11: 31,
  };

  let season = {
    0: "winter",
    1: "winter",
    2: "spring",
    3: "spring",
    4: "spring",
    5: "summer",
    6: "summer",
    7: "summer",
    8: "fall",
    9: "fall",
    10: "fall",
    11: "winter",
  };

  try {
    let mth = date.getMonth() - 1;
    let year = date.getFullYear();
    let day = date.getDate();

    let isLeap =
      year % 4 == 0 && (year % 100 != 0 || year % 400 == 0) ? true : false;

    let f;
    if (isLeap) {
      f = r2;
    } else {
      f = r1;
    }

    if (day > f[mth]) {
      mth += 1;
    }
    return season[mth];
  } catch (e) {
    return "Error";
  }
};
