// простое изменения пользователем исходных значений
let arr_1 = [2020, 9, 28]
console.log( first_day_week(arr_1) )
let arr_2 = [2020, 3.14, 28]
console.log( first_day_week(arr_2) )
let arr_3 = [2020, 9, "двадцать восемь"]
console.log( first_day_week(arr_3) )


function first_day_week(arr) {
    // проверка исходных данных на корректное значение
    for(let i of arr) {
        if(!(i % 1 === 0)) {
            return 'Некорректные данные'
        }
    }

    // создание объекта Date
    let now = new Date(arr[0], arr[1], arr[2]);

    //запись преобразованных данных в объект
    now.setDate( now.getDate() - now.getDay() + 1);

    // возврат полученной даты
    return now.toLocaleDateString();
}
