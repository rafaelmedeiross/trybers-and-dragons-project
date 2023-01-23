import Race from './Race';

export default class Elf extends Race {
  static i = 0;
  maxLife: number;
     
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.i += 1;
    this.maxLife = 99;
  }

  public static createdRacesInstances(): number {
    return this.i;
  }
  
  get maxLifePoints(): number {
    return this.maxLife;
  }
} 