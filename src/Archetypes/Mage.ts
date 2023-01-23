import Archetype from './Archetype';
import type { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  static i = 0;
  energy: EnergyType;

  constructor(name: string) {
    super(name);
    Mage.i += 1;
    this.energy = 'mana';
  }

  public static createdArchetypeInstances(): number {
    return this.i;
  }
  
  get energyType(): EnergyType {
    return this.energy;
  }
} 