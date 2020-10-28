// простое изменения пользователем исходных значений
let test_var = [10 ** 4, 10 ** 8, 10 ** 12,
  10 ** 16, 3.141592653589793238462643, 'Я люблю ТПУ'];

/* вывод результатов в консоль. тест для тысяч, миллионов,
миллиарда и триллионов. количество цифр в целых числах и
другие переменные выбраны неспроста - для более точного
теста написанного кода */
console.log( converting_numbers(test_var[0]), '\n');
console.log( converting_numbers(test_var[1]), '\n');
console.log( converting_numbers(test_var[2]), '\n');
console.log( converting_numbers(test_var[3]), '\n');
console.log( converting_numbers(test_var[4]), '\n');
console.log( converting_numbers(test_var[5]), '\n');


function converting_numbers(numb) {

  // побитовое "или" некорректно работает с числами в 10 степени и более
  /* console.log( numb );
  let f = (numb ^ 0);
  if ( f === numb ) console.log("ssss");
  else return 'Исходные данные не корректны' */

  // проверка исходных данных на корректное значение
  if (numb % 1 !== 0) return 'Исходные данные не корректны';
  else if (typeof(numb) == 'number') console.log("Целое число! Сейчас все поправим...");
  else return 'Исходные данные не корректны';

  // преобразуем полученный объект в строку
  let str_numb = String(numb);

  /* преобразование строки в массив таким образом, что каждый
  символ строки становится отдельным элементом этого массива */
  str_numb = str_numb.split('');

  /* создание возращаемого массива ret_arr,
  переменной numb_len, содержащей длину массива str_numb,
  и остатка от деления переменной numb_len на 3 */
  let ret_arr = [];
  let numb_len = str_numb.length;
  let rem = numb_len % 3;

  // добавление в ret_arr первые 1-3 цифры полученного числа
  if (rem === 0) rem = 3;
  for (let i = 0; i < rem; i++) {
      ret_arr.push(str_numb[i]);
  }

  /* добавление в ret_arr остальных групп чисел по 3, чередуя
  их с запятой */
  let counter = rem;
  for (let i = 0; i<( (numb_len - rem) / 3); i++) {
      ret_arr.push(',');
    for (let i = counter; i < counter + 3; i++) {
        ret_arr.push(str_numb[i]);
    }
    counter += 3;
  }

  // преобразование полученного массива в строку и ее возврат
  return ret_arr.join('');
}