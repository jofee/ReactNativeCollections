import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  DeviceEventEmitter,
} from 'react-native';
import I18n, {languages} from '../../i18n/i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HeaderRightButton from '../common-view/header-right-button';
import Ionicons from 'react-native-vector-icons/Ionicons';

/**
 * 多语言
 */
export default function MultiLanguageScreen({navigation}) {
  const [language, setLanguage] = React.useState(I18n.locale);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: I18n.t('language.title'),
      headerRight: () => (
        <HeaderRightButton
          onPress={() => {
            DeviceEventEmitter.emit('confirm', ''); //在navigation 的header中，language始终是初始值
          }}
        />
      ),
    });
  }, [navigation]);

  React.useEffect(() => {
    const confirm = async () => {
      I18n.locale = language;
      try {
        await AsyncStorage.setItem('language', I18n.locale);
      } catch (e) {
        // save error
        console.log(e);
      }
      navigation.reset({
        index: 0,
        routes: [{name: 'Settings'}],
      });
    };
    const emitter = DeviceEventEmitter.addListener('confirm', confirm);
    return () => {
      emitter.remove();
    };
  }, [language, navigation]);

  return (
    <SafeAreaView style={styles.flex}>
      <ScrollView style={styles.container}>
        <TouchableOpacity
          style={styles.rowItem}
          onPress={() => setLanguage(languages.zh)}>
          <Text style={styles.text}>{I18n.t('language.chinese')}</Text>
          {language === languages.zh ? (
            <Ionicons name="checkmark-outline" size={25} color={'green'} />
          ) : null}
        </TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity
          style={styles.rowItem}
          onPress={() => setLanguage(languages.en)}>
          <Text style={styles.text}>{I18n.t('language.english')}</Text>
          {language === languages.en ? (
            <Ionicons name="checkmark-outline" size={25} color={'green'} />
          ) : null}
        </TouchableOpacity>
        <View style={styles.line} />
      </ScrollView>
    </SafeAreaView>
  );
}

const win = Dimensions.get('window');
const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  rowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    height: 40,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#e8e8e8',
  },
});
