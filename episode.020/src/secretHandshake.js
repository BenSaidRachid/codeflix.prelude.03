export default function secretHandshake(number) {
  const binary = convertIntToBinary(number);
    switch(binary) {
      case 1:
        return "wink";
      case 10:
        return "double blink";
      case 10:
        return "close your eyes";
      case 1000:
        return "jump";
    }
}

function convertIntToBinary(number) {
  return (number >>> 0).toString(2);
}