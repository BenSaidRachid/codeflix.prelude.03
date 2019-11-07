export default class RobotName {
  constructor() {
    this.arrRobot = [];
    this.name = "";
    this.regenerateName();
  }

  regenerateName() {
      this.name = this.generateRandomAlpha(2) + this.generateRandomDigit(3);
      if(this.arrRobot.indexOf(this.name) > 0){
        this.regenerateName()
      } else {
        this.arrRobot.push(this.name)
      }
  }

  generateRandomAlpha(numberAlpha) {
    let letters = "";
    for(let i = 0; i < numberAlpha; i++) {
      letters += String.fromCharCode(65+Math.floor(Math.random() * 26));
    }
    return letters;
  }

  generateRandomDigit(numberDigit) {
    let digits = "";
    for(let i = 0; i < numberDigit; i++) {
      digits += Math.floor((Math.random() * 10));
    }
    return digits;
  }
}