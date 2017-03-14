
var formElement=null;var res_t_1=null;var res_t_2=null;var res_sel_1=null;var res_sel_2=null;var res_chb_1=[];var res_chb_2=[];var res_mul_1=[];var res_mul_2=[];var res_rad_1=null;var res_rad_2=null;var xmlDoc=null;var xslDoc=null;var nota=0.0;window.onload=function()
{formElement=document.getElementById("comp");formElement.onclick=function()
{corrExam();};var xhttp=new XMLHttpRequest();xhttp.onreadystatechange=function()
{if(this.readyState==4&&this.status==200)
{gestionarXml(this);}};xhttp.open("GET","xml/questions.xml",true);xhttp.send();var xhttp2=new XMLHttpRequest();xhttp2.onreadystatechange=function()
{if(this.readyState==4&&this.status==200)
{xslDoc=this.responseXML;}};xhttp2.open("GET","xml/questions.xsl",true);xhttp2.send();};function corrExam()
{if(comprobar())
{corregirText1();corregirSelect1();corregirMulti1();corregirCheckbox1();corregirRadio1();corregirText2();corregirSelect2();corregirMulti2();corregirCheckbox2();corregirRadio2();presentarNota();}}
function gestionarXml(contXml)
{var txt="";xmlDoc=contXml.responseXML;document.getElementById("q001").innerHTML=xmlDoc.getElementsByTagName("title")[0].innerHTML;select=document.getElementById("in_1");var inpt=document.createElement("input");inpt.type=xmlDoc.getElementsByTagName("type")[0].innerHTML;inpt.name="text1";inpt.autocomplete="off";select.appendChild(inpt);res_t_1=xmlDoc.getElementById("q001").getElementsByTagName("answer")[0].innerHTML.toUpperCase();quiz=xmlDoc.querySelector("#q002");idSelect=document.querySelector("#in_2");tituloSelect=xmlDoc.getElementsByTagName("title")[1].innerHTML;var sel=idSelect.getAttribute("id");var q=quiz.getAttribute("id");var xpath="/questions/quiz[@id='q002']/option";var nodes=xmlDoc.evaluate(xpath,xmlDoc,null,XPathResult.ANY_TYPE,null);ponerDatosSelect(q,sel,tituloSelect,nodes);res_sel_1=xmlDoc.getElementById("q002").getElementsByTagName("answer")[0].innerHTML;quiz=xmlDoc.querySelector("#q003");idSelect=document.querySelector("#in_3");idSelect.setAttribute("multiple","true");tituloSelect=xmlDoc.getElementsByTagName("title")[2].innerHTML;var sel=idSelect.getAttribute("id");var q=quiz.getAttribute("id");var xpath="/questions/quiz[@id='q003']/option";var nodes=xmlDoc.evaluate(xpath,xmlDoc,null,XPathResult.ANY_TYPE,null);ponerDatosSelect(q,sel,tituloSelect,nodes);var nres=xmlDoc.getElementById("q003").getElementsByTagName("answer").length;for(i=0;i<nres;i++)
{res_mul_1[i]=xmlDoc.getElementById("q003").getElementsByTagName("answer")[i].innerHTML;}
quiz=xmlDoc.querySelector("#q004");idSelect=document.querySelector("#in_4");tituloSelect=xmlDoc.getElementsByTagName("title")[3].innerHTML;var sel=idSelect.getAttribute("id");var q=quiz.getAttribute("id");var xpath="/questions/quiz[@id='q004']/option";var ty=xmlDoc.getElementsByTagName("type")[3].innerHTML;var nodes=xmlDoc.evaluate(xpath,xmlDoc,null,XPathResult.ANY_TYPE,null);ponerDatosChb_Rad(q,sel,tituloSelect,nodes,ty);nres=xmlDoc.getElementById("q004").getElementsByTagName('answer').length;for(i=0;i<nres;i++)
{res_chb_1[i]=xmlDoc.getElementById("q004").getElementsByTagName("answer")[i].innerHTML;}
quiz=xmlDoc.querySelector("#q005");idSelect=document.querySelector("#in_5");tituloSelect=xmlDoc.getElementsByTagName("title")[4].innerHTML;var sel=idSelect.getAttribute("id");var q=quiz.getAttribute("id");var xpath="/questions/quiz[@id='q005']/option";var ty=xmlDoc.getElementsByTagName("type")[4].innerHTML;var nodes=xmlDoc.evaluate(xpath,xmlDoc,null,XPathResult.ANY_TYPE,null);ponerDatosChb_Rad(q,sel,tituloSelect,nodes,ty);res_rad_1=xmlDoc.getElementById("q005").getElementsByTagName("answer")[0].innerHTML;document.getElementById("q006").innerHTML=xmlDoc.getElementsByTagName("title")[5].innerHTML;select=document.getElementById("in_6");inpt=document.createElement("input");inpt.type=xmlDoc.getElementsByTagName("type")[5].innerHTML;inpt.name="text2";inpt.autocomplete="off";select.appendChild(inpt);res_t_2=xmlDoc.getElementById("q006").getElementsByTagName("answer")[0].innerHTML.toUpperCase();quiz=xmlDoc.querySelector("#q007");idSelect=document.querySelector("#in_7");tituloSelect=xmlDoc.getElementsByTagName("title")[6].innerHTML;var sel=idSelect.getAttribute("id");var q=quiz.getAttribute("id");var xpath="/questions/quiz[@id='q007']/option";var nodes=xmlDoc.evaluate(xpath,xmlDoc,null,XPathResult.ANY_TYPE,null);ponerDatosSelect(q,sel,tituloSelect,nodes);res_sel_2=xmlDoc.getElementById("q007").getElementsByTagName("answer")[0].innerHTML;quiz=xmlDoc.querySelector("#q008");idSelect=document.querySelector("#in_8");idSelect.setAttribute("multiple","true");tituloSelect=xmlDoc.getElementsByTagName("title")[7].innerHTML;nopciones=xmlDoc.getElementById("q008").getElementsByTagName("option").length;var sel=idSelect.getAttribute("id");var q=quiz.getAttribute("id");var xpath="/questions/quiz[@id='q008']/option";var nodes=xmlDoc.evaluate(xpath,xmlDoc,null,XPathResult.ANY_TYPE,null);ponerDatosSelect(q,sel,tituloSelect,nodes);for(i=0;i<nres;i++)
{res_mul_2[i]=xmlDoc.getElementById("q008").getElementsByTagName("answer")[i].innerHTML;}
quiz=xmlDoc.querySelector("#q009");idSelect=document.querySelector("#in_9");tituloSelect=xmlDoc.getElementsByTagName("title")[8].innerHTML;var sel=idSelect.getAttribute("id");var q=quiz.getAttribute("id");var xpath="/questions/quiz[@id='q009']/option";var ty=xmlDoc.getElementsByTagName("type")[8].innerHTML;var nodes=xmlDoc.evaluate(xpath,xmlDoc,null,XPathResult.ANY_TYPE,null);ponerDatosChb_Rad(q,sel,tituloSelect,nodes,ty);nres=xmlDoc.getElementById("q009").getElementsByTagName('answer').length;for(i=0;i<nres;i++)
{res_chb_2[i]=xmlDoc.getElementById("q009").getElementsByTagName("answer")[i].innerHTML;}
quiz=xmlDoc.querySelector("#q010");idSelect=document.querySelector("#in_10");tituloSelect=xmlDoc.getElementsByTagName("title")[9].innerHTML;var sel=idSelect.getAttribute("id");var q=quiz.getAttribute("id");var xpath="/questions/quiz[@id='q010']/option";var ty=xmlDoc.getElementsByTagName("type")[9].innerHTML;var nodes=xmlDoc.evaluate(xpath,xmlDoc,null,XPathResult.ANY_TYPE,null);ponerDatosChb_Rad(q,sel,tituloSelect,nodes,ty);res_rad_2=xmlDoc.getElementById("q010").getElementsByTagName("answer")[0].innerHTML;}
function corregirText1()
{var s=document.getElementById("in_1").getElementsByTagName("input")[0].value;if(s.toUpperCase()==res_t_1.toUpperCase()){nota+=1;}
var useranswer=xmlDoc.createElement("useranswer");useranswer.innerHTML=s.toUpperCase();xmlDoc.getElementById("q001").appendChild(useranswer);}
function corregirText2()
{var s=document.getElementById("in_6").getElementsByTagName("input")[0].value;if(s.toUpperCase()==res_t_2.toUpperCase()){nota+=1;}
var useranswer=xmlDoc.createElement("useranswer");useranswer.innerHTML=s.toUpperCase();xmlDoc.getElementById("q006").appendChild(useranswer);}
function corregirSelect1()
{var sel=document.getElementById("in_2");if(sel.selectedIndex-1==res_sel_1){nota+=1;}
var useranswer=xmlDoc.createElement("useranswer");useranswer.innerHTML=sel.selectedIndex;xmlDoc.getElementById("q002").appendChild(useranswer);}
function corregirSelect2()
{var sel=document.getElementById("in_7");if(sel.selectedIndex-1==res_sel_2){nota+=1;}
var useranswer=xmlDoc.createElement("useranswer");useranswer.innerHTML=sel.selectedIndex;xmlDoc.getElementById("q007").appendChild(useranswer);}
function corregirMulti1()
{var v=[];var opt=document.getElementById("in_3").getElementsByTagName("option");for(i=0;i<opt.length;i++)
{if(opt[i].selected)
{v[i]=false;for(j=0;j<res_mul_1.length;j++)
{if(i==res_mul_1[j]){v[i]=true;}}
var useranswer=xmlDoc.createElement("useranswer");useranswer.innerHTML=i+1;xmlDoc.getElementById("q003").appendChild(useranswer);}}
for(i=0;i<opt.length;i++)
{if(opt[i].selected)
{if(v[i]){nota+=1.0/res_mul_1.length;}
else{nota-=1.0/res_mul_1.length;}}}}
function corregirMulti2()
{var v=[];var opt=document.getElementById("in_8").getElementsByTagName("option");for(i=0;i<opt.length;i++)
{if(opt[i].selected)
{v[i]=false;for(j=0;j<res_mul_2.length;j++)
{if(i==res_mul_2[j]){v[i]=true;}}
var useranswer=xmlDoc.createElement("useranswer");useranswer.innerHTML=i+1;xmlDoc.getElementById("q008").appendChild(useranswer);}}
for(i=0;i<opt.length;i++)
{if(opt[i].selected)
{if(v[i]){nota+=1.0/res_mul_2.length;}
else{nota-=1.0/res_mul_2.length;}}}}
function corregirCheckbox1()
{var v=[];var opt=document.getElementById("in_4").elements["checkbox"];for(i=0;i<opt.length;i++)
{if(opt[i].checked)
{var useranswer=xmlDoc.createElement("useranswer");useranswer.innerHTML=i+1;xmlDoc.getElementById("q004").appendChild(useranswer);v[i]=false;for(j=0;j<res_chb_1.length;j++)
{if(i==res_chb_1[j]){v[i]=true;}}}}
for(i=0;i<opt.length;i++)
{if(opt[i].checked)
{if(v[i]){nota+=1.0/res_chb_1.length;}
else{nota-=1.0/res_chb_1.length;}}}}
function corregirCheckbox2()
{var v=[];var opt=document.getElementById("in_9").elements["checkbox"];for(i=0;i<opt.length;i++)
{if(opt[i].checked)
{var useranswer=xmlDoc.createElement("useranswer");useranswer.innerHTML=i+1;xmlDoc.getElementById("q009").appendChild(useranswer);v[i]=false;for(j=0;j<res_chb_2.length;j++)
{if(i==res_chb_2[j]){v[i]=true;}}}}
for(i=0;i<opt.length;i++)
{if(opt[i].checked)
{if(v[i]){nota+=1.0/res_chb_2.length;}
else{nota-=1.0/res_chb_2.length;}}}}
function corregirRadio1()
{var r=null;var opt=document.getElementById("in_5").elements["radio"];for(i=0;i<opt.length;i++)
{if(opt[i].checked)
{r=i;var useranswer=xmlDoc.createElement("useranswer");useranswer.innerHTML=i+1;xmlDoc.getElementById("q005").appendChild(useranswer);}}
if(r==res_rad_1){nota+=1;}}
function corregirRadio2()
{var r=null;var opt=document.getElementById("in_10").elements["radio"];for(i=0;i<opt.length;i++)
{if(opt[i].checked)
{r=i;var useranswer=xmlDoc.createElement("useranswer");useranswer.innerHTML=i+1;xmlDoc.getElementById("q010").appendChild(useranswer);}}
if(r==res_rad_2){nota+=1;}}
function darRespuestaHtml(r)
{var p=document.createElement("p");p.innerHTML=r;document.body.appendChild(p);}
function presentarNota()
{document.body.innerHTML="";document.body.style.display="block";if(document.implementation&&document.implementation.createDocument)
{xsltProcessor=new XSLTProcessor();xsltProcessor.importStylesheet(xslDoc);resultDocument=xsltProcessor.transformToFragment(xmlDoc,document);document.body.appendChild(resultDocument);}
darRespuestaHtml("<h2><i>Nota: "+nota+" puntos sobre 10</i></h2>");document.getElementById("top").focus();}
function ponerDatosSelect(q,sel,t,nodes)
{document.getElementById(q).innerHTML=t;var select=document.getElementById(sel);var result=nodes.iterateNext();i=0;while(result)
{var option=document.createElement("option");option.text=result.innerHTML;option.value=i;i++;select.add(option);result=nodes.iterateNext();}}
function ponerDatosChb_Rad(q,sel,t,nodes,ty)
{document.getElementById(q).innerHTML=t;var checkboxContainer=document.getElementById(sel);var result=nodes.iterateNext();i=0;while(result)
{var input=document.createElement("input");var label=document.createElement("label");label.innerHTML=result.innerHTML;input.type=ty;input.name=ty;input.value=i;i++;checkboxContainer.appendChild(input);checkboxContainer.appendChild(label);checkboxContainer.appendChild(document.createElement("br"));result=nodes.iterateNext();}}
function comprobar()
{f=document.getElementById("in_1").getElementsByTagName("input")[0].value;checked=false;if(f=="")
{document.getElementById("in_1").elements[0].focus();alert("Introduce una respuesta: Pregunta 1");return false;}
f=document.getElementById("in_2");checked=false;if(f.selectedIndex==0)
{document.getElementById("in_2").focus();alert("Selecciona una opción: Pregunta 2");return false;}
f=document.getElementById("in_3").getElementsByTagName("option");checked=false;for(i=0;i<f.length;i++)
{if(f[i].selected)checked=true;}
if(!checked)
{document.getElementById("in_3").focus();alert("Selecciona alguna/s opción/es: Pregunta 3");return false;}
f=document.getElementById("in_4").elements["checkbox"];checked=false;for(i=0;i<f.length;i++)
{if(f[i].checked)checked=true;}
if(!checked)
{document.getElementById("in_4").elements[0].focus();alert("Selecciona una opción del checkbox: Pregunta 4");return false;}
f=document.getElementById("in_5").elements["radio"];checked=false;for(i=0;i<f.length;i++)
{if(f[i].checked)checked=true;}
if(!checked)
{document.getElementById("in_5").elements[0].focus();alert("Selecciona una opción: Pregunta 5");return false;}
f=document.getElementById("in_6").getElementsByTagName("input")[0].value;checked=false;if(f=="")
{document.getElementById("in_6").elements[0].focus();alert("Introduce una respuesta: Pregunta 6");return false;}
f=document.getElementById("in_7");checked=false;if(f.selectedIndex==0)
{document.getElementById("in_7").focus();alert("Selecciona una opción: Pregunta 7");return false;}
f=document.getElementById("in_8").getElementsByTagName("option");checked=false;for(i=0;i<f.length;i++)
{if(f[i].selected)checked=true;}
if(!checked)
{document.getElementById("in_8").focus();alert("Selecciona alguna/s opción/es: Pregunta 8");return false;}
f=document.getElementById("in_9").elements["checkbox"];checked=false;for(i=0;i<f.length;i++)
{if(f[i].checked)checked=true;}
if(!checked)
{document.getElementById("in_9").elements[0].focus();alert("Selecciona una opción del checkbox: Pregunta 9");return false;}
f=document.getElementById("in_10").elements["radio"];checked=false;for(i=0;i<f.length;i++)
{if(f[i].checked)checked=true;}
if(!checked)
{document.getElementById("in_10").elements[0].focus();alert("Selecciona una opción: Pregunta 10");return false;}
else return true;}
