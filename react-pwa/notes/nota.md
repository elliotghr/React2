## Curso React: 101. Templates Create React App - jonmircha

Son las plantillas para nuestra app, como el soporte de Typescript, nosotros podemos implementarlo o incluso crearlo
en npmjs.com podemos buscar templates buscando "cra-template-\*"

## Curso React: 102. Progressive Web Apps con React - jonmircha

https://www.npmjs.com/package/cra-template-pwa
Hacemos uso del comando -> npx create-react-app my-app --template pwa
Este template tiene dos archivos service workers y en el index.js cambiamos el método unregister() to register()

El service worker da las caracteristicas de PWA a una app web
Una de las caracteristicas de las PWA es que nos permite manejarla sin conexión a internet, también caceha las cosas que le indiquemos y lanza una alerta para crear acceso directo en los iconos de la app

Desarrollar una PWA en fase de desarrollo es complicado, si se quieren otorgar las caractersticas de PWA se recomienda que sea al final
Este template genera las caracteristicas de PWA cuando se genera el build
