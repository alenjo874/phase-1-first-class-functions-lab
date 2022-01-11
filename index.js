const returnFirstTwoDrivers = function (arg) {
  return [arg[0], arg[1]];
};

const returnLastTwoDrivers = function (arg) {
  return [arg[arg.length - 2], arg[arg.length - 1]];
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(ride) {
  return function () {
    return ride * 5;
  };
}

const fareDoubler = (createFareMultiplier) => createFareMultiplier * 2;

const fareTripler = (createFareMultiplier) => createFareMultiplier * 3;

function selectDifferentDrivers(
  drivers,
  returnFirstTwoDrivers,
  returnLastTwoDrivers
) {
  return returnFirstTwoDrivers(drivers);
  return returnLastTwoDrivers(drivers);
}
