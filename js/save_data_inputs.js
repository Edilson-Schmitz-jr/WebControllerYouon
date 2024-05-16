
function salvar() {
    localStorage.info = document.getElementById("ipInput").value;
    localStorage.porta = document.getElementById("portaInput").value;
    localStorage.senha = document.getElementById("senhaInput").value;
    document.querySelector('.window_data_inputs').classList.remove("active");
}

window.onload = function carregar() {
    if (localStorage.info) {
        document.getElementById("ipInput").value = localStorage.info;
    }

    if (localStorage.porta) {
        document.getElementById("portaInput").value = localStorage.porta;
    }

    if (localStorage.senha) {
        document.getElementById("senhaInput").value = localStorage.senha;
    }
    
}
 