year = 2020;
month = 9;
day = 28;
let arr = [year, month, day]
console.log( monday_func(arr) )


function monday_func(arr) {
    Date.prototype.getNextWeekDay = function() {
        let inception = this;
        inception.setDate( this.getDate() - this.getDay() + 1 );
        return inception.toLocaleDateString();
    }

    let now = new Date(arr[0], arr[1], arr[2]);
    return now.getNextWeekDay();
}
