const character = "#";
const count = 5;
const rows = [];

function padRow(rowNumber, rowCount) {
  return (
    " ".repeat(rowCount - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    " ".repeat(rowCount - rowNumber)
  );
}

let done = 0;

while (done !== count) {
  done++;
  rows.push(padRow(done, count));
}

let result = "";

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);
