//Path del XML --> https://cdn.rawgit.com/Olvera/Tarea_04_XML_DTD/17787ed6/XML_DTD/questions.xml

var formElement = null;
var res_t_1 = null;
var res_t_2 = null;
var res_sel_1 = null;
var res_sel_2 = null;
var res_chb_1 = [];
var res_chb_2 = [];
var res_mul_1 = null;
var res_mul_2 = null;
var res_rad_1 = null;
var res_rad_2 = null;

//al cargar la página... 
window.onload = function()
{
    //CORREGIR al apretar el botón
    formElement=document.getElementById('exam');
    formElement.onsubmit=function()
    {
        inicializar();
        corregirText();
        corregirSelect();
        corregirCheckbox();
        presentarNota();   
        return false;
    };


    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            gestionarXml(this);
            carga();
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
    res_t_1 = parseInt(xmlDoc.getElementsByTagName("answer")[0].innerHTML);//Guardamos respuesta/s correctas para comprobación posterior.
    select= document.getElementById("in_1");
    var inpt = document.createElement("input");
    var option = document.createElement("option");
    inpt.type = xmlDoc.getElementsByTagName("type")[0].innerHTML;
    select.appendChild(inpt);
        

    //Pregunta tipo 'select' nº 1.
    formElement=document.getElementById("q002").innerHTML = xmlDoc.getElementsByTagName("title")[1].innerHTML;
    res_sel_1 = parseInt(xmlDoc.getElementsByTagName("answer")[0].innerHTML);//Guardamos respuesta/s correctas para comprobación posterior.
    select = document.getElementById("in_2");
    var nopciones = xmlDoc.getElementById("q002").getElementsByTagName("option").length;
    for (i = 0; i < nopciones; i++)
    { 
        option = document.createElement("option");
        option.text = xmlDoc.getElementById("q002").getElementsByTagName("option")[i].innerHTML;
        option.value=i+1;
        select.appendChild(option);
    } 

    //Pregunta tipo 'multiple' nº 1.
    formElement=document.getElementById("q003").innerHTML = xmlDoc.getElementsByTagName("title")[2].innerHTML;
    res_mul_1 = parseInt(xmlDoc.getElementsByTagName("answer")[0].innerHTML);//Guardamos respuesta/s correctas para comprobación posterior.
    select = document.getElementById("in_3");
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
    res_rad_1 = parseInt(xmlDoc.getElementsByTagName("answer")[0].innerHTML);//Guardamos respuesta/s correctas para comprobación posterior.
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
    res_t_2 = parseInt(xmlDoc.getElementsByTagName("answer")[0].innerHTML);//Guardamos respuesta/s correctas para comprobación posterior.
    select= document.getElementById("in_6");
    inpt = document.createElement("input");
    inpt.type = xmlDoc.getElementsByTagName("type")[5].innerHTML;
    select.appendChild(inpt);
     
    //Pregunta tipo 'select' nº 2.
    formElement=document.getElementById("q007").innerHTML = xmlDoc.getElementsByTagName("title")[6].innerHTML;
    res_sel_2 = parseInt(xmlDoc.getElementsByTagName("answer")[0].innerHTML);//Guardamos respuesta/s correctas para comprobación posterior.
    select = document.getElementById("in_7");
    nopciones = xmlDoc.getElementById("q007").getElementsByTagName("option").length;
    for (i = 0; i < nopciones; i++)
    { 
        option = document.createElement("option");
        option.text = xmlDoc.getElementById("q007").getElementsByTagName("option")[i].innerHTML;
        option.value=i+1;
        select.appendChild(option);
    } 

    //Pregunta tipo 'multiple' nº 2.
    formElement=document.getElementById("q008").innerHTML = xmlDoc.getElementsByTagName("title")[7].innerHTML;
    res_sel_2 = parseInt(xmlDoc.getElementsByTagName("answer")[0].innerHTML);//Guardamos respuesta/s correctas para comprobación posterior.
    select = document.getElementById("in_8");
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
    res_rad_2 = parseInt(xmlDoc.getElementsByTagName("answer")[0].innerHTML);//Guardamos respuesta/s correctas para comprobación posterior.
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
    var s=mainElement.elements[0].value;     
    if (s==res_t_1)
    {
        darRespuestaHtml("P1: Correcto!");
        nota +=1;
    }
    else
    {
        if (s!=res_t_1)
        {
            darRespuestaHtml("P1: Respuesta erronea");
        }
        else darRespuestaHtml("P1: Respuesta erronea");
    }
}

function corregirText2()
{
    var s=mainElement.elements[5].value;     
    if (s==res_t_2)
    {
        darRespuestaHtml("P6: Correcto!");
        nota +=1;
    }
    else
    {
        if (s!=res_t_2)
        {
            darRespuestaHtml("P6: Respuesta erronea");
        }
        else darRespuestaHtml("P6: Respuesta erronea");
    }
}

//Gestionar la presentación de las respuestas
function darRespuestaHtml(r)
{
    var p = document.createElement("p");
    var node = document.createTextNode(r);
    p.appendChild(node);
    document.getElementById('notaFinal').appendChild(p);
}

function presentarNota()
{
    darRespuestaHtml("Nota: "+nota+" puntos sobre 10");
}

function inicializar()
{
    document.getElementById('notaFinal').innerHTML = "";
    nota=0.0;
}


//Reloj de cuenta atras del tiempo para la realización de la prueba.
var cronometro;    
function carga()
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

//Utilitza codepen.io per provar el codi. Última modificación: lunes, 9 de enero de 2017, 20:44