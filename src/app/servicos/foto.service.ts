import { Observable } from 'rxjs/Observable';
import { FotoComponent } from './../foto/foto.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

@Injectable()
export class FotoService {
    private url = 'http://localhost:3000/v1/fotos/';
    private opcoesHttp = { headers: new HttpHeaders({ "Content-type": "application/json" }) }

    constructor(private conexaoApi: HttpClient) { }

    listar() {
        return this.conexaoApi.get<FotoComponent[]>(this.url)
    }

    cadastrar(foto: FotoComponent): Observable<Mensagens> {
        return this.conexaoApi.post(
                              this.url,
                              JSON.stringify(foto),
                               this.opcoesHttp
                            )
                            .map(
                                () => new Mensagens(`Foto ${foto.titulo} cadastrada com sucesso`)
                            )
    }

    deletar(foto: FotoComponent): Observable<Object> {
        return this.conexaoApi.delete(this.url+foto._id)
     }

    consultar(fotoId: string): Observable<FotoComponent> {
        return this.conexaoApi.get<FotoComponent>(this.url+fotoId)
     }

    alterar(foto: FotoComponent): Observable<Mensagens> { 
        return this.conexaoApi.put(
            this.url+foto._id,
            JSON.stringify(foto),
            this.opcoesHttp
        ).map(
            () => new Mensagens(`Foto ${foto.titulo} alterada com sucesso`)
        )
    }
}

class Mensagens{
    constructor(private _texto: string){}

    get texto(){
        return this._texto
    }
}