import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import I18n from '../i18n/i18n';
import AuthContext from '../common/auth-context';

function SettingsScreen() {
  const {signOut} = React.useContext(AuthContext);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
      <TouchableOpacity
          onPress={() => {
            signOut();
          }}>
          <Text>{I18n.t('login.logout')}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
export default SettingsScreen;