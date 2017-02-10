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
}
  
xhttp.open("GET", "XML_DTD/questions.xml", true);
xhttp.send();
}


function gestionarXml(contXml){

 var xmlDoc = contXml.responseXML;

 formElement=document.getElementById("q001").innerHTML = xmlDoc.getElementsByTagName("title")[0].innerHTML;
 select= document.getElementById("in_1");
 var inpt = document.createElement("input");
    inpt.type = xmlDoc.getElementsByTagName("type")[0].innerHTML;
    select.appendChild(inpt);

 formElement.onsubmit=function(){
  var s=formElement.elements[0].value; 
  alert("text: "+s);
  return false; //no envía el formulario, solo mira los valores
 }


 formElement=document.getElementById("q002").innerHTML = xmlDoc.getElementsByTagName("title")[1].innerHTML;
 //RECUERDA document se refiere al documento HTML, xmlDOC es el documento leido XML.
 select = document.getElementById("in_2");
 var nopciones = xmlDoc.getElementById("q002").getElementsByTagName("option").length; //cuantas opciones hay en el XML
  //Bucle para rellenar todas las opciones de select
 for (i = 0; i < nopciones; i++) { 
    var option = document.createElement("option");
    option.text = xmlDoc.getElementById("q002").getElementsByTagName("option")[i].innerHTML;
    option.value=i+1;
    select.appendChild(option);
 } 

 formElement=document.getElementById("q003").innerHTML = xmlDoc.getElementsByTagName("title")[2].innerHTML;
 //RECUERDA document se refiere al documento HTML, xmlDOC es el documento leido XML.
 select = document.getElementById("in_3");
 var nopciones = xmlDoc.getElementById("q003").getElementsByTagName("option").length; //cuantas opciones hay en el XML
  //Bucle para rellenar todas las opciones de select
 for (i = 0; i < nopciones; i++) { 
    var option = document.createElement("option");
    option.text = xmlDoc.getElementById("q003").getElementsByTagName("option")[i].innerHTML;
    option.value=i+1;
    select.appendChild(option);
 } 


 formElement=document.getElementById('q004').innerHTML = xmlDoc.getElementsByTagName("title")[3].innerHTML;
 select= document.getElementById("in_4");
 var nopciones = xmlDoc.getElementById("q004").getElementsByTagName("option").length; //cuantas opciones hay en el XML
 //Bucle para rellenar todas las opciones de select
 for (i = 0; i < nopciones; i++) { 
    var inpt = document.createElement("input");
    inpt.type = xmlDoc.getElementsByTagName("type")[3].innerHTML;
    inpt.value=i+1;
    select.appendChild(inpt);
    select.innerHTML += xmlDoc.getElementById("q004").getElementsByTagName("option")[i].innerHTML;
    select.innerHTML+="<br/>";
 } 
 
 formElement=document.getElementById('q005').innerHTML=xmlDoc.getElementsByTagName("title")[4].innerHTML;
 select=document.getElementById("in_5");

 var nopciones = xmlDoc.getElementById("q005").getElementsByTagName("option").length; //cuantas opciones hay en el XML
 //Bucle para rellenar todas las opciones de select
 for (i = 0; i < nopciones; i++) { 
    var inpt = document.createElement("input");
    inpt.type = xmlDoc.getElementsByTagName("type")[4].innerHTML;
    inpt.value=i+1;
    select.appendChild(inpt);
    select.innerHTML += xmlDoc.getElementById("q005").getElementsByTagName("option")[i].innerHTML;
    select.innerHTML+="<br/>";
 } 
 

 formElement=document.getElementById("q006").innerHTML = xmlDoc.getElementsByTagName("title")[5].innerHTML;
 select= document.getElementById("in_6");
 var inpt = document.createElement("input");
    inpt.type = xmlDoc.getElementsByTagName("type")[5].innerHTML;
    select.appendChild(inpt);

 formElement=document.getElementById("q007").innerHTML = xmlDoc.getElementsByTagName("title")[6].innerHTML;
 //RECUERDA document se refiere al documento HTML, xmlDOC es el documento leido XML.
 select = document.getElementById("in_7");
 var nopciones = xmlDoc.getElementById("q007").getElementsByTagName("option").length; //cuantas opciones hay en el XML
  //Bucle para rellenar todas las opciones de select
 for (i = 0; i < nopciones; i++) { 
    var option = document.createElement("option");
    option.text = xmlDoc.getElementById("q007").getElementsByTagName("option")[i].innerHTML;
    option.value=i+1;
    select.appendChild(option);
 } 

 formElement=document.getElementById("q008").innerHTML = xmlDoc.getElementsByTagName("title")[7].innerHTML;
 //RECUERDA document se refiere al documento HTML, xmlDOC es el documento leido XML.
 select = document.getElementById("in_8");
 var nopciones = xmlDoc.getElementById("q008").getElementsByTagName("option").length; //cuantas opciones hay en el XML
  //Bucle para rellenar todas las opciones de select
 for (i = 0; i < nopciones; i++) { 
    var option = document.createElement("option");
    option.text = xmlDoc.getElementById("q008").getElementsByTagName("option")[i].innerHTML;
    option.value=i+1;
    select.appendChild(option);
 } 


 formElement=document.getElementById('q009').innerHTML = xmlDoc.getElementsByTagName("title")[8].innerHTML;
 select= document.getElementById("in_9");
 var nopciones = xmlDoc.getElementById("q009").getElementsByTagName("option").length; //cuantas opciones hay en el XML
 //Bucle para rellenar todas las opciones de select
 for (i = 0; i < nopciones; i++) { 
    var inpt = document.createElement("input");
    inpt.type = xmlDoc.getElementsByTagName("type")[8].innerHTML;
    inpt.value=i+1;
    select.appendChild(inpt);
    select.innerHTML += xmlDoc.getElementById("q009").getElementsByTagName("option")[i].innerHTML;
    select.innerHTML+="<br/>";
 } 
 
 var nopciones = null;
 formElement=document.getElementById('q010').innerHTML=xmlDoc.getElementsByTagName("title")[9].innerHTML;
 nopciones = xmlDoc.getElementById("q010").getElementsByTagName("option").length; //cuantas opciones hay en el XML
 select=document.getElementById("in_10");

 //Bucle para rellenar todas las opciones de select
 for (i = 0; i < nopciones; i++) { 
    var inpt = document.createElement("input");
    inpt.value=i+1;
    inpt.type = xmlDoc.getElementsByTagName("type")[9].innerHTML;
    select.appendChild(inpt);
    select.innerHTML += xmlDoc.getElementById("q010").getElementsByTagName("option")[i].innerHTML;
    select.innerHTML+="\t";
 } 
 
}

//Utilitza codepen.io per provar el codi. Última modificación: lunes, 9 de enero de 2017, 20:44