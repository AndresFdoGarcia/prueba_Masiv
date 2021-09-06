# prueba_Masiv
Prueba técnica Masiv

Para el desarrollo de la API se utilizo como framework NodeJs y para persistencia de datos se utilizó un base de datos NoSQL : MongoDB (Atlas), en la nube.

Esta API simula una ruleta de casino donde debería ser posible hacer apuestas numericas y de color. Para la evalución de los endpoint se recomienda el uso de Postman - Insonmnia
<br>
<br>

## Endpoints

 - ***Lista de ruletas***
<br> GET
 ```cURL
http://localhost:3000/api/roulette/all
```
<br>

- ***Creación de ruleta***
<br> POST
 ```cURL
http://localhost:3000/api/roulette/admin
```
<br>

- ***Apertura de ruleta***
<br>PUT
```cURL
http://localhost:3000/api/roulette/:id
```
> Se debe tener en cuenta el reemplazar ":id" por el id de la ruleta que se desea abrir. Para darle un sentido a esta opción, se considera que una ruleta solo se puede abrir en un estado anterior "Created" y que una ruleta cerrada, "Close" no puede abrir.

<br>

- ***Creación de ruleta***
<br> POST
 ```cURL
http://localhost:3000/api/roulette/admin
```
<br>

- ***Apuesta a un número***
<br> POST
 ```cURL
http://localhost:3000/api/bet/create
```
<br>

A continuación se muestra un ejemplo de como debería ir la petición desde el body. Se debe ingresar por HEADER un parámtro "user" con un valor de tipo ide de usuario, donde según el enunciado se asume que ya se ha validado.

```JAVA
{
    "amount" : 9600,
    "chosen_number" : 7,
    "chosen_color" : ""
}
```
> Para este caso se alamacena la apuesta válida y quedará la espera de asignarla a un ruleta que se encuentre abierta, esto con el fin de que al escalar el código, se puede escoger entre varias ruletas abiertas a  la vez. Para ello se crea el siguiente endpoint adicional para asiganar la apuesta a la ruleta

<br>

- ***Asignación de apuesta***
<br> PUT
 ```cURL
http://localhost:3000/api/roulette/assingbet/:id
```
> Se debe tener en cuenta el reemplazar ":id" por el id de la ruleta (abierta) a la cual se desea apostar.

<br>

- ***Cierre de ruleta***
<br> PUT
 ```cURL
http://localhost:3000/api/roulette/close/:id
```
> Se debe tener en cuenta el reemplazar ":id" por el id de la ruleta (abierta) que se desa cerrar.

<br>

