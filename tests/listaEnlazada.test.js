/* eslint-env jest */

const { Lista } = require('../src/listaEnlazada');


describe('Lista Enlazada', () => {
    let lista;

    beforeEach(() => {
        lista = new Lista(); // Se inicializa antes de cada prueba
    });

    test('leerPrimero() debe devolver null si la lista está vacía', () => {
        expect(lista.leerPrimero()).toBeNull();
    });

    test('insertarCabezaLista() debe insertar un nodo al inicio', () => {
        lista.insertarCabezaLista(10);
        expect(lista.leerPrimero().dato).toBe(10);
    });

    test('insertarLista() debe insertar un nodo después de un nodo dado', () => {
        lista.insertarCabezaLista(10);
        lista.insertarCabezaLista(20);
        let nodo = lista.buscarLista(20);
        lista.insertarLista(nodo, 30);
        expect(nodo.enlace.dato).toBe(30);
    });

    test('eliminar() debe eliminar un nodo con el dato especificado', () => {
        lista.insertarCabezaLista(10);
        lista.insertarCabezaLista(20);
        lista.eliminar(10);
        expect(lista.buscarLista(10)).toBeNull();
    });

    test('buscarLista() debe encontrar un nodo con el dato especificado', () => {
        lista.insertarCabezaLista(10);
        let nodo = lista.buscarLista(10);
        expect(nodo.dato).toBe(10);
    });

    test('visualizar() debe imprimir los elementos en la consola', () => {
        console.log = jest.fn(); // Espiar console.log
        lista.insertarCabezaLista(10);
        lista.insertarCabezaLista(20);
        lista.visualizar();
        expect(console.log).toHaveBeenCalledWith('20 10');
    });

    test('toString() debe devolver la representación en string', () => {
        lista.insertarCabezaLista(10);
        expect(lista.toString()).toContain('=>');
    });

    test('invertirLista() debe invertir la lista enlazada', () => {
        lista.insertarCabezaLista(10);
        lista.insertarCabezaLista(20);
        lista.insertarCabezaLista(30);
        lista.invertirLista();
        expect(lista.leerPrimero().dato).toBe(10);
    });

    test('eliminarDuplicados() debe eliminar nodos duplicados', () => {
        lista.insertarCabezaLista(10);
        lista.insertarCabezaLista(20);
        lista.insertarCabezaLista(10);
        lista.eliminarDuplicados();
        let count = 0;
        let nodo = lista.primero;
        while (nodo !== null) {
            if (nodo.dato === 10) count++;
            nodo = nodo.enlace;
        }
        expect(count).toBe(1); // Solo debe quedar un 10
    });

    test('obtenerElementoDesdeElFinal() debe devolver el nodo N desde el final', () => {
        lista.insertarCabezaLista(10);
        lista.insertarCabezaLista(20);
        lista.insertarCabezaLista(30);
        expect(lista.obtenerElementoDesdeElFinal(1).dato).toBe(10);
    });

    test('obtenerElementoDesdeElFinal() debe devolver null si N es mayor que la lista', () => {
        lista.insertarCabezaLista(10);
        expect(lista.obtenerElementoDesdeElFinal(5)).toBeNull();
    });
});