const consoleColors = {
  red: "\x1b[31m",
  green: "\x1b[32m",
  reset: "\x1b[0m"
};

function equals(expected, actual) {
  if (expected === actual) {
    return true;
  } else {
    throw new Error(`expected: ${expected} actual: ${actual}`);
  }
}

function describe(name, testSuite) {
  console.log(`Running suite ${name}`);
  testSuite();
  console.log("...done!");
}

function it(name, testFunction) {
  try {
    testFunction();
    console.log(
      `${consoleColors.green}- it ${name} \u2713 ${consoleColors.reset}`
    );
  } catch (err) {
    console.log(
      `${consoleColors.red}- it ${name} \u2717 ${consoleColors.reset}`
    );
    console.log(`${consoleColors.red}-- ${err.message}${consoleColors.reset}`);
  }
}

module.exports.describe = describe;
module.exports.it = it;
module.exports.equals = equals;
