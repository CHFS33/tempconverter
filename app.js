"use strict";

//DOM Variables
const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const convertBtn = document.getElementById("convert-btn");
const errorMessageElement = document.getElementById("error-message");
const celsiusElement = document.getElementById("temperature-celsius");
const fahrenheitElement = document.getElementById("temperature-fahrenheit");

//Event Listeners
convertBtn.addEventListener("click", convertTemperature);

//Functions

function convertTemperature() {
  const celsiusTemp = Number(celsiusInput.value);
  const fahrenheitTemp = Number(fahrenheitInput.value);

  errorMessageElement.textContent = "";

  celsiusElement.textContent = "°C";
  fahrenheitElement.textContent = "°F";

  if (celsiusInput.value && fahrenheitInput.value !== "") {
    errorMessageElement.textContent =
      "*Please only insert one temperature unit.*";
  } else if (celsiusInput.value !== "" && fahrenheitInput.value === "") {
    const fahrenheitResult = celsiusTemp * 1.8 + 32;
    celsiusElement.textContent = celsiusTemp + "°C";
    fahrenheitElement.textContent = fahrenheitResult.toFixed(1) + "°F";
  } else if (celsiusInput.value === "" && fahrenheitInput.value !== "") {
    const celsiusResult = (fahrenheitTemp - 32) / 1.8;
    celsiusElement.textContent = celsiusResult.toFixed(1) + "°C";
    fahrenheitElement.textContent = fahrenheitTemp + "°F";
  } else {
    errorMessageElement.textContent =
      "*Please insert a temperature to be converted.*";
  }
}
