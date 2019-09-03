var numbers = document.getElementsByClassName("number");
var text = document.getElementById("text");
var sum = document.getElementById("calc");
var del = document.getElementById("delete");
var delAll = document.getElementById("deleteAll");
for(i=0;i<numbers.length;i++){
    numbers[i].onclick = function(){
        text.value += this.value;
    }
}
sum.onclick = function(){
    forma.answer.value = "= " + eval(text.value).toFixed(2);
}
delAll.onclick = function(){
    forma.answer.value = "";
    forma.text.value = "";
}
del.onclick = function(){
   var str = text.value;
    text.value = str.substr(0,str.length-1);
}