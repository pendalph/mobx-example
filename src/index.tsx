import React from 'react';
import {View} from 'react-native';
import {createRootStore, StoreProvider} from './store';
import EnthusiasmScreen from './EnthusiasmScreen';

const App: React.FC = () => {
  const store = createRootStore();
  return (
    <StoreProvider store={store}>
      <View style={{flex: 1}}>
        <EnthusiasmScreen name="Derrick" />
      </View>
    </StoreProvider>
  );
};

export default App;
