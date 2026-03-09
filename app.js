const DIAS_ANIO = 365;
const DIAS_MES = 30.417; // Promedio real (365/12)

function procesar(op, factor) {
    let d = parseInt(document.getElementById('inputDias').value) || 0;
    let m = parseInt(document.getElementById('inputMeses').value) || 0;
    let a = parseInt(document.getElementById('inputAnos').value) || 0;

    // Convertir todo a días totales
    let totalEnDias = d + (m * DIAS_MES) + (a * DIAS_ANIO);
    
    // Aplicar operación
    let calculo = (op === 'div') ? (totalEnDias / factor) : (totalEnDias * factor);

    // Redondeo más favorable (Techo)
    let finalDiasTotal = Math.ceil(calculo);

    // Desglosar
    let resAnos = Math.floor(finalDiasTotal / DIAS_ANIO);
    let restoAnos = finalDiasTotal % DIAS_ANIO;
    let resMeses = Math.floor(restoAnos / DIAS_MES);
    let resDias = Math.round(restoAnos % DIAS_MES);

    // Formato solicitado: Día, Mes, Año
    const format = `${resDias} días, ${resMeses} meses, ${resAnos} años`;
    
    document.getElementById('resText').innerText = format;
    document.getElementById('resultArea').classList.remove('hidden');
}

function copyRes() {
    const txt = document.getElementById('resText').innerText;
    navigator.clipboard.writeText(txt).then(() => alert("Copiado al portapapeles"));
}

function shareWA() {
    const txt = encodeURIComponent("Fraccionamiento de tiempo: " + document.getElementById('resText').innerText);
    window.open(`https://wa.me/?text=${txt}`, '_blank');
}

function easterEgg() {
    console.log("Secret unlocked!");
    alert("Esta es la primera App que creó Víctor Siu");
}
