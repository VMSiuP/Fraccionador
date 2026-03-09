const D_ANIO = 365;
const D_MES = 30.417;

// Validaciones en tiempo real
document.getElementById('inputMeses').addEventListener('input', (e) => {
    if (e.target.value > 12) e.target.value = 12;
});
document.getElementById('inputDias').addEventListener('input', (e) => {
    if (e.target.value > 31) e.target.value = 31;
});

function desglosar(totalDias) {
    let a = Math.floor(totalDias / D_ANIO);
    let restoA = totalDias % D_ANIO;
    let m = Math.floor(restoA / D_MES);
    let d = Math.round(restoA % D_MES);
    
    // Formato Año, Mes, Día
    return `${a} años, ${m} meses, ${d} días`;
}

function calcular(operacion, factor) {
    let an = parseInt(document.getElementById('inputAnos').value) || 0;
    let me = parseInt(document.getElementById('inputMeses').value) || 0;
    let di = parseInt(document.getElementById('inputDias').value) || 0;

    let diasOriginales = di + (me * D_MES) + (an * D_ANIO);
    let variacionDias;

    if (operacion === 'div') {
        variacionDias = Math.ceil(diasOriginales / factor);
        var totalFinalDias = diasOriginales - variacionDias;
    } else {
        variacionDias = Math.ceil(diasOriginales * (factor - 1));
        var totalFinalDias = diasOriginales + variacionDias;
    }

    document.getElementById('variacionText').innerText = desglosar(variacionDias);
    document.getElementById('finalText').innerText = desglosar(totalFinalDias);
    document.getElementById('resultWrapper').classList.remove('hidden');
}

function resetAll() {
    document.querySelectorAll('input').forEach(i => i.value = '');
    document.getElementById('resultWrapper').classList.add('hidden');
}

function copy() {
    const res = document.getElementById('finalText').innerText;
    navigator.clipboard.writeText("Resultado: " + res);
    alert("Copiado");
}

function share() {
    const text = encodeURIComponent("Fraccionador de años - Resultado: " + document.getElementById('finalText').innerText);
    window.open(`https://wa.me/?text=${text}`, '_blank');
}

function easterEgg() {
    alert("Esta es la primera App que creó Víctor Siu");
}
