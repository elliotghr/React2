## Curso React: 75. Context API Introducción - jonmircha

Context API es para manejar el estado de una maner más optima
Las apps deben ser superiores a la versión 16.3
Context API es interno de React
Es muy util en aplicaciones donde tengamos que compartir variables de estado global
Se nos sugiere crear un contexto por cada tematica que tengamos para no provocar un re renderizado de componentes inecesario

## Curso React: 76. Context API - Haciendo una APP con THEME 🌞🌙 Dark/Light SIN Context - jonmircha

## Curso React: 77. Context API - Haciendo una APP MultiIDIOMA SIN Context - jonmircha

En una app más grande estas traducciones pueden ser traidas por un archivo json o un api que contenga todas las traducciones

## Curso React: 78. Context API - Haciendo una APP con SESIÓN de Usuario SIN Context - jonmircha

Dependiendo de la estructura del proyecto se podrían requerir más condicional renders en el Main

## Curso React: 79. Context API - Haciendo una APP con THEME 🌞🌙 Dark/Light CON Context - jonmircha

En la estructura de carpetas creamos ../context para almacenar todos nuestros contextos
Podríamos crear las 3 funcionalidades (theme, language y el inicio de sesión) en 1 solo contexto pero es más limpio, tiene más estructura y también tiene mejor orden el separarlos en cada uno

Un contexto se crea con la función: createContext y se suele exportar por defecto este contexto

Este contexto tiene dos elementos:
1.- Un proveedor, es decir el wraper que va a proveer a los elementos internos que tenga todos los valores que van a ser globales
2.- Un consumer, un mecanismo para consumir los valores que da el proveedor
Estos dos elementos se pueden separar en archivos independientes o se pueden almacenar en un solo archivo

No vamos a usar el Consumer porque, en su lugar se va a utilizar el Hook useCosumer

El contexto también deja más limpio de lógica nuestros componentes, porque esta se va al archivo del contexto

## Curso React: 82. CRUD API con Context ( 1 / 2 ) - jonmircha

El Proveider no puede ir en el archivo donde vayamos a usar el useConsumer
En un mismo archivo no puedes compartir las variables del Contexto y tener el wraper (Provider)
Entomces y en este caso, el Provider será en el archivo App.js y envolverá al componente <CrudApi>

## Curso React: 83. CRUD API con Context ( 2 / 2 ) - jonmircha

Se puede agregar un alias a las props con usando :, ej
const { db: data } = useContext(CrudContext);
