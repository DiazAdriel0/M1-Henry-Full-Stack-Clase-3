//Ejercicio 1

/* function counter() {
    let contador = 0;
    return function contadorClouser() {
      contador++
      console.log(contador)
    }
  }

const nuevoContador = counter()
nuevoContador()     // 1
nuevoContador()     // 2

const otroContador = counter()
otroContador()     // 1
otroContador()     // 2 */

//Ejercicio 2

/* Ejercicio 2
Tu tarea aquí es lograr, mediante un closure, que cacheFunction actúe como una memoria caché para el callback 
que recibe por parámetro (cb); es decir, que "recuerde" el resultado de cada operación que hace, de manera que, 
al realizar una operación por segunda vez, se pueda obtener el resultado de esa "memoria" sin tener que efectuar 
otra vez cálculos que ya se hicieron anteriormente.

- cacheFunction debe retornar una función. Esta función debe aceptar un argumento (arg) e invocar a cb con ese argumento; hecho eso, debe guardar el argumento junto con el resultado de la invocación (tip: usá un objeto donde cada propiedad sea el argumento, y su valor el resultado de la correspondiente invocación a cb) de manera que, la próxima vez que reciba el mismo argumento, no sea necesario volver a invocar a cb, porque el resultado estará guardado en la "memoria caché".

  Ejemplo:
  function square(n){
    return n * n
  }

  const squareCache = cacheFunction(square)

  squareCache(5)    // invocará a square(5), almacenará el resultado y lo retornará
  squareCache(5)    // no volverá a invocar a square, simplemente buscará en la caché cuál es el resultado de square(5) y lo retornará (tip: si usaste un objeto, podés usar hasOwnProperty) */

  /* 
cacheFunction(cb) retorna una funcion closure
        closure recibe un parametro (arg) e invoca a cb con ese argumento
closure(arg){ cb(arg) }
        guarda el argumento arg junto con el resultado de cb(arg)
let argumento = arg
let resultado = cb(arg)
        esto se guarda en un objeto
const objeto = {
    propArgumento: this.resultado
}
if (objeto.hasOwnProperty("arg")){
    return objeto.arg;
}else {
    return resultado;
}
   */
function cacheFunction(cb) {
    return function closure(arg){
      let argumento = arg;
      let resultado = cb(arg);
      const objeto = {
      }
      objeto[`${argumento}`] = resultado;
      if (objeto.hasOwnProperty(`${arg}`)){
        return objeto.arg;
      }else {
        return resultado;
      }
    }
  }

  /* function cacheFunction(cb) {
    return function closure(arg){
      if(objeto.hasOwnProperty("")){}
      const invocacionCb = cb(arg);
      const objeto = {
        argumento: this.arg,
        resultadoInvocacion: invocacionCb,
      }
    }
  } */