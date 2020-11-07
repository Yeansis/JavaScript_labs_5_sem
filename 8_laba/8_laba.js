// 8. Напишите программу для подсчета и отображения элементов раскрывающегося списка

window.addEventListener("DOMContentLoaded", function() {

    // находится нужный блок
    let select = document.querySelector(".multiselect");

    // ставится обработчик клика
    select.addEventListener("click", function(event) {

        //вывод результата в консоль
        alert(document.getElementById("mounth").length);
        console.log(document.getElementById("mounth").length);
    });
});