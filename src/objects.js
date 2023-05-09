// volumeOfContainer({ width: 2, length: 5, height: 1}) // 10
// need to pass an object in a function
function total(obj) {
    return obj.height * obj.width * obj.depth
}
console.log(total({ height: 2, width: 5, depth: 1 }))


