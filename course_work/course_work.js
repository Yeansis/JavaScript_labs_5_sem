function func(){
    try{
        let val = Number(document.getElementById("value").value);
        if(val > 2147483647 || val < -2147483648){
            throw new SyntaxError("Неверный формат!");
        }
        else{
            document.getElementById("text for specified value").innerHTML = "Заданное число в 2 виде:"
            document.getElementById("specified value in 2 form").innerHTML = (val>>>0).toString(2);
            val = ~val
            document.getElementById("text").innerHTML = "Вычислена инверсия заданного числа:"
            document.getElementById("text result in 10 form").innerHTML = "Результат в 10 виде:"
            document.getElementById("result in 10 form").innerHTML = val;
            document.getElementById("text result in 2 form").innerHTML = "Результат в 2 виде:"
            document.getElementById("result in 2 form").innerHTML = val;
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
