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
import I18n from '../i18n/i18n';


import functionList from '../configs/function-list';

function HomeScreen() {
  const _renderItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
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
      <SafeAreaView style={styles.container}>
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
    backgroundColor: '#F5FCFF',
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
