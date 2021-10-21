import React from 'react';
import {observer} from 'mobx-react-lite';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useStore} from './store';

export type Props = {
  name: string;
};

const EnthusiasmScreen: React.FC<Props> = ({name}) => {
  const store = useStore();

  const getExclamationMarks = (numChars: number) =>
    numChars > 0 ? Array(numChars + 1).join('!') : '';

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>
        Hello {name}
        {getExclamationMarks(store.enthusiasmStore.enthusiasmLevel)}
      </Text>
      <View>
        <Button
          title="Increase enthusiasm"
          accessibilityLabel="increment"
          onPress={() =>
            store.enthusiasmStore.onIncrement(
              store.enthusiasmStore.enthusiasmLevel + 1,
            )
          }
          color="blue"
        />
        <Button
          title="Decrease enthusiasm"
          accessibilityLabel="decrement"
          onPress={() =>
            store.enthusiasmStore.onDecrement(
              store.enthusiasmStore.enthusiasmLevel - 1,
            )
          }
          color="red"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
  },
});

export default observer(EnthusiasmScreen);
