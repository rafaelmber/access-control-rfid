# access-control-rfid
Sistema de control de acceso con RFID

Sistema que controla el acceso de los trabajadores de una empresa usando sensores RFID, la información de los trabajadores se gestiona en una base de datos y muestra la información pertinente para los usuairos a través de una aplicación Web creada con React

## Arduino 
Utiliza una libería RFID que se encarga de realizar la lectura de la tarjeta y enviar el código leido por compunicación serial.
El Arduino también se encarga de encender y apagar LEDs indicadores

## Servidor
El servidor se comunica con el Arduino por medio del puerto serial.
El servidor utiliza Express para funcionar, cuenta con APIs para leer la tarjeta a voluntad, agregar nuevos usuarios y leer la lista de registros
La base de datos se gestiona con SQLite y Sequelize como capa para controlar la base de datos

## Aplicación
La aplicación del usuarios es una aplicaicón Web la cual esta desarrollada con React, usando Redux, React-router, Styled-components para los estilos de los componentes
