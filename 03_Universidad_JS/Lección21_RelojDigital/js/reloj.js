const mostrarReloj = () => {
    let fecha = new Date();
    let hs = formatoReloj(fecha.getHours());
    let min = formatoReloj(fecha.getMinutes());
    let sec = formatoReloj(fecha.getSeconds());

    document.getElementById("hora").innerHTML = `${hs}:${min}:${sec}`;

    const meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    const dias = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];

    document.getElementById("fecha").innerHTML = `${diaSemana}, ${dia} ${mes}`;

    document.getElementById("contenedor").classList.toggle("animar");
}

const formatoReloj = (time) => {
    if(time<10)
        time = "0" + time;
    return time;
}

setInterval(mostrarReloj,1000);