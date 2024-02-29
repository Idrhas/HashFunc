// import the crypto module
const crypto = require("crypto");

// import readline module and create an interface to request user input
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function hashingInput(inputValue) {
  //Create a SHA-256 hash of the passed input
  const hasher = crypto.createHash("sha256");
  hasher.update(inputValue);
  const hashedValue = hasher.digest("hex");

  return hashedValue;
}

// Prompt the user for their input

function promptUserInput() {
  readlines.question("Enter your any value: ", (inputValue) => {
    if (inputValue == "done") readlines.close();
    else {
      const hashVal = hashingInput(inputValue);
      console.log(`The Hash value for ${inputValue} is:\n\t${hashVal}`);
      promptUserInput();
    }
  });
}

promptUserInput();
