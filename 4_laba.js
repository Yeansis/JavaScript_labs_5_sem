// 6. Напишите функцию, чтобы разрезать строку на куски заданной длины

// возможность изменения пользователем исходных значений
try {
    let imp_data = '123%.4тпу*__*';
    let size = 3;
    console.log( poleax_for_str(imp_data, size) );
} catch (ex) {
    console.log(ex.message, "\n\nПроцедура могла завершиться раньше положенного. " +
        "Рекомендуется исправить ошибку и начать заново");
}


/* ввиду того, что введенные строки не всегда будут
кратны заданной длине - в конце возвращаемого массива
возможен "хвостик" в виде неполного куска */
function poleax_for_str(obj, sz) {

    // проверка входного значения размера
    if ( !(sz % 1 === 0) || sz <= 0 || sz > obj.length) {
        throw new Error("Введен неверный размер!");
    }

    // преобразуем полученный объект в строку
    let str = String(obj);

    /* преобразование строки в массив таким образом, что
    каждый символ строки становится отдельным элементом
    этого массива */
    let pieces_of_str = str.split('');

    /* добавление частей строки заданной длины в
    возвращаемый массив */
    let answer = [];
    let count = 0;
    for (let i = 0; i < pieces_of_str.length / sz; i++) {
        let arr = [];

        /* добавление во временный массив элементов,
        равных по количеству заданной длины */
        for (let i = count; i < count + sz; i++) {
            arr.push(pieces_of_str[i]);
        }

        /* добавление преобразованного временного в
        строку массива в возвращаемый массив */
        answer.push( arr.join('') );
        count += sz;
    }

    // возврат полученного массива частей
    return answer;
}