# PrimerEntregableWizeline

Este repositorio tiene como proposito servir como evidencia del primer entregable del curo de wizeline

En la carpeta ***./git screenshots*** se encuentra la evidencia de los comandos de git.  
El nombre de los archivos en esta carpeta representan el orden en que los comandos fueron ejecutados.
- *1.png* muestra los comandos `branch`, `chackout`, `switch` y `merge`
- *2.png* muestra el comando `stash`
- *3.jpg* muestra el comando `rebase`
- *4.png* simplemente es precursor de los siguientes comandos (Fue anexado para dar contxto a los proximos comandos)
- *5.jpg* muestra el comando `cherry-pick`

En la carpeta ***./clase-docker*** se encuentra la evidencia relacionada al dockerfile.  
Se trata de un archivo *dockerfile* que contiene  las intrucciones para crear la imagen y los otros dos archivos son cruciales ya que se utilisan para la correcta ejecucion de las instrucciones del dockerfile.  

En la carpeta ***./compose kafka*** se encuentra un archivo docker-compose que automaticamente crea y configura las instancias de kafka para su replicacion, ademas se añadio una captura como evidencia de que los mensajes y los topicos estan replicandose. 

Para cubrir los requerimientos relacionados a ***mongodb*** se creo la carpeta ***./compose mongo*** se encuentra un archivo docker-compose que levanta tres instancias de mongo en diferentes puertos, el archivo ***config.json*** fue la configuracion que se uso para configurar el replica-set, ademas se añadio una captura para mostrar que instancias son secundarias y cual primaria.
EL export de los ejercicios aggregate que se solicitaron en la sesion de mongo estan en la carpeta ***./compose mongo/aggregations-exportados***  

En cuanto al requerimiento del archivo ***docker-compose*** se anexaron dos, en la carpeta ***./compose kafka*** y ***./compose mongo***