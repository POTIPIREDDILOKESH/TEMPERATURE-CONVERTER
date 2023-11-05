		function convertTemperatures() {
			let celsius = document.getElementById("celsius").value;
			let kelvin = document.getElementById("kelvin").value;
			let fahrenheit = document.getElementById("fahrenheit").value;
			if (celsius !== "") {
				kelvin = parseFloat(celsius) + 273.15;
				fahrenheit = (parseFloat(celsius) * 1.8) + 32;
				document.getElementById("kelvin").value = kelvin.toFixed(2);
				document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
			} else if (kelvin !== "") {
				celsius = parseFloat(kelvin) - 273.15;
				fahrenheit = (parseFloat(kelvin) - 273.15) * 1.8 + 32;
				document.getElementById("celsius").value = celsius.toFixed(2);
				document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
			} else if (fahrenheit !== "") {
				celsius = (parseFloat(fahrenheit) - 32) / 1.8;
				kelvin = (parseFloat(fahrenheit) + 459.67) / 1.8;
				document.getElementById("celsius").value = celsius.toFixed(2);
				document.getElementById("kelvin").value = kelvin.toFixed(2);
			}
		}