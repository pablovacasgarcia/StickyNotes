window.onload = () =>
{
    misNotas = new ListaNotas;

    if(localStorage.getItem("notas")){
        misNotas.cargaNotas(JSON.parse(localStorage.getItem("notas")));
    }

    vista = new VistaNotas;
    
    for (nota of misNotas.lista)
    {
        vista.creaNota(nota, "app")
    }

    document.getElementById("buttonAltaNota").addEventListener("click", nuevaNota);

}

function actualizaLocalStorage(){

    localStorage.setItem("notas", JSON.stringify(misNotas));

}

function nuevaNota()
{
    campoTitulo = document.getElementById("inputTitulo");
    campoTexto = document.getElementById("inputTexto");

    misNotas.anadirNota(campoTitulo.value, campoTexto.value);

    notaActual=misNotas.lista[misNotas.lista.length-1]

    vista.creaNota(notaActual, "app");

    borradoNota = vista.botonBorrar(notaActual);

    borradoNota.addEventListener("click", borrarNota);

    actualizaLocalStorage()
}

function borrarNota(e){
    misNotas.eliminarNota(e.target.parentNode.id)
    console.log(e.target.parentNode.id)

    vista.borrarNota("app", e.target.parentNode)

    actualizaLocalStorage();
}