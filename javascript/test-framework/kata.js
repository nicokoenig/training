var numberOfPeopleInTheBus = function(busStops = []) {
  return busStops.reduce((acc, cur) => {
    return acc + cur[0] - cur[1];
  }, 0);
};

module.exports.numberOfPeopleInTheBus = numberOfPeopleInTheBus;
