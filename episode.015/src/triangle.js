export default function triangle(first, second, third) {
  if(!checkSide(first) || !checkSide(second) 
  || !checkSide(third) || !checkDegenerate(first, second, third))
    throw `${first}, ${second}, ${third} is not a triangle`;
  return checkTriangleType(first, second, third)
}

function checkSide(side) {
  return side > 0;
}

function checkDegenerate(first, second, third) {
  if(first + second > third && first + third > third && second + third > first) return true;
  return false;
}

function checkTriangleType(first, second, third) {
  if(first === second && first === third) return "equilateral";
  else if(first === second || first === third || second === third) return "isosceles";
  else return "scalene";
}