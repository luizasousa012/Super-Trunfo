// ============================================================
//  CLASSE Jogador
//
//  Cada jogador tem um nome e uma pilha de cartas (um array).
//  Cada item do array this.cartas é um objeto da classe Carta,
//  então dá pra chamar os métodos dela: carta.forcaTotal(),
//  carta.nome, carta.equipe...
// ============================================================

class Jogador {
  constructor(nome) {
    this.nome = nome;
    this.cartas = [];
  }

  quantidadeDeCartas() {
    return this.cartas.length;
  }

  cartaDoTopo() {
    return this.cartas[0];
  }

  entregarCartaDoTopo() {
    return this.cartas.shift();
  }

  // TODO 5
  temCartas() {
    return this.cartas.length > 0;
  }

  // TODO 6
  receberCartas(lista) {
    for (const carta of lista) {
      this.cartas.push(carta);
    }
  }

  // TODO 7
  nomesDasCartas() {
    return this.cartas.map((carta) => carta.nome);
  }

  // TODO 8
  cartasDaEquipe(equipe) {
    return this.cartas.filter((carta) => carta.equipe === equipe);
  }

  // TODO 9
  forcaMedia() {
    if (this.cartas.length === 0) {
      return 0;
    }
    const soma = this.cartas.reduce((acumulado, carta) => {
      return acumulado + carta.forcaTotal();
    }, 0);
    return soma / this.cartas.length;
  }
}