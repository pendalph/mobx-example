import React, {createContext, useContext} from 'react';
import {RootStoreType} from '../RootStore';

interface StoreProviderProps {
  store: RootStoreType;
}

const StoreContext = createContext<RootStoreType>(undefined!);

export const StoreProvider: React.FC<StoreProviderProps> = ({
  children,
  store,
}) => (
  // eslint-disable-next-line react/react-in-jsx-scope
  <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
);

export const useStore = (): RootStoreType => {
  return useContext(StoreContext);
};
