export default function strToMatrix(str = "") {
    return { 
      "columns" : columnMatrix(str),
      "rows" :rowMatrix(str) 
    }
}

function rowMatrix(str = "") {
    let rowArray = str.split("\n");
    let matrix = [];
    for(let row of rowArray) {
      const rowElement = row.split(/\s/g);
      const digits = rowElement.map(Number);
      matrix.push(digits)
    }
    return matrix;
}

function columnMatrix(str = "") {
    let rowArray = rowMatrix(str);
    let matrix = initArray(rowArray);
    for(let i = 0; i < rowArray.length; i++) {
      for(let j = 0; j < rowArray[i].length; j++) {
        matrix[j].push(rowArray[i][j]);
      }
    }       
    return matrix;
}

function initArray(arr) {
    let initArray = [arr.length];
    for(let i = 0; i < arr.length; i++) {
      initArray[i] = [];
    }
    return initArray;
}