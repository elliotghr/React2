## Curso React: 103. Despliegue de aplicaciones React en producción ( 1 / 2 ) - jonmircha

En esta sección se estarán revisando los dos tipos de hosting para el despliegue de nuestras app

En los servicios en la nube tenemos a Netlify, Vercel, Github Pages y el producto de hosting de fierbase, todoes estos nos permiten tener un despliegue sin tanta configuración del lado del servidor

Por otro lado, tenemos los hostings compartidos tradicionales, que tienen un administrador CPanel, un acceso FTP para subir nuestro archivos, ejemplos de este tipo de Hosting son: DreamHost, GoDaddy (que no recomienda mucho), NeuBox (excelente opción si el trafico de la app es de pequeño o mediano tamaño, también es recomendado para sitios estaticos e informativos)

Realizaremos el despliqegue en Netlify, creamos cuenta y seleccionamos el repositorio

## Curso React: 104. Despliegue de aplicaciones React en producción ( 2 / 2 ) - jonmircha

Se corre el comando npm run build y se cre la carpeta build con todo el código a vanilla js
desplegamos la app a netlify
Para los servicios de la nube la raiz es la carpeta que subimos, en un hosting compartido no sucede de la misma manera si se está cargando a un subdominio, entonces se debe corregir que a la hora que se genere el build haga rutas relativas, esto se hace en el package.json -> escribimos un nuevo atributo llamado:
"homepage": "react-app/miapp/"(especificando una carpeta en particular)
"homepage": "./"
Esto se recomienda configurar en cualquier app, sin importar si se va a agregar esto a la raíz o no
