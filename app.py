from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

def calcular_consumo(distancia, combustivel):
    return distancia / combustivel

def listar_veiculos():
    return {
        "Carro compacto": 14,
        "Carro sedan": 12,
        "SUV": 9,
        "Caminhonete": 8,
        "Moto": 30
    }

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.get_json()
    distancia = float(data['distancia'])
    veiculo = data['veiculo']
    
    veiculos = listar_veiculos()

    if veiculo == "Personalizado":
        combustivel = float(data['combustivel'])
        consumo = calcular_consumo(distancia, combustivel)
        resultado = f"Consumo: {consumo:.2f} km/l"
    elif veiculo in veiculos:
        consumo = veiculos[veiculo]
        combustivel = distancia / consumo
        resultado = f"Combustível gasto: {combustivel:.2f} litros"
    else:
        return jsonify({'error': 'Veículo não selecionado'}), 400

    return jsonify({'result': resultado})

if __name__ == "__main__":
    app.run(debug=True)
