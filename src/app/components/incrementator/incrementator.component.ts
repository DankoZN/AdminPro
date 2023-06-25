import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementator',
  templateUrl: './incrementator.component.html',
  styles: [],
})
export class IncrementatorComponent implements OnInit{
  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }

  //INPUT
  //este es el componente hijo
  //para decirle al componente que quiero recibir valor desde el padre apliicar @input()
  //el componenente (incrementator) espera leer una propiedad desde el padre llamada valor
  //Se puede renombrar el nombre del input (progreso) que se quiere mostrar en el padre (se muestra como valor en el html)
  //si dice progreso en el () de todas maneras el input lee la propiedad progreso
  //renombrar argumento que se envia desde el padre
  @Input('valor') progreso: number = 40;
  @Input() btnClass: string = 'btn-primary';



  //OUTPUT
  //escuchar cambios que el componente incrementator va a poder emitir
  //output son de tipo eventEmitter, funcion que el componente padre podra ejecutar
  //CUANDO YO DISPARE ALGO, SIGNIFCA QUE EL COMPONENTE ESTA DISPARANDO UN EVENTO
  //Se simbolizan como un evento (click) (keyup) (blur)
  @Output() emiteValor: EventEmitter<number> = new EventEmitter();


  cambiarValor(valor: number) {
    //valor que quiero incrementar o restar

    if (this.progreso >= 100 && valor >= 0) {
      //si el progreso es mayor o igual a 100 y el valor es mayor o igual a 0,
      this.emiteValor.emit(100);
      return (this.progreso = 100); //devuelve el progreso en 100
    }

    if (this.progreso <= 0 && valor < 0) {
      //si el progreso es menor o igual que 0 y el valor es negativo,
      this.emiteValor.emit(0);
      return (this.progreso = 0); //deja la barra de progreso en 0.
    }

    this.progreso = this.progreso + valor;
    this.emiteValor.emit( this.progreso );
    return this.progreso;
  }
  onChange( nuevoValor: number) {

    if (nuevoValor >= 100) {
      this.progreso = 100;
  } else if  ( nuevoValor <= 0 ) {
    this.progreso = 0;
  } else {
    this.progreso = nuevoValor;
      }

  this.emiteValor.emit(this.progreso);

    }

}
