import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import I18n from '../i18n/i18n';
import AuthContext from '../common/auth-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

const avatar=require('../resources/avatar.png');

function SettingsScreen({navigation}) {
  const {signOut} = React.useContext(AuthContext);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={{flex: 1}}>
          <View style={styles.topbar}>
            <Image source={avatar} style={styles.avatar} />
            <View>
              <Text style={styles.topbarText}>XXX</Text>
            </View>
            <TouchableOpacity
              style={styles.logoutButton}
              onPress={() => {
                signOut();
              }}>
              <Text style={styles.topbarText}>{I18n.t('login.logout')}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.itemContainer}>
            <View style={styles.items}>
              <TouchableOpacity
                style={styles.item}
                onPress={() => {
                  navigation.navigate('MultiLanguage');
                }}>
                <Ionicons
                  name="language-outline"
                  size={25}
                  color={'green'}
                  style={styles.itemImage}
                />
                <Text style={styles.itemText}>
                  {I18n.t('settings.language')}
                </Text>
                <Ionicons
                  name="chevron-forward-outline"
                  size={20}
                  color={'green'}
                  style={styles.itemImageRight}
                />
              </TouchableOpacity>
              <View
                style={{height: 1, backgroundColor: '#cacaca', marginLeft: 100}}
              />
              <TouchableOpacity
                style={styles.item}
                onPress={() => {
                  navigation.navigate('ProfileScreen');
                }}>
                <Ionicons
                  name="happy-outline"
                  size={25}
                  color={'green'}
                  style={styles.itemImage}
                />
                <Text style={styles.itemText}>{I18n.t('settings.about')}</Text>
                <Ionicons
                  name="chevron-forward-outline"
                  size={20}
                  color={'green'}
                  style={styles.itemImageRight}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.items}>
              <TouchableOpacity
                style={styles.item}
                onPress={() => {
                  // versionUpdate();
                }}>
                <Ionicons
                  name="download-outline"
                  size={25}
                  color={'green'}
                  style={styles.itemImage}
                />
                <Text style={styles.itemText}>{I18n.t('settings.update')}</Text>
                <Text style={styles.itemTextTight}>1.0</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
const win = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topbar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: win.width,
    height: 70,
    padding: 10,
    backgroundColor:'#FFCC99'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  topbarText: {
    color: 'white',
  },
  logoutButton: {
    width:50,
    height:30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    // backgroundColor: '#8695EC',
    backgroundColor: '#e74c3c',
    marginLeft: 'auto',
  },
  logoutText: {
    color: 'white',
  },
  itemContainer: {
    flex: 1,
    backgroundColor: '#ededed',
    marginTop: 20,
  },
  items: {
    backgroundColor: 'white',
    marginTop: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#cacaca',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 8,
    paddingLeft: 30,
    paddingRight: 20,
    paddingTop: 8,
  },
  itemImage: {
    width: 30,
    height: 30,
  },
  itemText: {
    fontSize: 14,
    marginLeft: 20,
  },
  itemImageRight: {
    marginLeft: 'auto',
  },
  itemTextTight: {
    fontSize: 14,
    marginLeft: 'auto',
  },
});

export default SettingsScreen;
