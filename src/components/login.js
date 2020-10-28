import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Text,
  Button,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import I18n from '../i18n/i18n';
import AuthContext from '../common/auth-context';

function LoginScreen() {
  const {signIn} = React.useContext(AuthContext);
  console.log(signIn);
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            signIn(null);
          }}>
          <Text>{I18n.t('login.login')}</Text>
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

export default LoginScreen;
