class VistaNotas
{
    creaNota(nota, idDiv)
    {
        let contenedor = document.createElement("div");
        let h1 = document.createElement("h1");
        h1.innerHTML=nota.titulo;
        let h2 = document.createElement("h2");
        h2.innerHTML=nota.texto;
        let botonBorrado = document.createElement("button");
        botonBorrado.innerHTML="Borrar";

        contenedor.appendChild(h1);
        contenedor.appendChild(h2);
        contenedor.appendChild(botonBorrado);

        contenedor.nota = nota;
        contenedor.id = nota.id;

        document.getElementById(idDiv).appendChild(contenedor);
    }

    borrarNota(idDiv, contenedorNota){
        document.getElementById(idDiv).removeChild(contenedorNota)
    }

    botonBorrar(nota)
    {
        return document.getElementById(nota.id).getElementsByTagName("button")[0];
    }
}