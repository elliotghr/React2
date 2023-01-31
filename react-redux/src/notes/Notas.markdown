## Curso React: 94. REDUX Introducción - jonmircha

Librería adicional para el manejo del estado
Una recomendación es usar Redux en apps de un tamaño mediano o de mayor complejidad
En aplicaciones pequeñas es suficiente con useState y el Context
Además nos propone tener un solo origen de la verdad, es decir, tener un solo estado para guardar toda la información de la aplicación
Redux se ha mantenido agnostico, es decir, que se puede manejar en vue, svelte e incluso en vanilla js
Redux tiene diferentes sabores, sin embargo, la explicación es la misma

## Curso React: 95. REDUX Estructura de archivos - jonmircha

Instalamos redux, react redux y redux devtools

- Redux normalmente se usa con la biblioteca React-Redux para permitir que sus componentes React se comuniquen con una store Redux.

  1.- Creamos la carpeta reducers y de forma separada creamos actions y types, aqui en redux sí van separados estos dos archivos
  2.- Aunque las funciones reductoras se creen en archivos independientes habrá un arhchivo que los combine todos en su totalidad (/reducers/index.js), esto se hace con const reducer = combineReducers({}); el cual combina todos los reducers de nuestra app en un objeto
  3.- Posteriormente,creamos una carpeta store con su respectivo index.js que nos permite crear el "contenedor de la verdad absoluta", importamos nuestro reducer único y creamos nuestro store con: const store = createStore(reducerÚnico); Finalmente nos suscribimos para detectar cualquier cambio en este store store.subscribe(() => console.log(store)); y exportamos por defecto
  4.- En nuestra App.js compartiremos el store de la app, este Provider es de la librería de react-redux y con esto cualquier componente dentro de la estructura de nuestra app ya va a estar leyendo el estado global de la app através de redux

  El núcleo de Redux es una biblioteca muy pequeña y deliberadamente sin opiniones. Proporciona algunas pequeñas primitivas de API:

- createStore para crear realmente una tienda Redux
- combineReducers para combinar múltiples reductores de rebanadas en un solo reductor más grande
- applyMiddleware para combinar varios middleware en un potenciador de tienda
- compose para combinar varios potenciadores de tienda en un solo potenciador de tienda

## Curso React: 96. REDUX Flujo de Trabajo - jonmircha

1.- Creamos el componente del contador y definimos nuestros elementos JSX
2.- Primero ** definimos ** los tipos de acciones en types, aqui a diferencia de useReducer se exportan las acciones en una constante, no en un objeto
3.- Creamos el archivo de las acciones del contador, este archivo sí es único. Aqui exportamos las funciones que hacen referencia a cada action type que definimos en el punto 2, este trae el type y el payload
4.- Creamos la función reductora con nuestro switch y cases, también creamos nuestro initialState
5.- Combinamos el reducer que creamos (contador) en el index en nuestro combineReducer
6.- Vinculamos la lógica en nuestro componente de UI, primero traemos el state de redux -> useSelector, accedemos a la prop contador (state.contador) que está en este state único y hacemos uso de los dispatch para llamar las acciones que programamos usando ->const dispatch = useDispatch();, por ultimo definmos los eventos a nuestras acciones creadas

## Curso React: 97. REDUX Carrito de Compras ( 1 / 2 ) - jonmircha

Implementación de lógica del shopping cart
Creación de los types, actions, reducer y el combineReducer

## Curso React: 99. REDUX CRUD API ( 1 / 2 ) - jonmircha

Creación de los types, actions, reducer y el combineReducer
En este caso sí necesitaremos seguir usando useState y el useEffect por la complejidad de este componente, eso significa que aqui se van a quedar los métodos y el useEffect en nuestro componente de UI porque contiene peticiones asincronas y no deben ir en la función reductora

## Curso React: 100. REDUX CRUD API ( 2 / 2 ) - jonmircha

Como aqui no se está ejecutando el evento de un componente JSX o en la prop de un componente entonces ya no lo ejecutamos dentro de una arrow function
En la función reductora en nuestro state siempre se le debe asignar por defecto el valor inicial, ej:
export function crudReducer(state ** = initialState **, action) {
