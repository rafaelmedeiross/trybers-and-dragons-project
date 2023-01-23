import Archetype from './Archetype';
import type { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  static i = 0;
  energy: EnergyType;

  constructor(name: string) {
    super(name);
    Ranger.i += 1;
    this.energy = 'stamina';
  }

  public static createdArchetypeInstances(): number {
    return this.i;
  }
  
  get energyType(): EnergyType {
    return this.energy;
  }
} 