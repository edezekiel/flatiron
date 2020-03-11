function stringIncludes(word, letter) {
    let matches;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            matches = true
        }
    }
    return !!matches;
}

//console.log(stringIncludes("hello", "e"));

function binarySearch(list, letter) {
    let startIndex = 0;
    let endIndex = (list.length) - 1;

    while (startIndex <= endIndex) {
        let midValue = Math.floor((startIndex + endIndex)/2);


        if (list[midValue] === letter) {
            //console.log(list[midValue] === letter);

            return true;
        } else if (list[midValue] < letter) {
            startIndex = midValue + 1;
        } else {
            endIndex = midValue - 1;
        }
    }

    return false;
}

let sortedString = "itwasthebestoftimesitwastheworseoftimes".split('').sort().join('');

function runBinarySearch(list, letter) {
    if (binarySearch(list, letter)) {
        console.log("Letter has been found");
    } else {
        console.log("Item not found");
    }
}

runBinarySearch(sortedString, "r");