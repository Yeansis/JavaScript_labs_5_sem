/* логическое отрицание выполнено при использовании только побитового оператора
   проверка корректности вводимых данных произведена при использовании допустимых для этого операторов и конструкций */

function func(){
    try{
        let val = Number(document.getElementById("value").value);
        if( val > 2147483647 || val < -2147483648 ) throw new SyntaxError("Неверный формат!");
        else if( !((val ^ 0) === val) ) throw new SyntaxError("Введите целое число!");
        else{
            document.getElementById("text_spec_value_10").innerHTML = "Заданное число в 2 виде:";
            document.getElementById("spec_value_10").innerHTML = val;
            document.getElementById("text_spec_value_2").innerHTML = "Заданное число в 2 виде:";
            document.getElementById("spec_value_2").innerHTML = (val>>>0).toString(2);
            //логическое отрицание
            val = ~val;
            document.getElementById("text").innerHTML = "Вычислена инверсия заданного числа:";
            document.getElementById("text_res_value_10").innerHTML = "Результат в 10 виде:";
            document.getElementById("res_value_10").innerHTML = val;
            document.getElementById("text_res_value_2").innerHTML = "Результат в 2 виде:";
            document.getElementById("res_value_2").innerHTML = (val>>>0).toString(2);
        }
    }
    catch(ex){
        document.getElementById("text_spec_value_10").innerHTML = "";
        document.getElementById("spec_value_10").innerHTML = "";
        document.getElementById("text_spec_value_2").innerHTML = "";
        document.getElementById("spec_value_2").innerHTML = "";
        document.getElementById("text").innerHTML = "";
        document.getElementById("text_res_value_10").innerHTML = "";
        document.getElementById("res_value_10").innerHTML = "";
        document.getElementById("text_res_value_2").innerHTML = "";
        document.getElementById("res_value_2").innerHTML = "";
        alert( ex.message )
    }
    finally {
        document.getElementById('value').value = "";
    }
}
