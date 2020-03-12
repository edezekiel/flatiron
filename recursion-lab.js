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

const palindromeChecker = (someString) => {
    const isOdd = !((someString.length % 2 === 0))
  
    const match = (someString.length > 1 && (someString[0] === someString[someString.length - 1]));
  
    if ((isOdd && someString.length === 1) || (!isOdd && match)) {
      return true;
    } else if (match && (someString.length >= 3)) {
      let mySubString = someString.substring(1, someString.length - 1);
      return palindromeChecker(mySubString);
    } else {
      return false;
    }
  }
  
  const runPalindromChecker = (someString) => {
    console.log(`${someString} is a palindrome: ${palindromeChecker(someString)}`);
  }
  
  let string2 = "aaabaaa";
  let string3 = "aaaa";
  let string4 = "abcdeedcba";
  let string5 = "adadfklsjf"
  let string6 = "123321";
  
  runPalindromChecker(string4);
  runPalindromChecker(string2);
  runPalindromChecker(string3);
  runPalindromChecker(string5);
  runPalindromChecker(string6);