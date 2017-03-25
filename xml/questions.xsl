<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
<html>
<head>
<style rel="stylesheet" type="text/css">
html,body{height:auto;padding:0;margin:0 auto;background-color:lightgoldenrodyellow;font-family:Verdana, Geneva,sans-serif;font-size:1em;color:darkblue}
h2{text-align:center}
table{width:80%;border:2px solid;border-radius:5px;margin:0 auto;pading:10px}
th,td{background-color:azure}
td,tr,th{border:1px solid;border-radius:5px;padding:10px;vertical-align:top}
span{color:limegreen;padding-left:5px}
</style>
</head>
<body>
  <h2 id="top"><i>Corrección</i></h2>
  <table>
    <tr>
      <th><i>Pregunta</i></th>
      <th><i>Opción</i></th>
      <th><i>Respuesta</i></th>
    </tr>
    <xsl:for-each select="questions/quiz">      
    <tr>
      <td><xsl:value-of select="title"/></td>
      <td>
       <xsl:for-each select="answer">
        <xsl:choose>
         <xsl:when test="../type = 'text'">
          <span><xsl:value-of select="text()"/></span>
         </xsl:when>
        </xsl:choose>         
       </xsl:for-each>
       <xsl:for-each select="option">
         <xsl:variable name="optposition" select="position()-1"/>
        <xsl:value-of select="$optposition+1"/>: <xsl:value-of select="text()"/>
         <xsl:for-each select="../answer">
          <xsl:variable name="correctanswer" select="text()"/>
          <xsl:if test="$optposition=$correctanswer">
            <span>&#x2714;</span>
          </xsl:if>
         </xsl:for-each><br/><br/>
       </xsl:for-each>
      </td>
      <td>
       <xsl:for-each select="useranswer">
        <xsl:variable name="useranswers" select="text()"/>
        <xsl:value-of select="text()"/>
        <xsl:for-each select="../answer">
          <xsl:choose>
           <xsl:when test="../type = 'text'">
            <xsl:variable name="correctanswertext" select="text()"/>
            <xsl:if test="$useranswers=$correctanswertext">
              <span>&#x270c;</span>
            </xsl:if>
            <xsl:if test="$useranswers!=$correctanswertext">
              <span color="red">&#x2718;</span>
            </xsl:if>
           </xsl:when>
           <xsl:otherwise>
            <xsl:variable name="correctanswer" select="text()+1"/>
            <xsl:if test="$useranswers=$correctanswer">
              <span>&#x270c;</span>
            </xsl:if>
           </xsl:otherwise>
          </xsl:choose>
         </xsl:for-each><br/><br/>
       </xsl:for-each>       
     </td>
    </tr>
    </xsl:for-each>
  </table>
 </body>
 </html>
</xsl:template>

</xsl:stylesheet>
