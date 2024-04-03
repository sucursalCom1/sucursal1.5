document.addEventListener("DOMContentLoaded", function() {
    const valorInput = document.querySelector('#valor');
    const cantidadInput = document.querySelector('#cantidad');
    const totalInput = document.querySelector('input#colFormLabel');

    // Función para calcular el total
    function calcularTotal() {
        // Verificar si ambos inputs tienen valor
        if (valorInput.value !== '' && cantidadInput.value !== '') {
            // Calcular el producto de valor y cantidad
            const producto = parseFloat(valorInput.value) * parseInt(cantidadInput.value);
            // Mostrar el producto en el input total
            totalInput.value = producto.toFixed(2);
        } else {
            // Si alguno de los inputs es null, limpiar el total
            totalInput.value = '';
        }
    }

    // Escuchar cambios en los inputs de valor y cantidad
    valorInput.addEventListener('input', calcularTotal);
    cantidadInput.addEventListener('input', calcularTotal);
});


document.addEventListener("DOMContentLoaded", function() {
    const select = document.querySelector('.form-select');
    const valorCuotaInput = document.querySelector('input[placeholder="Valor cuota"]');
    const valorInteresInputPor = document.querySelector('input[placeholder="Valor interés %"]');
    const valorInteresInputVal = document.querySelector('input[placeholder="Valor interés $"]');
    const valorFinalInput = document.querySelector('input[placeholder="Valor final"]');
    const ejemploInput = document.querySelector('input#colFormLabel');
    const rem1 = 0.2; // Porcentaje de interés para la opción 1
    const rem2 = 0.35; // Porcentaje de interés para la opción 2
    const rem3 = 0.5; // Porcentaje de interés para la opción 3

    select.addEventListener('change', function() {
        const opcionSeleccionada = select.value;
        const ejemploValor = parseFloat(ejemploInput.value);

        // Eliminar valores si no hay opción seleccionada
        if (opcionSeleccionada === '') {
            valorCuotaInput.value = '';
            valorInteresInputPor.value = '';
            valorInteresInputVal.value = '';
            valorCuotaInput.value = '';
            valorFinalInput.value = '';
            return;
        }

        // Calcular el valor final y el valor de la cuota según la opción seleccionada
        let valorFinal;
        let valorInteresPor;
        let valorInteresVal;
        let valorCuota;

        if (opcionSeleccionada === '1') {
            valorFinal = ((1 + rem1) * ejemploValor).toFixed(2);
            valorInteresPor = rem1 * 100 + '%';
            valorInteresVal = ((rem1) * ejemploValor).toFixed(2);
            valorCuota = valorFinal;
        } else if (opcionSeleccionada === '2') {
            valorFinal = ((1 + rem2) * ejemploValor).toFixed(2);
            valorInteresPor = rem2 * 100 + '%';
            valorInteresVal = ((rem2) * ejemploValor).toFixed(2);
            valorCuota = (valorFinal / 3).toFixed(2);
        } else if (opcionSeleccionada === '3') {
            valorFinal = ((1 + rem3) * ejemploValor).toFixed(2);
            valorInteresPor = rem3 * 100 + '%';
            valorInteresVal = ((rem3) * ejemploValor).toFixed(2);
            valorCuota = (valorFinal / 6).toFixed(2);
        }

        // Mostrar los valores calculados
        valorCuotaInput.value = valorCuota;
        valorInteresInputPor.value = valorInteresPor;
        valorInteresInputVal.value = valorInteresVal;
        valorFinalInput.value = valorFinal;
    });
});


/// tarjeta propia

document.addEventListener("DOMContentLoaded", function() {
    const select = document.getElementById('tarj_propia');
    const valorCuotaInput      = document.getElementById('inputValorCuotaPropia');
    const valorInteresInputPor = document.getElementById('inputValorInteresPorcPropia');
    const valorInteresInputVal = document.getElementById('inputValorInteresMontoPropia');
    const valorFinalInput = document.getElementById('inputValorFinal');
    const ejemploInput = document.querySelector('input#colFormLabel');
    const rem1 = 0.1; // Porcentaje de interés para la opción 1
    const rem2 = 0.25; // Porcentaje de interés para la opción 2
    const rem3 = 0.4; // Porcentaje de interés para la opción 3

    select.addEventListener('change', function() {
        const opcionSeleccionada = select.value;
        const ejemploValor = parseFloat(ejemploInput.value);

        // Eliminar valores si no hay opción seleccionada
        if (opcionSeleccionada === '') {
            valorCuotaInput.value      = '';
            valorInteresInputPor.value = '';
            valorInteresInputVal.value = '';
            valorCuotaInput.value      = '';
            valorFinalInput.value      = '';
            return;
        }

        // Calcular el valor final y el valor de la cuota según la opción seleccionada
        let valorFinal;
        let valorInteresPor;
        let valorInteresVal;
        let valorCuota;

        if (opcionSeleccionada === '1') {
            valorFinal = ((1 + rem1) * ejemploValor).toFixed(2);
            valorInteresPor = rem1 * 100 + '%';
            valorInteresVal = ((rem1) * ejemploValor).toFixed(2);
            valorCuota = valorFinal;
        } else if (opcionSeleccionada === '2') {
            valorFinal = ((1 + rem2) * ejemploValor).toFixed(2);
            valorInteresPor = rem2 * 100 + '%';
            valorInteresVal = ((rem2) * ejemploValor).toFixed(2);
            valorCuota = (valorFinal / 3).toFixed(2);
        } else if (opcionSeleccionada === '3') {
            valorFinal = ((1 + rem3) * ejemploValor).toFixed(2);
            valorInteresPor = rem3 * 100 + '%';
            valorInteresVal = ((rem3) * ejemploValor).toFixed(2);
            valorCuota = (valorFinal / 6).toFixed(2);
        }

        // Mostrar los valores calculados
        valorCuotaInput.value = valorCuota;
        valorInteresInputPor.value = valorInteresPor;
        valorInteresInputVal.value = valorInteresVal;
        valorFinalInput.value = valorFinal;
    });
});

