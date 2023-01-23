import Archetype from './Archetype';
import type { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  static i = 0;
  energy: EnergyType;

  constructor(name: string) {
    super(name);
    Necromancer.i += 1;
    this.energy = 'mana';
  }

  public static createdArchetypeInstances(): number {
    return this.i;
  }
  
  get energyType(): EnergyType {
    return this.energy;
  }
} 