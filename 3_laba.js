// 22. Напишите функцию, чтобы получить дату начала недели

// возможность изменения пользователем исходных значений
try {
    let arr_1 = [2020, 9, 28];
    console.log( first_day_week(arr_1) );
    let arr_2 = [2020, 9, 25];
    console.log( first_day_week(arr_2) );
    let arr_3 = [2020, 3.14, 28];
    console.log( first_day_week(arr_3) );
    let arr_4 = [2020, 9, "двадцать восемь"];
    console.log( first_day_week(arr_4) );
    let arr_5 = [2020, 9, -6];
    console.log( first_day_week(arr_5) );
} catch (ex) {
    // проверка - если исключение неизвестное, то пропускаем
    console.log(ex.message, "\n\nПроцедура могла завершиться раньше положенного. " +
        "Рекомендуется исправить ошибку и начать заново");
}


function first_day_week(arr) {

    // проверка исходных данных на корректное значение
    for(let i of arr) {
        if(!(i % 1 === 0) || i < 0) {
            throw new Error('Исходные данные не корректны');
        }
    }

    // создание объекта Date
    let now = new Date(arr[0], arr[1], arr[2]);

    let fake_answer = now.toLocaleDateString()

    /* запись преобразованных данных в объект и выделение
    даты в формате дд.мм.гггг */
    now.setDate( now.getDate() - now.getDay() + 1);
    let answer = now.toLocaleDateString()

    /* в случае, если исходная дата является воскресеньем
    то, в связи с особенностями формата хранения даты
    преобразовываем выходную дату до правильного состояния */
    if ( answer > fake_answer ) {
        now.setDate( now.getDate() - now.getDay() - 7 + 1);
        answer = now.toLocaleDateString()
    }

    // возврат полученной даты
    return answer;
}
