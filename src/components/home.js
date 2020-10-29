import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  StatusBar,
} from 'react-native';
import I18n from '../i18n/i18n';
import Ionicons from 'react-native-vector-icons/Ionicons';

import functionList from '../configs/function-list';

function HomeScreen({navigation}) {
  const _renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => {
          navigation.navigate(item.screen);
        }}>
        <Ionicons name={item.icon} size={30} color={'green'} />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <StatusBar barStyle="default" />
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 5,
  },
  rightContainer: {
    alignItems: 'flex-start',
    marginLeft: 10,
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
