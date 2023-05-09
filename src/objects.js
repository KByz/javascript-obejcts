// volumeOfContainer({ width: 2, length: 5, height: 1}) // 10
// // need to pass an object in a function
// function total(obj) {
//     return obj.height * obj.width * obj.depth
// }
// console.log(total({ height: 2, width: 5, depth: 1 }))


// ConvertArray({a: 1, b: 2, c: 3}) -> [["a",1], ["b",2], ["c",3]]
// steps: 1) take object entries, 2) push to an array
    
//3) Numbers&Letters("Hello World 2023") -> printing an object defining
//how many letters and how many numbers
//Step 1) treat string as an array
// Step 2) loop through the array
// Step 3) check if each element is a number or a letter
// Step 4) if it is a number, add to the number count
// Step 5) if it is a letter, add to the letter count
// Step 6) return an object with the number and letter count

function numbersAndLetters(str) {
    let letters = [];
    let numbers = [];

    const filterStr = str.split('').filter(item => item != ' ')
    console.log(filterStr)

    for (let i = 0; i < filterStr.length; i++) {
        if (isNaN(filterStr[i])) {
            letters.push(filterStr[i])
        } else {
            numbers.push(filterStr[i])
        
        }
    }
    let finalCount = {
        letters: letters.length,
        numbers: numbers.length,
    
    }

    return finalCount }

    console.log(numbersAndLetters("Hello World 2023"))