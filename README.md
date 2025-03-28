# Proyecto de Listas Enlazadas en JavaScript

Este proyecto implementa varias operaciones sobre una lista enlazada, como insertar, eliminar, buscar, visualizar, tambien implementa metodos para invertir una lista, eliminar duplicados de una lista y obtener elementos desde el final.

## Requisitos para la instalacion del proyecto:
Asegurate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (version 14 o superior)

## Instalacion

Siggue los pasos a continuacion para instalar y ejecutar localmente:

1. **Clonar el repositorio**
   Clona este repositorio a tu ordenador local:

   git clone https://github.com/Brandon23-ai/ListasEnlazadas_Node.js.git

2. **Navega hasta tu directorio del proyecto**
   cd direccion_de_tu_repositorio
   
4. **Instala dependencias**
   npm install

## Ejemplos de implementacion de los metodos:


const lista = new Lista();  //Instanciamos objeto lista   
lista.insertarCabezaLista(3);  //Insersion de nodos a la lista
lista.insertarCabezaLista(2);
lista.insertarCabezaLista(1);
lista.insertarCabezaLista(3);

console.log("Lista inicial:");
lista.visualizar();  //Visualziar lista


console.log("Lista invertida: ");
lista.invertirLista();  //Implementacion de metodo invertirLista
lista.visualizar();  //Visualizar lista

console.log("Eliminar duplicados: ");
lista.eliminarDuplicados();  //Implementacion de metodo eliminarDuplicados
lista.visualizar();  //Visualizar lista

const nodo2 = lista.buscarLista(2);  //Implementacion de metodo buscarLista indicando el nodo a buscar
if (nodo2) {
    lista.insertarLista(nodo2, 5);  //Condicionamos si el nodo es igual al que deseamos a reemplazar y se sustituye por el nuevo a insertar
}
console.log("\nDespués de insertar 5 después del 2:");
lista.visualizar();  //Visualizar lista

lista.eliminar(5);  //Implementacion del metodo eliminar indicando el dato del nodo a eliminar
console.log("\nDespués de eliminar el 5:");
lista.visualizar();  //Visualizar lista

lista.obtenerElementoDesdeElFinal(2);  //Implementacion del metodo obtenerElementoDesdeElFinal indicando el nodo a buscar
console.log("\nElemento en posicion '2' desde el final = ")
lista.visualizar();  //Vizualizar lista

console.log("\nRepresentación toString:");  //Implementacion del metodo toString
console.log(lista.toString());  //Visualizar lista
