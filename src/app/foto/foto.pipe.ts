import { FotoComponent } from './foto.component';
import { Pipe, PipeTransform } from "@angular/core";




@Pipe({
    name: 'filtroPorTitulo'
})

export class FiltroPorTitulo implements PipeTransform{
    transform(listaFotos: FotoComponent[], textoDigitado: string){
        
        return listaFotos.filter(
            foto => {
                if(foto.titulo.toLowerCase().includes(textoDigitado.toLowerCase())){
                    return foto;
                }
            }
        )
    }

}