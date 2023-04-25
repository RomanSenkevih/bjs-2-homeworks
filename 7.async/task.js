class AlarmClock {
  constructor() {
      this.alarmCollection = [];
      this.intervalId = null;
  };

  addClock(time, callback) {
    if (time === null || callback === undefined) {
        throw new Error('Отсутствуют обязательные аргументы');
    } 
    
    if (this.alarmCollection.some((element) => element.time === time)) {
        console.warn('Уже присутствует звонок на это же время');
    } 
    
    this.alarmCollection.push({callback, time, canCall: true});
}

    removeClock(alarmTime) {
      const duplicates = this.alarmCollection.filter((element) => element.time != alarmTime);
         
      if(duplicates.length != 0) {
        this.alarmCollection = duplicates;
        }   
    }

    getCurrentFormattedTime(){
      let now = new Date().toLocaleTimeString().slice(0,-3);
      return now;
    }

    start(){
      let result = this.alarmCollection.intervalId;
      if(result === null){
        return;
      }
        setInterval(() => this.alarmCollection.forEach((element) => {
          if(element.canCall === true && this.getCurrentFormattedTime() === element.time){
            element.canCall = false; 
            element.callback();
            this.intervalId = this;
              }
        }), 1000);
      
    }

    stop(){
      clearInterval(this.intervalId);
      this.intervalId = null;
    }

    resetAllCalls(){
      this.alarmCollection.forEach(element => element.canCall = true);
    }

    clearAlarms(){
      this.stop();
      this.alarmCollection = [];
    }
 };
