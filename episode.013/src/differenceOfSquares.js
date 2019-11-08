export default function differenceOfSquares(nbr = 0) {
  return squareOfTheSum(nbr) - sumOfTheSquare(nbr);
}

function squareOfTheSum(nbr = 0) {
  let sum = 0;
  for(let i = 1; i < nbr + 1; i++) {
    sum += i;
  }
  return sum * sum;
}

function sumOfTheSquare(nbr = 0) {
  let sum = 0;
  for(let i = 1; i < nbr + 1; i++) {
    sum += i * i;
  }
  return sum;
}