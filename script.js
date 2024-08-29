function toggleCustomFuelSection() {
    const vehicleSelect = document.getElementById('vehicle');
    const customFuelSection = document.getElementById('custom-fuel-section');

    if (vehicleSelect.value === 'Personalizado') {
        customFuelSection.classList.remove('hidden');
    } else {
        customFuelSection.classList.add('hidden');
    }
}

function calculateFuel() {
    const vehicleSelect = document.getElementById('vehicle').value;
    const distance = parseFloat(document.getElementById('distance').value);
    const customFuel = parseFloat(document.getElementById('customFuel').value);
    const resultElement = document.getElementById('result');
    
    const vehicles = {
        "Carro compacto": 14,
        "Carro sedan": 12,
        "SUV": 9,
        "Caminhonete": 8,
        "Moto": 30
    };
    
    let result = '';

    if (vehicleSelect === 'Personalizado') {
        if (isNaN(distance) || isNaN(customFuel)) {
            result = 'Por favor, insira valores válidos para distância e combustível.';
        } else {
            const consumption = distance / customFuel;
            result = `Consumo: ${consumption.toFixed(2)} km/l`;
        }
    } else if (vehicles[vehicleSelect]) {
        if (isNaN(distance)) {
            result = 'Por favor, insira um valor válido para a distância.';
        } else {
            const fuelNeeded = distance / vehicles[vehicleSelect];
            result = `Combustível gasto: ${fuelNeeded.toFixed(2)} litros`;
        }
    } else {
        result = 'Por favor, selecione um veículo.';
    }

    resultElement.textContent = result;
}
