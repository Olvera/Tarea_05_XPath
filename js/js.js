var formElement=null;
window.onload = loadXMLDoc(){
 formElement=document.getElementById("q001");
 formElement.onsubmit=function(){
  var s=formElement.elements[0].value; 
  alert("text: "+s);
  return false; //no envía el formulario, solo mira los valores
 }
}

var formElement=null;
window.onload = function(){
 formElement=document.getElementById("q002");
 formElement.onsubmit=function(){
  var s=formElement.elements[0].value; 
  alert("text: "+s);
  return false; //no envía el formulario, solo mira los valores
 }
}

//Formulari per triar una opció de tres (select), onsubmit o onchange mostrar el valor de l'opció seleccionada:

var e=null;
var formElement=null;
window.onload = function(){
 e=document.getElementById('q003');
 e.onchange=function(){
  message();
  return false;
 }
 formElement=document.getElementById('q003'); 
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


//Formulari per triar més d'una opció de tres (select multiple), onsubmit o onchange mostrar el valor de l'opció seleccionada:

var f=null;
window.onload = function(){
 f=document.getElementById('q004');
 f.onsubmit=function(){
 var text="Seleccted: ";
  if (f.multSel[0].selected) text+=" "+f.multSel[0].value;
  if (f.multSel[1].selected) text+=" "+f.multSel[1].value;
  if (f.multSel[2].selected) text+=" "+f.multSel[2].value;
  alert(text);
  return false;
 }
}


//Formulari per triar més d'una opció de tres (checkbox), onsubmit mostrar les opcions seleccionades:

var f=null;
window.onload = function(){
 f=document.getElementById('multCheck');
 f.onsubmit=function(){
  var text="Colors: ";
  if (f.r.checked) text+=" "+f.r.value;
  if (f.g.checked) text+=" "+f.g.value;
  if (f.b.checked) text+=" "+f.b.value;
  alert(text);
  return false;
 }
}

//Formulari per triar una opció de tres (radio), onsubmit mostrar la opció seleccionada:

var f=null;
window.onload = function(){
 f=document.getElementById('oneRadio');
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


//Utilitza codepen.io per provar el codi. Última modificación: lunes, 9 de enero de 2017, 20:44