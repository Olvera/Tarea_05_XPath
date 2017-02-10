//Formulari amb camp de text, onsubmit fer que surti un missatge amb el que hem escrit:
//Path del XML --> https://cdn.rawgit.com/Olvera/Tarea_04_XML_DTD/17787ed6/XML_DTD/questions.xml

var formElement=null;
var answer=null;
 
//al cargar la página... 
window.onload = function(){
 var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
   gestionarXml(this);
  };
  
xhttp.open("GET", "../XML_DTD/questions.xml", true);
xhttp.send();

function gestionarXml(questions){
 //Rellenamos p title y guardamos el número secreto
 var xmlDoc = questions.responseXML;
 //--document.getElementById("q001").innerHTML = xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
 //--secret=parseInt(xmlDoc.getElementsByTagName("answer")[0].childNodes[0].nodeValue);
 
 //Rellenamos p selecttitle y guardamos la respuesta para corregir
 //--document.getElementById("sel_002").innerHTML = xmlDoc.getElementsByTagName("title")[1].childNodes[0].nodeValue;
 
 //RECUERDA document se refiere al documento HTML, xmlDOC es el documento leido XML.
 //__var select = document.getElementsByTagName("select")[0];
 //__var n_options = xmlDoc.getElementsByTagName("option").length; //cuantas opciones hay en el XML
 
 //Bucle para rellenar todas las opciones de select
 //__for (i = 0; i < n_options; i++) { 
    //__var option = document.createElement("option");
    //__option.text = xmlDoc.getElementsByTagName("option")[i].childNodes[0].nodeValue;
    //__option.value=i+1;
    //__select.options.add(option);
//__ } 
 
 //nos quedamos la respuesta para la corrección.
 //__respuesta=parseInt(xmlDoc.getElementsByTagName("answer")[1].childNodes[0].nodeValue);


///////////////////////////////////////////////////////////////
 formElement=document.getElementById("q001").innerHTML = xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
 formElement.onsubmit=function(){
  var s=formElement.elements[0].value; 
  alert("text: "+s);
  return false; //no envía el formulario, solo mira los valores
 }


 formElement=document.getElementById("q002").innerHTML = xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
 formElement.onsubmit=function(){
  var s=formElement.elements[0].value; 
  alert("text: "+s);
  return false; //no envía el formulario, solo mira los valores
 }


//Formulari per triar una opció de tres (select), onsubmit o onchange mostrar el valor de l'opció seleccionada:

var e=null;
 e=document.getElementById('q002');
 e.onchange=function(){
  message();
  return false;
 }
 formElement=document.getElementById('q002'); 
 formElement.onsubmit=function(){
  message();
  return false;
 } 

function message(){
 var value = e.options[e.selectedIndex].value;
 var text = e.options[e.selectedIndex].text; 
 alert("value: "+value+" text: "+text);
}

var e=null;
 e=document.getElementById('q007');
 e.onchange=function(){
  message();
  return false;
 }
 formElement=document.getElementById('q007'); 
 formElement.onsubmit=function(){
  message();
  return false;
 } 


function message(){
 var value = e.options[e.selectedIndex].value;
 var text = e.options[e.selectedIndex].text; 
 alert("value: "+value+" text: "+text);
}

//Formulari per triar més d'una opció de tres (select multiple), onsubmit o onchange mostrar el valor de l'opció seleccionada:

var f=null;
 f=document.getElementById('q003');
 f.onsubmit=function(){
 var text="Seleccted: ";
  if (f.multSel[0].selected) text+=" "+f.multSel[0].value;
  if (f.multSel[1].selected) text+=" "+f.multSel[1].value;
  if (f.multSel[2].selected) text+=" "+f.multSel[2].value;
  alert(text);
  return false;
 }


var f=null;
 f=document.getElementById('q008');
 f.onsubmit=function(){
 var text="Seleccted: ";
  if (f.multSel[0].selected) text+=" "+f.multSel[0].value;
  if (f.multSel[1].selected) text+=" "+f.multSel[1].value;
  if (f.multSel[2].selected) text+=" "+f.multSel[2].value;
  alert(text);
  return false;
 }


//Formulari per triar més d'una opció de tres (checkbox), onsubmit mostrar les opcions seleccionades:

var f=null;
 f=document.getElementById('q004');
 f.onsubmit=function(){
  var text="Colors: ";
  if (f.r.checked) text+=" "+f.r.value;
  if (f.g.checked) text+=" "+f.g.value;
  if (f.b.checked) text+=" "+f.b.value;
  alert(text);
  return false;
 }


var f=null;
 f=document.getElementById('q009');
 f.onsubmit=function(){
  var text="Colors: ";
  if (f.r.checked) text+=" "+f.r.value;
  if (f.g.checked) text+=" "+f.g.value;
  if (f.b.checked) text+=" "+f.b.value;
  alert(text);
  return false;
 }


//Formulari per triar una opció de tres (radio), onsubmit mostrar la opció seleccionada:

var f=null;
 f=document.getElementById('q005');
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

var f=null;

 f=document.getElementById('q010');
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