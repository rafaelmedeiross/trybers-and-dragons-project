import Race from './Race';

export default class Halfling extends Race {
  static i = 0;
  maxLife: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.i += 1;
    this.maxLife = 60;
  }

  public static createdRacesInstances(): number {
    return this.i;
  }
  
  get maxLifePoints(): number {
    return this.maxLife;
  }
} 