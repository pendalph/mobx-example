import {runInAction} from 'mobx';
import {configureStore} from './configureStore';
import EnthusiasmStore from './EnthusiasmStore';

class RootStore {
  enthusiasmStore: EnthusiasmStore;

  constructor() {
    this.enthusiasmStore = new EnthusiasmStore(this);
  }
}

export function createRootStore(): RootStore {
  configureStore();

  return runInAction(() => {
    return new RootStore();
  });
}

export type RootStoreType = InstanceType<typeof RootStore>;
