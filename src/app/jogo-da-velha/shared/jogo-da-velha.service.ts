import { Injectable } from '@angular/core';

@Injectable()
export class JogoDaVelhaService {

  private readonly TAM_TAB: number = 3;
  private readonly X: number = 1;
  private readonly O: number = 2;
  private readonly VAZIO: number = 0;

  private tabuleiro: any;
  private numMovimentos: number;
  private vitoria: any;

  private _jogador: number;
  private _showInicio: boolean;
  private _showTabuleiro: boolean;
  private _showFinal: boolean;

  constructor() { }

  /**
   * Inicializa o jogo. Define exibicao de tela inicial.
   *
   * @return void
   */
  public inicializar(): void {
    this._showInicio = true;
    this._showTabuleiro = false;
    this._showFinal = false;
    this.numMovimentos = 0;
    this.vitoria = false;
    this.inicializarTabuleiro();
  }

  /**
   * Inicializa o tabuleiro do jogo com vazio para
   * as posicoes
   *
   * @return void
   */
  public inicializarTabuleiro(): void {
    this.tabuleiro = [this.TAM_TAB];
    for (let i = 0; i < this.TAM_TAB; i++) {
      this.tabuleiro[i] = [this.VAZIO, this.VAZIO, this.VAZIO];
    }
  }

  /**
   * Retorna se o inicio da tela deve ser exibido
   *
   * @return boolean
   */
  get showInicio(): boolean {
    return this._showInicio;
  }

  /**
   * Retorna se o tabuleiro deve ser exibido
   *
   * @return boolean
   */

  /**
   * Retorna o numero do jogador a jogar
   *
   * @return number
   */
  get jogadir(): number {
    return this._jogador;
  }

  /**
   * Exibe o tabuleiro
   *
   * @return void
   */
  iniciarJogo(): void {
    this._showInicio = false;
    this._showTabuleiro = true;
  }



}
