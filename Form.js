// Funcionalidades deseadas en Javascript

//El campo nombre no puede contener espacios en blanco y debe marcar la primera letra  en mayúscula.

function validarNombre() {
    var nombreInput = document.getElementById("nombre");
    var nombre = nombreInput.value.trim(); // Eliminar espacios en blanco al principio y al final
            
    // Verificar si el nombre contiene espacios en blanco
    if (nombre.includes(" ")) {
        alert("El nombre no puede contener espacios en blanco.");
        return false;
    }
            
    // Convertir la primera letra en mayúscula
    var primeraLetra = nombre.charAt(0).toUpperCase();
    var restoNombre = nombre.slice(1);
    var nombreFinal = primeraLetra + restoNombre;
            
    // Actualizar el valor del campo nombre con la primera letra en mayúscula
    nombreInput.value = nombreFinal;
            
    return true;
}

// Fecha de inicio no debe ser mayor a la fecha de fin.

function validarFechas() {
    var fechaInicioInput = document.getElementById("fechain");
    var fechaFinInput = document.getElementById("fechaout");

    var fechaInicio = new Date(fechaInicioInput.value);
    var fechaFin = new Date(fechaFinInput.value);

    // Verificar si la fecha de inicio es mayor que la fecha de fin
    if (fechaInicio > fechaFin) {
        alert("La fecha de inicio puede ser menor que la fecha de fin.");
        return false;
    }

    return true;
}

//Realizar un calculo por noche en funcion a cada tipo de habitación x dia

function calcularCostoReserva() {
    var fechaInicioInput = document.getElementById("fechain");
    var fechaFinInput = document.getElementById("fechaout");
    var habitacionSelect = document.getElementById("habitacion");
  
    var fechaInicio = new Date(fechaInicioInput.value);
    var fechaFin = new Date(fechaFinInput.value);
    var habitacion = habitacionSelect.value;
  
    var costoPorDia = 0;
  
    switch (habitacion) {
      case "Simple":
        costoPorDia = 30000; // Costo por día para habitación simple
        break;
      case "Doble":
        costoPorDia = 60000; // Costo por día para habitación doble
        break;
      case "Triple":
        costoPorDia = 90000; // Costo por día para habitación triple
        break;
      case "Deluxe":
        costoPorDia = 120000; // Costo por día para habitación deluxe
        break;
      default:
        costoPorDia = 0;
    }
  
    var diasReserva = Math.floor((fechaFin - fechaInicio) / (1000 * 60 * 60 * 24)) + 1;
    var costoTotal = costoPorDia * diasReserva;
  
    alert( `Estimado costo total de su reserva es: \$${costoTotal}`);

}


