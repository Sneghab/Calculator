var val=document.getElementById("output-screen");

function display(v){
val.value+=v;
}


function clear(){
val.value="";
}

function calculate(){
val.value=eval(val.value);
}


function del(){
val.value=val.value.substr(0,val.value.length-1);
}