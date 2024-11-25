const relogio = document.querySelector('.clock');

function mostrarHoraAtual(){
    const data = new Date();
    const hour = data.getHours();
    const minutes = String(data.getMinutes()).padStart(2, '0');
    const seconds = String(data.getSeconds()).padStart(2, '0');
    relogio.innerHTML = `${hour}:${minutes}:${seconds}`;
}
mostrarHoraAtual();

setInterval(()=>{
    mostrarHoraAtual();
},1000)