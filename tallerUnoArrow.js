const obtenerDistancia = (coordX1, coordY1, coordX2, coordY2) =>
  Math.sqrt(Math.pow(coordX2 - coordX1, 2) + Math.pow(coordY2 - coordY1, 2));

console.log("Obtener distancia:", obtenerDistancia(1, 2, 1.5, 3));


const obtenerPiloto = (claveNave)=> claveNave.split(": ")[1];

console.log("Obtener piloto:", obtenerPiloto("XCSAS45: Jean Vazques"));


const obtenerTemperaturaMedia = (tempManana, tempTarde) =>
  (tempManana + tempTarde) / 2;
  
console.log("obtener temperatura media:",  obtenerTemperaturaMedia(30,90));


const contarSablesNegativos=(listaSables) => 
  listaSables.filter((item) => item < 0).length;

const sables = [2, 4, -8, 5, -6];
console.log("contar Sables Negativos:", contarSablesNegativos(sables));


const calcularSalario = (cantidadComisiones) => {
  const SALARIO_BASE = 3500000;
  const COMISION = 1500000;

  return (SALARIO_BASE + COMISION * cantidadComisiones) * 0.95;
};

console.log('calcular salario:',calcularSalario(2));
