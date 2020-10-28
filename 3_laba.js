Date.prototype.getNextWeekDay = function() {
    let inception = this;
    inception.setDate( this.getDate() - this.getDay() + 1 );
    return inception;
}


let now = new Date();
let nextMonday = now.getNextWeekDay();
console.log('Next Monday : ' + nextMonday);