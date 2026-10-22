class Carta {
  constructor(nome, equipe, emoji, forca, velocidade, inteligencia, poder, imagem) {
    this.nome = nome;
    this.equipe = equipe;
    this.emoji = emoji;
    this.forca = forca;
    this.velocidade = velocidade;
    this.inteligencia = inteligencia;
    this.poder = poder;
    this.imagem = imagem;
  }

  // TODO 1
  forcaTotal() {
    return this.forca + this.velocidade + this.inteligencia + this.poder;
  }

  // TODO 2
  raridade() {
    const total = this.forcaTotal();

    if (total >= 300) {
      return 'Lendária';
    } else if (total >= 250) {
      return 'Rara';
    } else {
      return 'Comum';
    }
  }

  // TODO 3
  valorDe(atributo) {
    switch (atributo) {
      case 'forca':
        return this.forca;
      case 'velocidade':
        return this.velocidade;
      case 'inteligencia':
        return this.inteligencia;
      case 'poder':
        return this.poder;
      default:
        return 0;
    }
  }

  // TODO 4
  resumo() {
    return `${this.emoji} ${this.nome} (${this.equipe}) — força total ${this.forcaTotal()}`;
  }
}