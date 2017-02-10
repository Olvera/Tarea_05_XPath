var formElement=null;
window.onload = function(){
 formElement=document.getElementById('myform');
 formElement.onsubmit=function(){
  var s=formElement.elements[0].value; 
  alert("text: "+s);
  return false; //no envía el formulario, solo mira los valores
 }
}

var e=null;
var formElement=null;
window.onload = function(){
 e=document.getElementById("mySel");
 e.onchange=function(){
  message();
  return false;
 }
 formElement=document.getElementById('myform'); 
 formElement.onsubmit=function(){
  message();
  return false;
 } 
}
function message(){
 var value = e.options[e.selectedIndex].value;
 var text = e.options[e.selectedIndex].text; 
 alert("value: "+value+" text: "+text);
}

var f=null;
window.onload = function(){
 f=document.getElementById('myform');
 f.onsubmit=function(){
 var text="Seleccted: ";
  if (f.mySel[0].selected) text+=" "+f.mySel[0].value;
  if (f.mySel[1].selected) text+=" "+f.mySel[1].value;
  if (f.mySel[2].selected) text+=" "+f.mySel[2].value;
  alert(text);
  return false;
 }
}

var f=null;
window.onload = function(){
 f=document.getElementById('myform');
 f.onsubmit=function(){
  var text="Colors: ";
  if (f.r.checked) text+=" "+f.r.value;
  if (f.g.checked) text+=" "+f.g.value;
  if (f.b.checked) text+=" "+f.b.value;
  alert(text);
  return false;
 }
}

var f=null;
window.onload = function(){
 f=document.getElementById('myform');
 f.onsubmit=function(){
  var text="Colors: ";
  if ((f.color[0].checked) || (f.color[1].checked) || (f.color[2].checked)) {
   text+=" "+f.color.value;
  } else{
   text="No color selected";
  }
  alert(text);
  return false; 
 }
}

