PSP1
--------
[![Build Status](https://travis-ci.org/mgochoa/PruebasPSP.svg?branch=master)](https://travis-ci.org/mgochoa/PruebasPSP)

Programa número 3, hecho con TDD en Javascript

Frameworks
---------------
- Node
- Mocha
- Chai
- Angular




Instalación
--------
- Instalar _Node_ y _npm_
- git clone https://github.com/mgochoa/PruebasPSP.git
- cd PruebasPSP/psp2/
- `npm install`

Dependencias Globales
------
 `npm install -g mocha `



Despliegue
----
`npm start <args>`

Donde _args_ es el  path relativos del archivo donde se encuentran los Datasets, que son grupos de números serparados por comas.

Por ejemplo

`npm start test/dataset.csv`

Pruebas
------
`mocha test --reporter mochawesome`

`open ./mochawesome-reports/mochawesome.html`
