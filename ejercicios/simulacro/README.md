# Manual de usuario 

# Prerrequisitos

## Antes de nada, para poder ejecutar el programa, se necesita tener Node.js instalado en el sistema.

Para comprobar si Node.js está instalado, ejecuta el siguiente comando:
````
node -v
```` 

<strong>Si no está instalado, utiliza el siguiente comando para instalarlo, dependiendo de la versión de openSUSE: </strong>

openSUSE Leap 15.2:
`````
zypper install nodejs14
`````

openSUSE Tumbleweed:
`````
zypper install nodejs16
`````

# Ejecución 

## Ejecutar servidor 
Para ejecutar el servidor, utiliza el siguiente comando:
````
make server
````
Nota: <strong>Para detener el servidor utilizar el control c </strong>

## Ejecutar cliente
Para ejecutar el cliente, utiliza el siguiente comando:
`````
make cliente
`````
Nota: <strong>Para detener el cliente utilizar el control c </strong>

## Ejecutar tests
Para ejecutar los tests, sigue los siguientes pasos:

1. Instalar dependencias, utilizando el siguiente comando: 
````
make install
````

2. Ejecutar los tests, utilizando el siguiente comando:
`````
make tests 
`````