/* 9. Напишите функцию для извлечения имен
собственных и унаследованных свойств объекта */
try {
    // создание объектов
    let vss_vintorez = {
        use: 'combat',
        shooting: 'silent',
        caliber: 9,
    };
    let as_val = {
        type: 'assault rifle',
    };

    // прототипное наследование
    as_val.__proto__ = vss_vintorez;

    // вывод полученного результата
    for(let arr of work_with_obj(as_val)){
        console.log(arr[0], ':', arr[1]);
    }
 } catch (ex) {
    console.log(ex.message)
}

function work_with_obj(obj) {

    if (typeof(obj) !== "object") {
        throw new Error("Ошибка!");
    }
    /* создание словаря и запись в него
    извлеченных имен собственных ключей и
    значений унаследованных свойств */
    let key_val_map = new Map();
    for (let i in obj) {
        if ( !obj.hasOwnProperty(i) ) {
            key_val_map.set(i, obj[i]);
        }
    }

    // возврат полученного словаря
    return key_val_map;
}
