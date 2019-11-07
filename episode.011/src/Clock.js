export default class Clock {
    constructor(hour = 0, minute = 0) {
      this.date = new Date();
      this.set(hour, minute);
    }
  
    set(hour, minute) {
      this.date.setHours(hour);
      this.date.setMinutes(minute);
    }
  
    getTime() {
      return this.formatTime(this.date.getHours()) + ":"
      +this.formatTime(this.date.getMinutes());
    }
  
    formatTime(time) {
      if(time < 10) {
        return "0" + time;
      }
      return time;
    }
  }
  