# BOOTSTRAP
## Instalar desde la consola:
>Debemos ubicarnos en la carpeta principal del proyecto, luego colocar el comando: 
```
npm install bootstrap
```

>Luego, podemos importar la librería en nuestro archivo App.js
```
import "bootstrap/dist/css/bootstrap.min.css";
```
- Tener presente que, la ruta hace referencia a la carpeta `node_modules`, como carpeta principal.



# useEffect
useEffect es un hook que reibe 2 parametros.

1. callback, en el cual vamos a colocar el codigo que querramos que se ejecute. Independientemente del cambio de las variables de estado.
2. Arreglo de dependencias.
   - Si el arreglo esta vacio, el codigo dentro del useEffect solo se ejecutará una sola vez.
   - En el arreglo podemos mandar variables que cuando modifiquen su valor, el contenido del useEffect se volverá a ejecutar.

NOTA:
- `useEffect` se ejecuta como minimo 1 vez (la vez que el componente se cargue).
- Pueden haber varios useEffect en un mismo componente.

