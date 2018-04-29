import { JogoDaVelhaService } from './shared/jogo-da-velha.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.scss']
})
export class JogoDaVelhaComponent implements OnInit {

  constructor(private jogodaVelhaService: JogoDaVelhaService) { }

  ngOnInit() {
    this.jogodaVelhaService.inicializar();
  }

  /**
   * Retorna se a tela de inicio deve ser exibida
   *
   * @return boolean
   */
  get showInicio(): boolean {
    return this.jogodaVelhaService.showInicio;
  }

  /**
   * Retorna se a tela de fim de jogo deve ser exibida
   *
   * @return boolean
   */
  get showTabuleiro(): boolean {
    return this.jogodaVelhaService.showTabuleiro;
  }

  /**
   * Retorna se a tela de fim de jogo deve ser exibida
   *
   * @return boolean
   */
  get showFinal(): boolean {
    return this.jogodaVelhaService.showFinal;
  }

  /**
   * Inicializa os dados de um novo jogo
   *
   * @return void
   */
  public inicializarJogo(): void {
    this.jogodaVelhaService.iniciarJogo();
  }



}
