 function appendToDisplay(value) {
        document.getElementById("display").value += value;
}

function clearDisplay() {
        document.getElementById("display").value = "";
}

function sqrt() {
        let value = document.getElementById("display").value;
        if (!isNaN(value) && value !== "") {
            document.getElementById("display").value = Math.sqrt(parseFloat(value));
        }
}

function trigFunction(func) {
        let value = document.getElementById("display").value;
        if (!isNaN(value) && value !== "") {
            let radians = parseFloat(value) * (Math.PI / 180);
            document.getElementById("display").value = Math[func](radians);
        }
}

function logFunction() {
        let value = document.getElementById("display").value;
        if (!isNaN(value) && value !== "") {
            document.getElementById("display").value = Math.log10(parseFloat(value));
        }
}

function factorial() {
        let value = document.getElementById("display").value;
        let num = parseInt(value);
        if (num >= 0 && Number.isInteger(num)) {
            let result = 1;
            for (let i = 1; i <= num; i++) {
                result *= i;
                }
            document.getElementById("display").value = result;
        }
}

function calculate() {
    try {
        let expression = document.getElementById("display").value;
        let result = eval(expression);
        let rounding = document.getElementById("rounding").value;
        if (document.getElementById("absolute").checked) {
                result = Math.abs(result);
        }
        if (rounding === "ceil") result = Math.ceil(result);
        if (rounding === "floor") result = Math.floor(result);
        if (rounding === "round") result = Math.round(result);
        document.getElementById("display").value = result;
        } catch {
            alert("ERROR: Ingrese una expresión válida.");
        }
}