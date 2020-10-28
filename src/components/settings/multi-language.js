import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
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
            refreshLanguage(language);
            navigation.reset({
              index: 0,
              routes: [{name: 'Settings'}],
            });
          }}
        />
      ),
    });
  }, [navigation]);

  const refreshLanguage = async (language) => {
    
    I18n.locale = language;
    
    try {
      await AsyncStorage.setItem('language', I18n.locale);
    } catch (e) {
      // save error
      console.log(e);
    }
  };
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <View style={{backgroundColor: 'white', padding: 10}}>
          <TouchableOpacity
            style={styles.rowItem}
            onPress={() => setLanguage(languages.zh)}>
            <Text style={styles.text}>{I18n.t('language.chinese')}</Text>
            {language === languages.zh ? (
              <Ionicons name="checkmark-outline" size={25} color={'green'} />
            ) : null}
          </TouchableOpacity>
          <View style={{flex: 1, height: 1, backgroundColor: '#e8e8e8'}} />
          <TouchableOpacity
            style={styles.rowItem}
            onPress={() => setLanguage(languages.en)}>
            <Text style={styles.text}>{I18n.t('language.english')}</Text>
            {language === languages.en ? (
              <Ionicons name="checkmark-outline" size={25} color={'green'} />
            ) : null}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const win = Dimensions.get('window');
const styles = StyleSheet.create({
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
});
