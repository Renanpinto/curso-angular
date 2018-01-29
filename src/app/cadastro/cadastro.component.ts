import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router/src/events';
import { FotoComponent } from '../foto/foto.component';
import { FotoService } from '../servicos/foto.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router/';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'cp-cadastro',
  templateUrl: 'cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  foto = new FotoComponent();
  mensagem = '';
  formCadastro: FormGroup

  constructor(private servico: FotoService,
    private rota: ActivatedRoute,
    private roteador: Router,
  private formBuilder: FormBuilder) {


   this.validaForm()



    rota.params.subscribe(
      parametros => {
        if (parametros.fotoId) {
          this.carregarFoto(parametros.fotoId)
        }
      }
    )


  }

  ngOnInit() { }

  validaForm(){
    this.formCadastro = this.formBuilder.group({
    titulo: ['', Validators.compose(
      [
        Validators.required,
        Validators.minLength(3)
      ]
    )],
    url: ['', Validators.required],
    descricao: ['']
   })
}

  carregarFoto(idFoto) {

    this.servico.consultar(idFoto)
      .subscribe(

      fotoApi => this.foto = fotoApi
      , erro => console.log(erro)

      )

  }

  salvar() {
    if (this.foto.url.length > 0 || this.foto.titulo.length > 0) {
      if (this.foto._id) {
        this.servico.alterar(this.foto)
          .subscribe(
          mensagemServico => {
            this.mensagem = mensagemServico.texto
            this.roteador.navigate([''])
          }, erro => console.log(erro)
          )
      } else {

        this.servico.cadastrar(this.foto)
          .subscribe(
          mensagemServico => {
            this.mensagem = mensagemServico.texto
            this.foto = new FotoComponent()
          },
          erro => console.log(erro)
          )
      }
    }
  }

}
