import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.scss']
})
export class TransferenciaComponent implements OnInit {

  @Output() aoTransferir = new EventEmitter<any>();
  valor!: number;
  destino!: number;

  constructor() { }

  transferir(){
    console.log("Solicitada nova transferencia");
    const valorEmitir = { valor: this.valor, destino: this.destino};
    this.aoTransferir.emit(valorEmitir);
  }

  ngOnInit(): void {
  }

}
