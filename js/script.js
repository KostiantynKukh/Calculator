var numbers = document.getElementsByClassName("number");
var operands = document.getElementsByClassName("operands");
var text = document.getElementById("text");
var sum = document.getElementById("calc");
var del = document.getElementById("delete");
var delAll = document.getElementById("deleteAll");
var point = document.getElementById("point");
var sw = true;
var a;
for(i=0;i<numbers.length;i++){
    numbers[i].onclick = function(){
        if(sw==false){
            text.value = "";
            sw=true;
            forma.answer.value = "";
        }
        text.value += this.value;        
    }
}
for(i=0;i<operands.length;i++){
    operands[i].onclick = function(){
        if(sw==false){
            text.value = a;
            sw=true;
        }
        text.value += this.value;
    }
}
sum.onclick = function(){
    a = eval(text.value).toFixed(2);     
    for(i=0;i<2;i++){
        if(a.charAt(a.length-1)==0){
                a = a.substr(0, a.length-1);
        }
    }    
    if(a.charAt(a.length-1)=="."){
        a = a.substr(0, a.length-1);
    }
    forma.answer.value = "= " + a;
    sw =false;        
}
delAll.onclick = function(){
    forma.answer.value = "";
    forma.text.value = "";
}
del.onclick = function(){
   var str = text.value;
    text.value = str.substr(0,str.length-1);
} 