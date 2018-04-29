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
  public iniciarJogo(): void {
    this.jogodaVelhaService.iniciarJogo();
  }

  /**
   * Realiza uma jogada ao clicar em um local do tabuleiro
   *
   * @param posX number
   * @param posY number
   * @return void
   */
  public jogar(posX: number, posY: number): void {
    this.jogodaVelhaService.jogar(posX, posY);
  }

  /**
   * Retorna se a peca X deve ser exibida para a coordena informada
   *
   * @param posX number
   * @param posY number
   * @return boolean
   */
  public exibirX(posX: number, posY: number): boolean {
    return this.jogodaVelhaService.exibirX(posX, posY);
  }

  /**
   * Retorna se a peca 0 deve ser exibida para a coorderna informada
   *
   * @param posX number
   * @param posY number
   * @return boolean
   */
  public exibirO(posX: number, posY: number): boolean {
    return this.jogodaVelhaService.exibirO(posX, posY);
  }

  /**
   * Retorna se a marcacao de vitoria de vitoria
   * deve ser exibida para coordena informada
   *
   * @param posX number
   * @param posY number
   * @return boolean
   */
  public exibirVitoria(posX: number, posY: number): boolean {
    return this.jogodaVelhaService.exibirVitoria(posX, posY);
  }

  /**
   * Inicia um novo jogo
   *
   * @return void
   */
  get jogador(): number {
    return this.jogodaVelhaService.jogador;
  }

  /**
   * Inicia um novo jogo
   *
   * @return void
   */
  public novoJogo(): void {
    this.jogodaVelhaService.novoJogo();
  }

}
