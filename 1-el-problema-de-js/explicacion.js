/*
Vamos a ver lo que es un componente en su minima expresion, usando HTML, CSS y JS, lenguajes que interpreta el navegador, vamos a ver los diferentes problemas que surjen cuando codificamos de asi y la solucion que nos aporta react a estos problemas de forma mas sencillo y mas potente.

Vemos la forma mas manual de mostrar esos card de avatar. Lo tenemos en el primer proyecto de 1-card.

Ahora los que haremos es hacerlo con JS para no repetir codigo. Lo vemos en el archivo 2-card.

Esta segunda forma de renderizar cosas podemos encontrar las siguientes fallos:
- Es muy fragil, ya que si nos olvidamos de unas simples comillar en el componente se rompe nuestro codigo. No existe ningun tipo de validacion de la sintaxis escrita.
- La informacion renderizada se interpreta como HTML, si en el objeto AVATARS la name lo ponemos entre un H1 veremos como se renderiza con esa etiqueta, estamos expuestos a la inyeccion de codigo. La solucion seria utilizar la API del DOM para renderizar estos componentes. Lo vemos en el directorio 3-card.

Vemos que esta tercera opcion usamos la API del DOM. Pero la sintaxis no es para nada legible, para un simple card. Imagina si lo hacemos con una app mucho mas grande, seria poco viable.

NOTA: Si ponemos el script de JS en la cabecera pero le agregamos el atributo defer este se cargara al final del body.

El atributo defer indica al navegador que no espere por el script. En lugar de ello, debe seguir procesando el HTML, construir el DOM. El script carga “en segundo plano” y se ejecuta cuando el DOM esta completo.
*/