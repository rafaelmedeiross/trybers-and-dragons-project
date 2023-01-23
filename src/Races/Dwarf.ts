import Race from './Race';

export default class Dwarf extends Race {
  static i = 0;
  maxLife: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.i += 1;
    this.maxLife = 80;
  }

  public static createdRacesInstances(): number {
    return this.i;
  }
  
  get maxLifePoints(): number {
    return this.maxLife;
  }
} 