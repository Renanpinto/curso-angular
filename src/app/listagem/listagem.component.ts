import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FotoService } from "../servicos/foto.service";
import { FotoComponent } from '../foto/foto.component';

@Component({
  selector: 'cp-listagem',
  templateUrl: './listagem.component.html',
  styles: []
})

export class ListagemComponent implements OnInit {
  titulo = 'CaelumPic';
  listaFotos: FotoComponent[] = []

  constructor(private servico: FotoService) {
    servico.listar()
      .subscribe(

      fotosApi => this.listaFotos = fotosApi,
      erro => console.log(erro)
      )
  }


  ngOnInit() {
  }

  remover(foto: FotoComponent) {
    this.servico.deletar(foto).subscribe(
      () => {

        this.listaFotos = this.listaFotos.filter(
          fotoFilter =>{
            if(fotoFilter != foto){
              return fotoFilter;
            }
          }
        )
        console.log(`apagou ${foto.titulo}`)
      }
      , erro => {
        console.log("deu ruim");
      }

    )
  }

}



