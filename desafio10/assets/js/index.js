const precio = 400000;
let cantidad = 0;
let totalPagar = 0;

const precioElemento = document.querySelector(".precio-inicial");
precioElemento.innerHTML = precio;

const cantidadElemento = document.querySelector(".cantidad");
cantidadElemento.innerHTML = cantidad;

const valorTotalElemento = document.querySelector(".valor-total");

const agregar = () => {
    cantidad++;
    cantidadElemento.innerHTML = cantidad;
    totalPagar = cantidad * precio
    valorTotalElemento.innerHTML = totalPagar;
  }

const quitar = () => {
    if (cantidad > 0){
        cantidad--;
        cantidadElemento.innerHTML = cantidad;
        totalPagar = totalPagar - precio
        valorTotalElemento.innerHTML = totalPagar;
    }
}