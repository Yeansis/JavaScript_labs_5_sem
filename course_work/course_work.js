function func(){
    try{
        let val = Number(document.getElementById("value").value);
        if(val > 2147483647 || val < -2147483648){
            throw new SyntaxError("Неверный формат!");
        }
        else{
            document.getElementById("text_spec_value_10").innerHTML = "Заданное число в 2 виде:";
            document.getElementById("spec_value_10").innerHTML = val;
            document.getElementById("text_spec_value_2").innerHTML = "Заданное число в 2 виде:";
            document.getElementById("spec_value_2").innerHTML = (val>>>0).toString(2);
            val = ~val;
            document.getElementById("text").innerHTML = "Вычислена инверсия заданного числа:";
            document.getElementById("text_res_value_10").innerHTML = "Результат в 10 виде:";
            document.getElementById("res_value_10").innerHTML = val;
            document.getElementById("text_res_value_2").innerHTML = "Результат в 2 виде:";
            document.getElementById("res_value_2").innerHTML = (val>>>0).toString(2);
        }
    }
    catch(ex){
        alert(ex.message)
        document.getElementById("text for specified value").innerHTML = "";
        document.getElementById("specified value in 2 form").innerHTML = "";
        document.getElementById("text").innerHTML = "";
        document.getElementById("text result in 10 form").innerHTML = "";
        document.getElementById("result in 10 form").innerHTML = "";
        document.getElementById("text result in 2 form").innerHTML = "";
        document.getElementById("result in 2 form").innerHTML = "";
    }
    finally {
        document.getElementById('value').value = "";
    }
}
