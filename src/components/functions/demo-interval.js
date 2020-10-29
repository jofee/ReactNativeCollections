import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import useInterval from '../../common/useInterval';

export default function DemoIntervalScreen() {
  const [count, setCount] = React.useState(0);
  useInterval(() => {
    setCount(count + 1);
  }, 1000);
  return (
    <SafeAreaView style={styles.container}>
      <Text>{count}</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
