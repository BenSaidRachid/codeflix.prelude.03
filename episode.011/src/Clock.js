export default class Clock {
  constructor(hour = 0, minute = 0) {
    this.date = new Date();
    this.set(hour, minute);
  }

  set(hour, minute) {
    this.date.setHours(hour);
    this.date.setMinutes(minute);
  }

  addMinutes(minute) {
    this.date.setMinutes(this.date.getMinutes() + minute);
    
    return new Clock(this.date.getHours(), this.date.getMinutes())
  }

  subMinutes(minute) {
    this.date.setMinutes(this.date.getMinutes() - minute);
    return new Clock(this.date.getHours(), this.date.getMinutes())
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

  compareClocks(new_clock = new Date()) {
    return this.getTime() === new_clock.getTime()
  }
}