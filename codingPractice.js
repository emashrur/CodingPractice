// 1) Loop through the array of Strings and if theres a word that has 
//    more than 5 characters return true. Return false if you don't find such word


let array1 = ['iphone', 'ipad', 'icrap', 'ipod'];
let array2 = ['abc', 'def', 'hij'];

function fiveChar (sampleArray) {

    for (let i = 0 ; i < sampleArray.length ; i ++) {
        if (sampleArray[i].length > 5) {
            return true;
        }  
    }

    return false;

}

console.log(fiveChar(array1));

console.log(fiveChar(array2));


// 2) Loop through the array of Strings and return true if you find duplicate word.
//    Return false if you don't find duplicate

const appleProducts1 = ['ipad', 'icrap', 'macbook', 'ipad', 'airpods'];

const appleProducts2 = ['ipad', 'icrap', 'macbook', 'iphone', 'airpods'];

const findDuplicate = (givenArray) => {
    let nonDuplicateIndexes = [];
    let duplicateIndexes = [];
    for (let i = 0 ; i < givenArray.length ; i++) {
        if (!nonDuplicateIndexes.includes(givenArray[i])) {
            nonDuplicateIndexes.push(givenArray[i]);
        }
    }
}



