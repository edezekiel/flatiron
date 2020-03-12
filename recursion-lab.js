let someString = "calzone";

function reverseString(someString) {
  console.log(someString[someString.length - 1]);
  if (someString.length > 1) {
    let mySubString = someString.substring(0, someString.length - 1)

    reverseString(mySubString)
  } else {
    return true;
  }
}

reverseString(someString);