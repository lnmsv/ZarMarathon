const firstRow = 'mama mila ramu';
const secondRow = 'sobakaaaaaaaaa drug 4eloveka';

function getRow(firstRow, secondRow) {
  let firstResult = countedChar(firstRow, 'a');
  let secondResult = countedChar(secondRow, 'a');
  
  return firstResult > secondResult ? firstRow : secondRow;
}

function countedChar(row, char) {
  let counted = 0;
  
  for (let i = 0; i < row.length; i++) {
      if (row.charAt(i) === char) {
          counted++;
      }
  }
  return counted;
}
console.log(getRow(firstRow, secondRow));
  
