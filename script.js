document.addEventListener('DOMContentLoaded', function () {
    const temperatureInput = document.getElementById('temperatureInput');
    const unitSelector = document.getElementById('unitSelector');
    const convertBtn = document.getElementById('convertBtn');
    const resultText = document.getElementById('resultText');

    convertBtn.addEventListener('click', function () {
        const temperature = parseFloat(temperatureInput.value);
        const selectedUnit = unitSelector.value;
        let convertedTemperature;

        if (selectedUnit === 'celsius') {
            convertedTemperature = (temperature - 32) * (5 / 9);
            resultText.textContent = `Result: ${convertedTemperature.toFixed(2)}°C`;
        } else if (selectedUnit === 'fahrenheit') {
            convertedTemperature = (temperature * 9/5) + 32;
            resultText.textContent = `Result: ${convertedTemperature.toFixed(2)}°F`;
        }
    });
});
