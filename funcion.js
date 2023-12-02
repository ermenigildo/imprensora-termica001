function enviarDatos() {
    var texto_reporte = document.getElementById('texto_reporte').value;
    
    // Envío de datos al script de Python utilizando fetch
    fetch('http://localhost:5000/imprimir', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({texto_reporte: texto_reporte}),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Reporte impreso correctamente");
        } else {
            alert("Hubo un error al imprimir el reporte");
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });

    return false; // Evita el envío del formulario tradicional
}
