# Entrega 3 - Proyecto de IIC2513 - Grupo 112 frontend

La página se encuentra disponible en `https://conquer-of-cathay.netlify.app`, servida mediante Netlify. Disponible en todo internet.

## Levantar la aplicación en Netlify
Crearse una cuenta en Netlify y realizar una copia del proyecto en un repositorio personal

Darle permisos a Netlify para que acceder al repositorio recien creado.

Dejar las configuraciones por defecto y el deploy está listo.

## Correr el proyecto en local
🧬 Para correr el proyecto, deberás clonar el repositorio, y en la carpeta padre ejecutar el comando de consola:

```bash
yarn
```

🚀 Finalmente, para ejecutar el servidor en local (modo development) debes correr el comando:

```bash
yarn dev
```

# Estructura del proyecto
Este es un manifiesto de la estructura del proyecto para que sea más fácil de entender y navegar tanto por el ayudante como para nosotros.
## Componentes 
### Board
Este componente contiene el tablero de juego y componenetes que se utilizan en el mismo como los Hexagonos, Vertices y Edges. Los vertices representan las posiciones donde se pueden construir asentamientos y ciudades y los Edges donde se puede construir caminos. Todos los `<type>Container` simplemente se encargan de agrupar a componentes del tipo `<type>` para que no queden todos en `Board`.
### Hexagon
Para crear los hexagonos de arista X se toman 3 rectangulos de base $\sqrt{3}$ X ($\approx$ 1.73X) y altura 2X, y estos se rotan 0°, 60° y 120° grados respectivamente. Con esto podemos hacer que una imagen al producir overflow se oculte y si colocamos una imagen con un hexagono este encajara perfectamente. 


#### Edges
Para su posicionamiento se hace que cada clase `edge-btns-hex hX` este centrada en el hexagono `X`, de esta manera los botones usando posicion absoluta respecto a su contenedor (`edge-btns-hex hX`) solo deben desplazarse a cada una de las 6 aristas de un hexagono. Para esto, se les asigna la variable `type`  a cada Edge indicando a que arista pertenecen. `edge-button p0` corresponde a la arista extrema izquierda, luego en direccion a las manecillas del reloj se va agregando 1 a `pX`