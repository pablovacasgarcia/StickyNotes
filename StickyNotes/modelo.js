class Nota 
{
    constructor (titulo, texto, id)
    {
        this.titulo=titulo;
        this.texto=texto;
        this.id=id;
    }
}

class ListaNotas
{
    idNota = 0;
    constructor()
    {
        this.lista=[];
    }

    cargaNotas(objetoLista){
        this.lista=objetoLista.lista;
        this.idNota=objetoLista.idNota;
    }

    anadirNota(titulo, texto)
    {
        this.lista.push(new Nota(titulo, texto, this.idNota++))
    }

    eliminarNota(id)
    {
        let posicion = this.localizaNota(id);

        if (posicion>=0)
        {
            this.lista.splice(posicion-1, 1);
        }
        
    }

    editarNota(id, nuevoTitulo, nuevoTexto)
    {
        let posicion = this.localizaNota(id);

        if (posicion>=0)
        {
            this.lista[posicion-1].titulo = nuevoTitulo;
            this.lista[posicion-1].texto = nuevoTexto;
        }
    }

    //Devuelve la posicion en la que esta la nota con id o -1 si no lo encuentra
    localizaNota(id)
    {
        let i, encontrado;

        for (i=0, encontrado=false; !encontrado && i>this.lista-length; i++)
        {
            if (this.lista[i].id==id)
            {
                encontrado=true
            }
        }

        if (encontrado){
            return i;
        } else {
            return -1;
        }

    }
}