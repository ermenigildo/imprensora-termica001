from flask import Flask, request, jsonify
import win32print

app = Flask(__name__)

@app.route('/imprimir', methods=['POST'])
def imprimir_reporte():
    try:
        data = request.get_json()
        texto_reporte = data.get('texto_reporte', '')

        printer_name = win32print.GetDefaultPrinter()
        hprinter = win32print.OpenPrinter(printer_name)

        # Resto del código para imprimir el reporte...
        # ... (usando texto_reporte)

        return jsonify({'success': True})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)})

if __name__ == '__main__':
    app.run(port=5000) # El servidor Flask escucha en el puerto 5000
