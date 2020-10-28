let a1 = [0, 'Hello', 2, 3, 4, "5"];
let a2 = [0, 1, 2, "3", 4, 'world', 6, 7];
for (let i = 0; i < a2.length + 2; i++) {
    let answer = fold_el_arr(a1, a2, i)
    console.log( i+1, 'элемент', '\n', answer );
}



function fold_el_arr(a, b, n) {

    /* вычисление длин полученных массивов во избежании
    повторного вычисления */
    let a_len = a.length;
    let b_len = b.length;

    /* проверка корректности полученного индекса в случае,
    если индекса нет ни в одном массиве */
    if ( n + 1 > a_len && (a_len === b_len || n + 1 > b_len) ) {
        return "Заданного индекса нет ни в одном массиве!";
    }

    /* проверка корректности полученного индекса в случае,
    если индекс есть в одном из массивов */
    if (a_len !== b_len) {
        if (a_len > b_len) {
            return "Массивы разной размерности. " +
                "Заданного индекса нет во 2 массиве!";
        }
        else {
            return "Массивы разной размерности. " +
                "Заданного индекса нет в 1 массиве!";
        }
    }
    return a[n] + b[n];
}