import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Text,
  FlatList,
  StatusBar,
} from 'react-native';


import functionList from '../configs/function-list';

function HomeScreen() {
  const _renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <Image
          source={require('../resources/default.png')}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </View>
    );
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <FlatList
          data={functionList}
          renderItem={_renderItem}
          style={styles.list}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 50,
    height: 50,
  },
  list: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});

export default HomeScreen;
