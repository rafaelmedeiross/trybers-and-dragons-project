import Race from './Race';

export default class Orc extends Race {
  static i = 0;
  maxLife: number;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.i += 1;
    this.maxLife = 74;
  }

  public static createdRacesInstances(): number {
    return this.i;
  }
  
  get maxLifePoints(): number {
    return this.maxLife;
  }
} 