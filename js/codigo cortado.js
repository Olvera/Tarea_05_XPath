 formElement=document.getElementById("q001").innerHTML = xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;

 formElement.onsubmit=function(){
  var s=formElement.elements[0].value; 
  alert("text: "+s);
  return false; //no envía el formulario, solo mira los valores
 }

  
//Formulari per triar una opció de tres (select), onsubmit o onchange mostrar el valor de l'opció seleccionada:

var select=null;
var formElement=null;
 formElement=document.getElementById("q002").innerHTML = xmlDoc.getElementsByTagName("title")[1].childNodes[0].nodeValue;
 //RECUERDA document se refiere al documento HTML, xmlDOC es el documento leido XML.
 var select = document.getElementsByTagName("select")[1];
 var nopciones = xmlDoc.getElementsByTagName("option").length; //cuantas opciones hay en el XML
  //Bucle para rellenar todas las opciones de select
 for (i = 0; i < nopciones; i++) { 
    var option = document.createElement("option");
    option.text = xmlDoc.getElementsByTagName("option")[i].childNodes[0].nodeValue;
    option.value=i+1;
    select.options.add(option);
 } 
 
 /*e.onchange=function(){
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



function message(){
 var value = e.options[e.selectedIndex].value;
 var text = e.options[e.selectedIndex].text; 
 alert("value: "+value+" text: "+text);
}
*/

//Formulari per triar més d'una opció de tres (select multiple), onsubmit o onchange mostrar el valor de l'opció seleccionada:

var formElement=null;
var select=null;
 formElement=document.getElementById('q003').innerHTML = xmlDoc.getElementsByTagName("title")[2].childNodes[0].nodeValue;
 
var select = document.getElementsByTagName("select")[2];
 var nopciones = xmlDoc.getElementsByTagName("option").length; //cuantas opciones hay en el XML
 
 //Bucle para rellenar todas las opciones de select
 for (i = 0; i < nopciones; i++) { 
    var option = document.createElement("option");
    option.text = xmlDoc.getElementsByTagName("option")[i].childNodes[0].nodeValue;
    option.value=i+1;
    select.options.add(option);
 } 
 
/* f.onsubmit=function(){
 var text="Seleccted: ";
  if (f.multSel[0].selected) text+=" "+f.multSel[0].value;
  if (f.multSel[1].selected) text+=" "+f.multSel[1].value;
  if (f.multSel[2].selected) text+=" "+f.multSel[2].value;
  alert(text);
  return false;
 }*/


//Formulari per triar més d'una opció de tres (checkbox), onsubmit mostrar les opcions seleccionades:

var formElement=null;
var select=null;
 formElement=document.getElementById('q004').innerHTML = xmlDoc.getElementsByTagName("title")[3].childNodes[0].nodeValue;
 select=document.getElementsByTagName("select")[3];

 var nopciones = xmlDoc.getElementsByTagName("option").length; //cuantas opciones hay en el XML
 //Bucle para rellenar todas las opciones de select
 for (i = 0; i < nopciones; i++) { 
    var option = document.createElement("option");
    option.text = xmlDoc.getElementsByTagName("option")[i].childNodes[0].nodeValue;
    option.value=i+1;
    select.options.add(option);
 } 
 
/* f.onsubmit=function(){
  var text="Colors: ";
  if (f.r.checked) text+=" "+f.r.value;
  if (f.g.checked) text+=" "+f.g.value;
  if (f.b.checked) text+=" "+f.b.value;
  alert(text);
  return false;
 }*/



//Formulari per triar una opció de tres (radio), onsubmit mostrar la opció seleccionada:

var formElement=null;
var select=null;
 formElement=document.getElementById('q005').innerHTML =xmlDoc.getElementsByTagName("title")[4].childNodes[0].nodeValue;
 select=document.getElementsByTagName("select")[4]; 

 var nopciones = xmlDoc.getElementsByTagName("option").length; //cuantas opciones hay en el XML
 //Bucle para rellenar todas las opciones de select
 for (i = 0; i < nopciones; i++) { 
    var option = document.createElement("option");
    option.text = xmlDoc.getElementsByTagName("option")[i].childNodes[0].nodeValue;
    option.value=i+1;
    select.options.add(option);
 } 
 
 /* f.onsubmit=function(){
  var text="Colors: ";
  if ((f.color[0].checked) || (f.color[1].checked) || (f.color[2].checked)) {
   text+=" "+f.color.value;
  } else{
   text="No color selected";
  }
  alert(text);
  return false; 
 }*/

//var formElement=null;
  var select=null;
  var formElement=null;
  formElement=document.getElementById("q006").innerHTML = xmlDoc.getElementsByTagName("title")[5].childNodes[0].nodeValue;  

  formElement.onsubmit=function(){
  var s=formElement.elements[0].value; 
  alert("text: "+s);
  return false; //no envía el formulario, solo mira los valores
 }


var select=null;
var formElement=null;
 e=document.getElementById('q007').innerHTML = xmlDoc.getElementsByTagName("title")[6].childNodes[0].nodeValue;
 select=document.getElementsByTagName("select")[6];

 var nopciones = xmlDoc.getElementsByTagName("option").length; //cuantas opciones hay en el XML
  //Bucle para rellenar todas las opciones de select
 for (i = 0; i < nopciones; i++) { 
    var option = document.createElement("option");
    option.text = xmlDoc.getElementsByTagName("option")[i].childNodes[0].nodeValue;
option.value=i+1;
    select.options.add(option);
 } 
 
 e.onchange=function(){
  message();
  return false;
 }
 formElement=document.getElementById('q007'); 
 formElement.onsubmit=function(){
  message();
  return false;
 } 


var formElement=null;
var select=null;
 formElement=document.getElementById('q008').innerHTML = xmlDoc.getElementsByTagName("title")[7].childNodes[0].nodeValue;
 var select = document.getElementsByTagName("select")[7];

 var nopciones = xmlDoc.getElementsByTagName("option").length; //cuantas opciones hay en el XML
  //Bucle para rellenar todas las opciones de select
 for (i = 0; i < nopciones; i++) { 
    var option = document.createElement("option");
    option.text = xmlDoc.getElementsByTagName("option")[i].childNodes[0].nodeValue;
option.value=i+1;
    select.options.add(option);
 } 
 
/* f.onsubmit=function(){
 var text="Seleccted: ";
  if (f.multSel[0].selected) text+=" "+f.multSel[0].value;
  if (f.multSel[1].selected) text+=" "+f.multSel[1].value;
  if (f.multSel[2].selected) text+=" "+f.multSel[2].value;
  alert(text);
  return false;
 }*/
