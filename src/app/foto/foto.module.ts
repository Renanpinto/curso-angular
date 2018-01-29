import { FiltroPorTitulo } from './foto.pipe';
import { FotoComponent } from './foto.component';
import { NgModule } from "@angular/core";


@NgModule({
    declarations: [FotoComponent, FiltroPorTitulo],
    exports: [FotoComponent, FiltroPorTitulo]
})
export class FotoModule{

}