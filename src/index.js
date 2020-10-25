
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix === undefined) {
                return []
            }
    let newArray = [];
    for (let item of matrix){
      if (matrix.indexOf(item) % 2 == 0) {
          newArray = newArray.concat(item);
      }
      else {
          newArray = newArray.concat(item.reverse());
      }
    }
    return newArray;
  }
