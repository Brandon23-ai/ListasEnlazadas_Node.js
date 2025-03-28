
class Nodo {
    constructor(dato, enlace = null) {
        this.dato = dato;
        this.enlace = enlace;
    }

    toString() {
        return `${this.dato} => ${this.enlace}`;
    }

    leerDato() {
        return this.dato;
    }

    siguiente() {
        return this.enlace;
    }
}


class Lista {
    constructor() {
        this.primero = null;
    }

    leerPrimero() {
        return this.primero;
    }
    

    insertarCabezaLista(entrada) {
        const nuevo = new Nodo(entrada, this.primero);
        this.primero = nuevo;
    }

    insertarLista(anterior, entrada) {
        const nuevo = new Nodo(entrada, anterior.enlace);
        anterior.enlace = nuevo;
    }

    eliminar(entrada) {
        let actual = this.primero;
        let anterior = null;
        
        while (actual !== null && actual.dato !== entrada) {
            anterior = actual;
            actual = actual.enlace;
        }
        
        if (actual !== null) {
            if (actual === this.primero) {
                this.primero = actual.enlace;
            } else {
                anterior.enlace = actual.enlace;
            }
        }
    }

    buscarLista(destino) {
        let indice = this.primero;
        while (indice !== null) {
            if (indice.dato === destino) {
                return indice;
            }
            indice = indice.enlace;
        }
        return null;
    }

    
    visualizar() {
        let n = this.primero;
        const elementos = [];
        while (n !== null) {
            elementos.push(n.dato);
            n = n.enlace;
        }
        console.log(elementos.join(' '));
    }

    toString() {
        return `=> ${this.primero}`;
    }

    /**
     * Invierte los nodos en una lista enlazada.
     * 
     * Este metodo recorre la lista enlazada haciendo iteraciones en cada
     * nodo intercambiando un enlace acual con el anterior.
     * 
     * Complejidad temporal
     */

    invertirLista(){
        let actual = this.primero;
        let anterior = null;
        let siguiente = null;

        //Recorrer lista
        while (actual != null){
            siguiente = actual.enlace;//Guardamos la referencia del siguente nodo.
            actual.enlace = anterior;//Invertimos el enlace del nodo actual
            anterior = actual;//Movemos 'anterior' al nodo actual
            actual = siguiente;//Movemos 'actual' al siguiente nodo
        }
        this.primero = anterior;
    }

    /**
     * Elimina los nodos duplicados en una lista enlazada.
     * 
     * Este metodo recorre la lista enlazada y elimina los nodos que contienen
     * valores duplicados, dejando solo la primera aparicion de cada valor.
     * 
     * Complejidad temporal: **O(n^2) en el peor caso, debido al doble bucle anidado.
     */

    eliminarDuplicados(){
        let actual = this.primero;

        while( actual != null && actual.enlace != null){
            let anterior = actual;
            let siguiente = actual.enlace;

            while(siguiente != null){
                if(actual.dato == siguiente.dato){
                    anterior.enlace = siguiente.enlace;
                }else{
                    anterior = siguiente;
                }
                siguiente = siguiente.enlace;   
            }
            actual = actual.enlace;
        }
        
    }

    /**
     * Obtiene el elemento n desde el final.
     * 
     * Este metodo obteniene el nodo N desde el final de la lista enlazada
     * colocando dos punteros p1 y p2, que avanzan consecutivamente hasta 
     * que p2 llegue al final de la lista.
     * 
     * @param {*} n No. de nodo que se desea obtener
     * @returns valor del nodo
     * 
     * Complejidad temporal: **O(n) en el peor caso, ya que ambos bucles
     * recorren lista solo una vez.
     */

    obtenerElementoDesdeElFinal(n) {
        let p1 = this.primero; // Puntero 1
        let p2 = this.primero; // Puntero 2
    
        
        for (let i = 0; i < n; i++) { //Mover p2 'n' pasos adelante
            if (p2 === null) {        
                console.log(`La lista es más corta que ${n} elementos.`); //Si p2 = null la lista es mas corta que 'n'
                return null; 
            }
            p2 = p2.enlace;
        }

        while (p2 !== null) { //Iteracion hasta que p2 llegue al final de la lista =null
            p1 = p1.enlace; //Avanza al siguiente nodo
            p2 = p2.enlace; //Avanza al siguiente nodo
        }
    
        // Después de este bucle, p1 apunta al nodo que está n posiciones desde el final
        console.log(`Elemento en posición ${n} desde el final: ${p1.dato}`);
        return p1; // Devuelve el nodo
    }
    
}

module.exports = {Lista, Nodo};

const lista = new Lista();
lista.insertarCabezaLista(3);
lista.insertarCabezaLista(2);
lista.insertarCabezaLista(1);
lista.insertarCabezaLista(3);

console.log("Lista inicial:");
lista.visualizar(); 


console.log("Lista invertida: ");
lista.invertirLista();
lista.visualizar();

console.log("Eliminar duplicados: ");
lista.eliminarDuplicados();
lista.visualizar();

const nodo2 = lista.buscarLista(2);
if (nodo2) {
    lista.insertarLista(nodo2, 5);
}
console.log("\nDespués de insertar 5 después del 2:");
lista.visualizar(); 

lista.eliminar(5);
console.log("\nDespués de eliminar el 5:");
lista.visualizar(); 

lista.obtenerElementoDesdeElFinal(2);
console.log("\nElemento en posicion '2' desde el final = ")
lista.visualizar();

console.log("\nRepresentación toString:");
console.log(lista.toString()); 