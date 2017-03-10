# Tarea_05_XPath
##Tarea 5ª Unidad - LMSGI - 1º ASIX.
###Acceso a los datos del archivo XML mediante Xpath de examen con autocorrección (HTML, JavaScrip, XML y CSS).

###Introducción.

  Cumpliendo con los requisitos de la tarea de esta unidad (UT_5) de la asignatura, partiendo de la **_aplicación web_** de la unidad anterior, se ha modificado el código **_JavaScript_**, de tal manera que el acceso y presentación de los datos contenidos en el archivo **_XML_** (preguntas, respuestas, etc.) se realiza mediante lenguaje **_Xpath_**, es decir, se accede por la **_ruta_** o **_path_** a los distintos elementos que lo componen y aparecen en una página **_HTML_**.
  
  Sólo quedan fuera de los cambios las preguntas de tipo '_text_'. El código reestructurado afecta a las de tipo '_select_', '_select multiple_', '_checkbox_' y '_radio_'.
  
        * Para mayor detalle sobre diseño y estructura del proyecto, ver archivo **_Readme_** 
        del proyecto anterior (Tarea_04_XML_DTD).

###Notas sobre la implementación de código.

   Mediante las instrucciones de Xpath, comenzamos fijando nuestro objetivo adquiriendo, de cada pregunta, las opciones a presentar y seleccionar en la prueba (_var xpath = "/questions/quiz[@id='X']/option"_) incluidas en el XML.
   
   La función **_evaluate_** nos da como respuesta el contenido de cada elemento _option_ de la pregunta _X_ (_var nodes = xmlDoc.evaluate(xpath, xmlDoc, null, XPathResult.ANY_TYPE, null)_).

   También preparamos la presentación obteniendo varios atributos de la pregunta seleccionada, con _querySelector_, como son el _id_ de la misma en el  texto XML, como el _id_ del contenedor relacionado en el _HTML_. Esto permite una sóla funcion para presentar las opciones de los tipos _checkbox_ y _radio_, y otra función para los tipos _select_ y _multiple_.

   Un bucle _iterateNext_ rellena el contenedor con la/s opción/es correspondientes.
   
   En el caso de '_checkbox_' y '_radio_', recogemos además el tipo de pregunta, establecido en el XML, para que se corresponda, al incrustar el texto en el contenedor, con el tipo de selección a efectuar.
