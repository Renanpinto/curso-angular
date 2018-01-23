import { Input } from '@angular/core';
import { Component} from '@angular/core';


@Component({
    selector: 'painel',
    templateUrl: './painel.component.html'
})

export class PainelComponent{
    @Input() titulo
}