//Path del XML --> https://cdn.rawgit.com/Olvera/Tarea_04_XML_DTD/17787ed6/XML_DTD/questions.xml

var formElement = null;
var res_t_1 = null;
var res_t_2 = null;
var res_sel_1 = null;
var res_sel_2 = null;
var res_chb_1 = [];
var res_chb_2 = [];
var res_mul_1 = [];
var res_mul_2 = [];
var res_rad_1 = null;
var res_rad_2 = null;

//al cargar la página... 
window.onload = function()
{
    //CORREGIR al apretar el botón
    formElement=document.getElementById("comp");
    formElement.onclick=function()
    {
      inicializar();
      corregirText1();
      corregirSelect1();
      //corregirMulti1();
      corregirCheckbox1();
      corregirRadio1();
      corregirText2();
      corregirSelect2();
      //corregirCheckbox2();
      corregirRadio2();
      presentarNota();
      return false;
    };


    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            gestionarXml(this);
            cargaCrono();
        }
    };
  
    xhttp.open("GET", "XML_DTD/questions.xml", true);
    xhttp.send();
};


function gestionarXml(contXml)
{
    var xmlDoc = contXml.responseXML;

    //Pregunta tipo 'texto' nº 1.
    formElement=document.getElementById("q001").innerHTML = xmlDoc.getElementsByTagName("title")[0].innerHTML;
    res_t_1 = xmlDoc.getElementById("q001").getElementsByTagName("answer")[0].innerHTML;//Guardamos respuesta/s correctas para comprobación posterior.
    select= document.getElementById("in_1");
    var inpt = document.createElement("input");
    var option = document.createElement("option");
    inpt.type = xmlDoc.getElementsByTagName("type")[0].innerHTML;
    inpt.name = "text1";
    select.appendChild(inpt);
        

    //Pregunta tipo 'select' nº 1.
    formElement=document.getElementById("q002").innerHTML = xmlDoc.getElementsByTagName("title")[1].innerHTML;
    res_sel_1 = xmlDoc.getElementById("q002").getElementsByTagName("answer")[0].innerHTML;//Guardamos respuesta/s correctas para comprobación posterior.
    select = document.getElementById("in_2");
    var nopciones = xmlDoc.getElementById("q002").getElementsByTagName("option").length;
    for (i = 0; i < nopciones; i++)
    { 
        option = document.createElement("option");
        option.text = xmlDoc.getElementById("q002").getElementsByTagName("option")[i].innerHTML;
        option.value=i+1;
        select.appendChild(option);
    } 

    //Pregunta tipo select 'multiple' nº 1.
    formElement=document.getElementById("q003").innerHTML = xmlDoc.getElementsByTagName("title")[2].innerHTML;
    var nres = xmlDoc.getElementById("q003").getElementsByTagName("answer").length;//Guardamos respuesta/s correctas para comprobación posterior.
    for (i = 0; i < nres; i++)
    {
      res_mul_1[i] = xmlDoc.getElementById("q003").getElementsByTagName("answer")[i].innerHTML;
    }
    select = document.getElementById("in_3");
    select.multiple = true;    
    nopciones = xmlDoc.getElementById("q003").getElementsByTagName("option").length;
    for (i = 0; i < nopciones; i++)
    { 
        option = document.createElement("option");
        option.text = xmlDoc.getElementById("q003").getElementsByTagName("option")[i].innerHTML;
        option.value=i+1;
        select.appendChild(option);
    } 

    //Pregunta tipo 'checkbox' nº 1.
    formElement=document.getElementById("q004").innerHTML = xmlDoc.getElementsByTagName("title")[3].innerHTML;
    select= document.getElementById("in_4");
    nopciones = xmlDoc.getElementById("q004").getElementsByTagName("option").length;
    for (i = 0; i < nopciones; i++)
    { 
        inpt = document.createElement("input");
        inpt.type = xmlDoc.getElementsByTagName("type")[3].innerHTML;
        inpt.name = inpt.type;
        inpt.value=i+1;
        select.appendChild(inpt);
        select.innerHTML += xmlDoc.getElementById("q004").getElementsByTagName("option")[i].innerHTML;
        select.innerHTML+="<br/>";
    }
    //Guardamos respuesta/s correctas para comprobación posterior.
    var nres = xmlDoc.getElementById("q004").getElementsByTagName('answer').length;
    for (i = 0; i < nres; i++)
    { 
        res_chb_1[i]=xmlDoc.getElementById("q004").getElementsByTagName("answer")[i].innerHTML;
    }

    //Pregunta tipo 'radio' nº 1.
    formElement=document.getElementById('q005').innerHTML=xmlDoc.getElementsByTagName("title")[4].innerHTML;
    res_rad_1 = xmlDoc.getElementById("q005").getElementsByTagName("answer")[0].innerHTML;//Guardamos respuesta/s correctas para comprobación posterior.
    select=document.getElementById("in_5");
    nopciones = xmlDoc.getElementById("q005").getElementsByTagName("option").length;
    for (i = 0; i < nopciones; i++)
    { 
        inpt = document.createElement("input");
        inpt.type = xmlDoc.getElementsByTagName("type")[4].innerHTML;
        inpt.value=i+1;
        inpt.name=inpt.type;
        select.appendChild(inpt);
        select.innerHTML += xmlDoc.getElementById("q005").getElementsByTagName("option")[i].innerHTML;
        select.innerHTML+="<br/>";
    } 

    //Pregunta tipo 'texto' nº 2.
    formElement=document.getElementById("q006").innerHTML = xmlDoc.getElementsByTagName("title")[5].innerHTML;
    res_t_2 = xmlDoc.getElementById("q006").getElementsByTagName("answer")[0].innerHTML;//Guardamos respuesta/s correctas para comprobación posterior.
    select= document.getElementById("in_6");
    inpt = document.createElement("input");
    inpt.type = xmlDoc.getElementsByTagName("type")[5].innerHTML;
    inpt.name = "text2";
    select.appendChild(inpt);
     
    //Pregunta tipo 'select' nº 2.
    formElement=document.getElementById("q007").innerHTML = xmlDoc.getElementsByTagName("title")[6].innerHTML;
    res_sel_2 = xmlDoc.getElementById("q007").getElementsByTagName("answer")[0].innerHTML;//Guardamos respuesta/s correctas para comprobación posterior.
    select = document.getElementById("in_7");
    nopciones = xmlDoc.getElementById("q007").getElementsByTagName("option").length;
    for (i = 0; i < nopciones; i++)
    { 
        option = document.createElement("option");
        option.text = xmlDoc.getElementById("q007").getElementsByTagName("option")[i].innerHTML;
        option.value=i+1;
        select.appendChild(option);
    } 

    //Pregunta tipo select 'multiple' nº 2.
    formElement=document.getElementById("q008").innerHTML = xmlDoc.getElementsByTagName("title")[7].innerHTML;
    res_mul_2 = xmlDoc.getElementsByTagName("answer")[0].innerHTML;//Guardamos respuesta/s correctas para comprobación posterior.
    select = document.getElementById("in_8");
    select.multiple = true;    
    nopciones = xmlDoc.getElementById("q008").getElementsByTagName("option").length;
    for (i = 0; i < nopciones; i++)
    { 
        option = document.createElement("option");
        option.text = xmlDoc.getElementById("q008").getElementsByTagName("option")[i].innerHTML;
        option.value=i+1;
        select.appendChild(option);
    } 

    //Pregunta tipo 'checkbox' nº 2.
    formElement=document.getElementById('q009').innerHTML = xmlDoc.getElementsByTagName("title")[8].innerHTML;
    select= document.getElementById("in_9");
    nopciones = xmlDoc.getElementById("q009").getElementsByTagName("option").length;
    for (i = 0; i < nopciones; i++)
    { 
        inpt = document.createElement("input");
        inpt.type = xmlDoc.getElementsByTagName("type")[8].innerHTML;
        inpt.name = inpt.type;
        inpt.value=i+1;
        select.appendChild(inpt);
        select.innerHTML += xmlDoc.getElementById("q009").getElementsByTagName("option")[i].innerHTML;
        select.innerHTML+="<br/>";
    }
    //Guardamos respuesta/s correctas para comprobación posterior.
    nres = xmlDoc.getElementById("q009").getElementsByTagName('answer').length;
    for (i = 0; i < nres; i++)
    { 
        res_chb_2[i]=xmlDoc.getElementById("q009").getElementsByTagName("answer")[i].innerHTML;
    }
 
    //Pregunta tipo 'radio' nº 2.
    formElement=document.getElementById('q010').innerHTML=xmlDoc.getElementsByTagName("title")[9].innerHTML;
    res_rad_2 = xmlDoc.getElementById("q010").getElementsByTagName("answer")[0].innerHTML;//Guardamos respuesta/s correctas para comprobación posterior.
    nopciones = xmlDoc.getElementById("q010").getElementsByTagName("option").length;
    select=document.getElementById("in_10");
    for (i = 0; i < nopciones; i++)
    { 
        inpt = document.createElement("input");
        inpt.type = xmlDoc.getElementsByTagName("type")[9].innerHTML;
        inpt.value=i+1;
        inpt.name=inpt.type;
        select.appendChild(inpt);
        select.innerHTML += xmlDoc.getElementById("q010").getElementsByTagName("option")[i].innerHTML;
        select.innerHTML+="\t";
    }
}


//implementación de la corrección
function corregirText1()
{
    var s = document.getElementById("in_1").elements["text1"].value;
    if (s.toUpperCase()==res_t_1.toUpperCase())
    {
        darRespuestaHtml("P1: <b>Correcto!</b>");
        nota +=1;
    }
    else
    {
        if (s.toUpperCase()==res_t_1.toUpperCase())
        {
            darRespuestaHtml("P1: <b>Respuesta incorrecta</b>");
        }
        else darRespuestaHtml("P1: <b>Respuesta incorrecta</b>");
    }
}

function corregirText2()
{
    var s = document.getElementById("in_6").elements["text2"].value;
    if (s.toUpperCase()==res_t_2.toUpperCase())
    {
        darRespuestaHtml("P6: <b>Correcto!</b>");
        nota +=1;
    }
    else
    {
        if (s.toUpperCase()!=res_t_2.toUpperCase())
        {
            darRespuestaHtml("P6: <b>Respuesta incorrecta</b>");
        }
        else darRespuestaHtml("P6: <b>Respuesta incorrecta</b>");
    }
}

function corregirSelect1()
{
  var sel = document.getElementById("in_2");  
  if (sel.selectedIndex==res_sel_1)
  {
    darRespuestaHtml("P2: <b>Correcto!</b>");
    nota +=1;
  }
  else darRespuestaHtml("P2: <b>Incorrecto</b>");
}

function corregirSelect2()
{
  var sel = document.getElementById("in_7");  
  if (sel.selectedIndex==res_sel_2)
  {
    darRespuestaHtml("P7: <b>Correcto!</b>");
    nota +=1;
  }
  else darRespuestaHtml("P7: <b>Incorrecto</b>");
}

/*function corregirMulti1()
{
  var sel = document.getElementById("in_3");
  var n_opc = sel.getElementsByTagName("option").length;
  var n_answ = xmlDoc.getElementById("q003").getElementsByTagName("answer").length;
  for (i = 0; i < n_opc; i++)
  {
    for (z = 0; z < n_answ; z++)
      {
        if (sel.("option")[i]==sel.selectedIndex)
        {
          if (sel.("option")[i].value==sel_mul_1[z].value)
          {
            darRespuestaHtml("P3: <b>Correcto!</b>");
            nota +=1;
          }
          else darRespuestaHtml("P3: <b>Incorrecto</b>");
        }
        else darRespuestaHtml("P3: <b>Incorrecto</b>");
      }
  }
}  */

function corregirRadio1()
{
  var r=null;
  var u=0;
  var opt = document.getElementById("in_5").elements["radio"];

  for (i = 0; i < opt.length; i++)
  {
    if(!opt[i].checked) { u++; } else r=i;
  }

  if(u==opt.length) { darRespuestaHtml("P5: <b>Sin selección</b>"); }

  if(r==res_rad_1)
    {
      darRespuestaHtml("P5: <b>Correcto!</b>");
      nota +=1; 
    }
    else darRespuestaHtml("P5: <b>Respuesta incorrecta</b>");
}

function corregirRadio2()
{
  var r=null;
  var u=0;
  var opt = document.getElementById("in_10").elements["radio"];

  for (i = 0; i < opt.length; i++)
  {
    if(!opt[i].checked) { u++; } else r=i;
  }

  if(u==opt.length) { darRespuestaHtml("P10: <b>Sin selección</b>"); }

  if(r==res_rad_2)
    {
      darRespuestaHtml("P10: <b>Correcto!</b>");
      nota +=1; 
    }
    else darRespuestaHtml("P10: <b>Respuesta incorrecta</b>");
}

function corregirCheckbox1()
{
  var r=[];
  var u=0;
  var v=[];
  var opt = document.getElementById("in_4").elements["checkbox"];

  for (i = 0; i < opt.length; i++)
  {
    if(opt[i].checked) 
      {
        v[i]=false;
        for (j = 0; j < res_chb_1.length; j++) 
        {
          if(i==res_chb_1[j]) v[i]=true;
        }
      }

    for (i = 0; i < opt.length; i++) 
    {   
      if (opt[i].checked) 
      {
        if (v[i]) 
        {
          nota +=1.0/res_chb_1.length;  //dividido por el número de respuestas correctas   
          darRespuestaHtml("Nº 4: <b>Correcto!</b>");    
        } 
        else 
        {
          nota -=1.0/res_chb_1.length;  //dividido por el número de respuestas correctas   
          darRespuestaHtml("Nº 4: <b>Respuesta incorrecta</b>");
        }   
      }
    }
  }
}

//Gestionar la presentación de las respuestas
function darRespuestaHtml(r)
{
    var p = document.getElementById("comprobacion");
    var node = document.createElement("p");
    node.innerHTML = (r);
    p.appendChild(node);
}

function presentarNota()
{
    darRespuestaHtml("Nota: <b>"+nota+"</b> puntos sobre 10");
}

function inicializar()
{
    document.getElementById("comp").innerHTML = "";
    nota=0.0;
}


//Reloj de cuenta atras del tiempo para la realización de la prueba.
var cronometro;    
function cargaCrono()
{
    contador_s =0;
    contador_m =15;
    s = document.getElementById("segundos");
    m = document.getElementById("minutos");
    m.innerHTML = contador_m;
    cronometro = setInterval(function()
    {         
        if(contador_s>0)
        {
            contador_s--;
            if (contador_s<10)
            {
                contador_s = "0"+contador_s;//Añade '0' cuando los segundos son < 10.
            }
            s.innerHTML=contador_s;
        }            
        else
        {
            if(contador_m>0)
            {
                contador_m--;
                if (contador_m<10)
                {
                    contador_m = "0"+contador_m;//Añade '0' cuando los minutos son < 10.
                }
                m.innerHTML=contador_m;
                contador_s=59;
                s.innerHTML=contador_s;
            }
            else
            {
                stop();
            }
        }
    } ,1000);
}

//Utilitza codepen.io per provar el codi. Última modificación: lunes, 9 de enero de 2017, 20:44.l