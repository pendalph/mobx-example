import {makeAutoObservable} from 'mobx';

import {RootStoreType} from '../RootStore';

export default class EnthusiasmStore {
  enthusiasmLevel: number = 0;

  constructor(private rootStore: RootStoreType) {
    makeAutoObservable<EnthusiasmStore>(this);
  }

  onIncrement = (level: number) => {
    this.enthusiasmLevel = level;
  };
  onDecrement = (level: number) => {
    this.enthusiasmLevel =
      this.enthusiasmLevel > 0 ? (this.enthusiasmLevel = level) : 0;
  };
}
