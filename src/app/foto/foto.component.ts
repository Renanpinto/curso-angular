import { Component, Input } from "@angular/core";


@Component({
    selector: 'foto',
    template: `<img class="img-fluid" width="300" src="{{url}}" alt="{{titulo}}">`
})

export class FotoComponent{
    @Input() titulo
    @Input() url = "";
    descricao

}