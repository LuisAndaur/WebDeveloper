function sumar(){
    const form = document.getElementById("form");
    let operandoA = form["operandoA"];
    let operandoB = form["operandoB"];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado = "La operación no incluye números";
    document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);

    return 
}