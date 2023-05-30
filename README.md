# Node.JS con Express y MongoDB local

El siguiente proyecto es un servidor web. Tiene las tecnologías siguientes:
- Node.JS: 18.0.0 en adelante.
- MongoDB 6.0.0
- Express 4.18.2
- Mongoose 7.2.2

PD: para comprobar la versión de Node se debe ejecutar en consola el siguiente comando:

```
node -v
```

## Instalaciones necesarias

Antes de nada se debe instalar [Docker Desktop](https://www.docker.com/products/docker-desktop/).

La versión de 64 bits para Windows suele ser la opción correcta.

Esto permite tener instalado MongoDB en el ordenador sin la necesidad de descargarlo ni configurarlo en el sistema operativo.

Una vez instalado y abierto, instalar las dependencias del proyecto:

```
yarn
```
o

```
npm i
```

Si todo ha ido bien y no ha habido ningún error, se puede iniciar el servidor con el siguiente comando (se debe usar yarn o npm dependiendo del que se use para instalar las dependencias):

```
yarn dev
```
o

```
npm run dev
```

Esto crea un servicio local de Mongo en Docker Desktop y crea un servidor local en el ordenador a la espera de cambios en los archivos. Si se cierra Docker Compose ya no habrá conexión a la base de datos y dará error de conexión.
