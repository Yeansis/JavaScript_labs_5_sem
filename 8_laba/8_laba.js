var data = [
    {name:'david',id:1},
    {name:'daniel',id:2}
]

data.forEach(function(item){
    var option = document.createElement('option');
    option.value = item.id;
    option.innerHTML = item.name;
    selector.appendChild(option)
})

selector.onchange = function(){
    alert(this.value);
}