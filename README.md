# Test-MochaChai
Se requiere modificar el archivo package.json, dentro de los scripts agregar test en caso de no existir, y que este contenga: "./node_modules/.bin/mocha --reporter spec"  
 
Ej:  
  "scripts": {  
    "test": "./node_modules/.bin/mocha --reporter spec"  
  },  

Una vez agregado eso, se podrá ejecutar un test solo lanzando npm test en la consola del proyecto

Existen multiples funciones para crear un resultado esperado, tales como: to, be, been, is, tha, which, etc, se pueden ver mas a fondo en [la documentación oficial](https://www.chaijs.com/api/bdd/)   