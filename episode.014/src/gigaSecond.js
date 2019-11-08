export default function gigaSecond(date = new Date()) {
  console.log(date)
  return date.setSeconds(date.getSeconds() + 1000000000);
}