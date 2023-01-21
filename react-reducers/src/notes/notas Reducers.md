## Curso React: 84. Reducers Introducción - jonmircha

Nos permite manejar de una manera más eficiente el estado, es una alternartiva al Hook useState, es util para apps de mediana complejidad
La ventaja contra Redux es que ya es una librería interna de react
No podemos usar efectos dentro de funciones reductoras y tampoco podemos hacer tareas asincronas

El Hook useRedcuer nos va a permitir usar una función reductora, esta es una función pura que nos va a permitir manipular el estado, al ser una función pura significa que no va a tener efectos secundarios, ni interna ni externamente, es decir, con los dos parametros que recibe, que son el objeto del estado y la acción, internamente hace su programación y sí o sí debe retornar un estado, es decir, la nueva versión de nuestro estado (el estado que recibe como parametro es el estado previo, y retorna el nuevo valor del estado)
La función que nos va a permitir actualizar esa variable de estado es la función dispatch, dispatch recibe un objeto que es el action y el action tiene el tipo (action.type) de acción que coincide con los casos que se tienen en el switch y recibe adicionalmente un payload
El payload es el valor que le estás mandando para que con ese valor modifique internamente el estado y generemos una nueva versión del estado

## Curso React: 85. Reducers Hook useReducer - jonmircha

Las opciones del case se ponen en mayusculas porque se consideran como contsantes que nunca van a cambiar y la buena practica dice que se debe de tener un objeto con los diferentes tipos de acciones que nuestra aplicación va a realizar, esto nos ayuda a prevenir errores

Mientras que el atributo type del action define el tipo de acción que va a seguir dentro de los casos que tenga el Switch del reducer el payload es ese nuevo valor que podríamos manejar

## Curso React: 86. Reducers Estructura de Archivos - jonmircha

Init nos sirve para transformar el valor inicial, ejemplo de esto: Recibir un número al que posteriormente se le tiene que agregar puntos decimales o simbolos de $
Se crea la función init que recibe el initialState y posteriormente se retorna su modificación
La mejora de nuestro contador será pot la estructura de las carpetas esto se hace por el hecho de poder tener varios reducers
1.- Una carpeta para las acciones y de reducers
2.- Se crea un archivo en reducers sin utilizar UpperCamelCase porque no es un componente y otro en actions, utilizando lowerCamelCase
3.- Se sugiere que las funciones dentro del archivo de la carpeta reducer no conserven su nombre generico (reducer, init o initialValue), se les debe cambiar el nombre por si se llegan a tener varias funciones reductoras, todas las funciones se exportan por defecto
4.- En el archivo de la carpeta actions se trae el objeto con las acciones, este se exporta por defecto
5.- Al final, nuestro componente solo debe tener el código JSX y los dispatch que hacen referencia a cada uno de los eventos que tenemos