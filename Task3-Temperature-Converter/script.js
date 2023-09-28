function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById("temperatureInput").value);
    if (isNaN(temperatureInput)) {
        document.getElementById("result").textContent = "Invalid input. Please enter a valid number.";
        return;
    }

    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    let result;

    switch (`${fromUnit}-${toUnit}`) {
        case "Celsius-Fahrenheit":
            result = (temperatureInput * 9/5) + 32;
            break;
        case "Celsius-Kelvin":
            result = temperatureInput + 273.15;
            break;
        case "Fahrenheit-Celsius":
            result = (temperatureInput - 32) * 5/9;
            break;
        case "Fahrenheit-Kelvin":
            result = (temperatureInput - 32) * 5/9 + 273.15;
            break;
        case "Kelvin-Celsius":
            result = temperatureInput - 273.15;
            break;
        case "Kelvin-Fahrenheit":
            result = (temperatureInput - 273.15) * 9/5 + 32;
            break;
        default:
            document.getElementById("result").textContent = "Invalid conversion. Please select valid units.";
            return;
    }

    document.getElementById("result").textContent = `Result: ${result.toFixed(2)} ${toUnit}`;
}
function resetForm() {
    document.getElementById("temperatureInput").value = "";
    document.getElementById("fromUnit").selectedIndex = 0;
    document.getElementById("toUnit").selectedIndex = 0;
    document.getElementById("result").textContent = "Result: ";
}
