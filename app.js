const D_ANIO = 365;
const D_MES = 30.417;

function desglosar(totalDias) {
    let a = Math.floor(totalDias / D_ANIO);
    let restoA = totalDias % D_ANIO;
    let m = Math.floor(restoA / D_MES);
    let d = Math.round(restoA % D_MES);
    
    // Si el redondeo de días llega a 30/31, ajustamos a un mes más
    if (d >= 30) { d = 0; m++; }
    if (m >= 12) { m = 0; a++; }

    // Formato solicitado: Año, Mes, Día con ceros a la izquierda para estética
    const pad = (n) => n.toString().padStart(2, '0');
    return `${pad(a)} años, ${pad(m)} meses, ${pad(d)} días`;
}

function calcular(operacion, factor) {
    let an = parseInt(document.getElementById('inputAnos').value) || 0;
    let me = parseInt(document.getElementById('inputMeses').value) || 0;
    let di = parseInt(document.getElementById('inputDias').value) || 0;

    let diasOriginales = di + (me * D_MES) + (an * D_ANIO);
    let variacionDias;
    let totalFinalDias;

    if (operacion === 'div') {
        // Ejemplo: 1/4 de 6 años = 1.5 años (1 año, 6 meses)
        variacionDias = Math.ceil(diasOriginales / factor);
        totalFinalDias = diasOriginales - variacionDias;
    } else {
        // Aumento: 1/2 más, 1/3 más o Doble
        variacionDias = Math.ceil(diasOriginales * (factor === 2 ? 1 : (factor - 1)));
        if (factor === 2) {
            totalFinalDias = diasOriginales * 2;
            variacionDias = diasOriginales; // La variación es el total original
        } else {
            totalFinalDias = diasOriginales + variacionDias;
        }
    }

    document.getElementById('variacionText').innerText = desglosar(variacionDias);
    document.getElementById('finalText').innerText = desglosar(totalFinalDias);
    document.getElementById('resultWrapper').classList.remove('hidden');
}
