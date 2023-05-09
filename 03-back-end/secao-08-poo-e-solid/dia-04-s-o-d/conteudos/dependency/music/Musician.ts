import Flute from './Flute';

export default class Musician {
  constructor(
    public name: string,
    public flute: Flute = new Flute('Minha flauta'),
  ) { }

  play(): void {
    this.flute.play();
    console.log(
      `"${this.name}" é quem está comandando a emissão das melodias`,
    );
  }
}

const musician = new Musician('Márcia');
musician.play();