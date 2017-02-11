//Formulari amb camp de text, onsubmit fer que surti un missatge amb el que hem escrit:
//Path del XML --> https://cdn.rawgit.com/Olvera/Tarea_04_XML_DTD/17787ed6/XML_DTD/questions.xml

var formElement=null;
var answer=null;
//al cargar la página... 
window.onload = function()
{
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

    function gestionarXml(contXml)
    {
        var xmlDoc = contXml.responseXML;
        formElement=document.getElementById("q001").innerHTML = xmlDoc.getElementsByTagName("title")[0].innerHTML;
        select= document.getElementById("in_1");
        var inpt = document.createElement("input");
        var option = document.createElement("option");
        inpt.type = xmlDoc.getElementsByTagName("type")[0].innerHTML;
        select.appendChild(inpt);



        formElement=document.getElementById("q002").innerHTML = xmlDoc.getElementsByTagName("title")[1].innerHTML;
        select = document.getElementById("in_2");
        var nopciones = xmlDoc.getElementById("q002").getElementsByTagName("option").length;
        for (i = 0; i < nopciones; i++)
        { 
            option = document.createElement("option");
            option.text = xmlDoc.getElementById("q002").getElementsByTagName("option")[i].innerHTML;
            option.value=i+1;
            select.appendChild(option);
        } 


        formElement=document.getElementById("q003").innerHTML = xmlDoc.getElementsByTagName("title")[2].innerHTML;
        select = document.getElementById("in_3");
        nopciones = xmlDoc.getElementById("q003").getElementsByTagName("option").length;
        for (i = 0; i < nopciones; i++)
        { 
            option = document.createElement("option");
            option.text = xmlDoc.getElementById("q003").getElementsByTagName("option")[i].innerHTML;
            option.value=i+1;
            select.appendChild(option);
        } 


        formElement=document.getElementById('q004').innerHTML = xmlDoc.getElementsByTagName("title")[3].innerHTML;
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
 

        formElement=document.getElementById('q005').innerHTML=xmlDoc.getElementsByTagName("title")[4].innerHTML;
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
 

        formElement=document.getElementById("q006").innerHTML = xmlDoc.getElementsByTagName("title")[5].innerHTML;
        select= document.getElementById("in_6");
        inpt = document.createElement("input");
        inpt.type = xmlDoc.getElementsByTagName("type")[5].innerHTML;
        select.appendChild(inpt);


        formElement=document.getElementById("q007").innerHTML = xmlDoc.getElementsByTagName("title")[6].innerHTML;
        select = document.getElementById("in_7");
        nopciones = xmlDoc.getElementById("q007").getElementsByTagName("option").length;
        for (i = 0; i < nopciones; i++)
        { 
            option = document.createElement("option");
            option.text = xmlDoc.getElementById("q007").getElementsByTagName("option")[i].innerHTML;
            option.value=i+1;
            select.appendChild(option);
        } 


        formElement=document.getElementById("q008").innerHTML = xmlDoc.getElementsByTagName("title")[7].innerHTML;
        select = document.getElementById("in_8");
        nopciones = xmlDoc.getElementById("q008").getElementsByTagName("option").length;
        for (i = 0; i < nopciones; i++)
        { 
            option = document.createElement("option");
            option.text = xmlDoc.getElementById("q008").getElementsByTagName("option")[i].innerHTML;
            option.value=i+1;
            select.appendChild(option);
        } 


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
 
        
        formElement=document.getElementById('q010').innerHTML=xmlDoc.getElementsByTagName("title")[9].innerHTML;
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


    var cronometro;
 
    
    function carga()
    {
        contador_s =0;
        contador_m =30;
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
                    contador_s = "0"+contador_s;
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
                        contador_m = "0"+contador_m;
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
};

//Utilitza codepen.io per provar el codi. Última modificación: lunes, 9 de enero de 2017, 20:44