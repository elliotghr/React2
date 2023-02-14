# React Router 6

## Diferencias con la v5

Se envuelve la App con el BrowserRouter, igual que en la v5, en este caso, lo estamos haciendo desde el index.js

Ahora se utiliza Routes en lugar de Switch, de la misma manera, envuelve nuestras rutas (Route)

Las rutas anidadas constan de un elemento dentro de otro y en un Link del componente padre se pasa como ruta relativa el render del componente -> _<Link to={`details`}>Ir a los detalles</Link>_. además necesitamos decirle a la ruta dónde queremos que represente sus rutas secundarias, esto lo hacemos, de la misma manera en el componente padre con <Outlet>.El _Outlet_ lo podemos colocar en donde necesitemos renderizar el contenido anidado.

Un error 404 con el path="\*" es un Error 404 _soft_ porque ocurre en el cliente, es decir, carga un componente en status "200 OK" el cual sirve para el cliente pero no para el google bot, la unica manera de mandar un 404 real es por el servidor, esto puede funcionar con una redirección al 404 real

Esta versión ya no revisa las rutas de arriba a bajo, ahora tiene un algoritmo para dientificar que ruta es más importante que otra, el orden ya no tiene relevancia

Los estilos de un NavLink en su clase isActive se definen de la siguiente manera:

```js
<NavLink
className={({ isActive }) => {
return isActive ? "is-active" : undefined;
}}
to="/" >
```

Donde la clase _.is-active_ contiene el siguiente codigo css

```css
.is-active {
  color: red;
  font-weight: 800;
  /* pointer-events desactiva la interacción del link al estar activo */
  pointer-events: none;
}
```

NavLink propio como componente

```js
const NavLink = ({ to, children, ...props }) => {
  return (
    <NavLinkReactRotuer
      {...props}
      className={({ isActive }) => {
        return isActive ? "is-active" : undefined;
      }}
      to={to}
    >
      {children}
    </NavLinkReactRotuer>
  );
};
```
Redirect ha sido sustituido por el componente <Navigate>, el cual tiene como props *to=""* y además *state={}* nos puede ayudar a pasar información a esa redirección de una manera muy rápida y con poco coste, este state es nativo, pertenece más al History
## Notas

### Otra librería recomendada:

- wouter

### Diferencias entre react-rotuer y react-router-dom

1. react-router

   Tiene el core del enrutado, no tiene la API suficiente para conectarse con el navegador

2. react-router-dom

   Este se conecta al navegador, ya que hace uso de la API history

Para verificar el tamaño de la librería y su historial, además de lo que contiene -> [bundle reat-router-dom](https://bundlephobia.com/package/react-router-dom@6.8.1)

### Componente vs Elemento

Un componente es la función que fabrica los elementos
Un elemento es el renderizado de dicha función

### ¿SPA?

Esto se convierte en una SPA en el momento en que no recarga la página, entonces, necesitamos navegar en la URL sin recargarla, para lograr esto vamos a seguir haciendo uso de Nav y NavLink
