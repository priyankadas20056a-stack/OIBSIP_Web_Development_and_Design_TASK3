function convertTemperature() {
    const tempInput = document.getElementById('tempInput').value;
    const unit_Inputs = document.getElementById('unit_Inputs').value;
    const unit_Outputs = document.getElementById('unit_Outputs').value;


    // Validate input
    if (tempInput === '' || isNaN(tempInput)) {
        document.getElementById('output').value  = "Please enter a valid number !";
        return;
    }

    let temp = parseFloat(tempInput);
    let convertedTemp;

    // Convert temperature
    if (unit_Inputs === unit_Outputs) {
        convertedTemp = temp;
    } else if (unit_Inputs === 'Celsius') {
        if (unit_Outputs === 'Fahrenheit') {
            convertedTemp = (temp * 9/5) + 32;
        } else if (unit_Outputs === 'Kelvin') {
            convertedTemp = temp + 273.15;
        }
    } else if (unit_Inputs === 'Fahrenheit') {
        if (unit_Outputs === 'Celsius') {
            convertedTemp = (temp - 32) * 5/9;
        } else if (unit_Outputs=== 'Kelvin') {
            convertedTemp = ((temp - 32) * 5/9) + 273.15;
        }
    } else if (unit_Inputs === 'Kelvin') {
        if (unit_Outputs === 'Celsius') {
            convertedTemp = temp - 273.15;
        } else if (unit_Outputs === 'Fahrenheit') {
            convertedTemp = ((temp - 273.15) * 9/5) + 32;
        }
    }

    document.getElementById('output').value = `Converted Temperature: ${convertedTemp.toFixed(2)} °${unit_Outputs}`;
}