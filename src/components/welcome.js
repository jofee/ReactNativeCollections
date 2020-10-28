import React from 'react';
import {View, StatusBar} from 'react-native';
/**
 * 欢迎页
 */
function WelcomeScreen() {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#4785BE" barStyle="light-content" />
    </View>
  );
  //   const dispatch = () => {
  //     this.props.navigation.reset({
  //       index: 0,
  //       routes: [{name: 'MainScreen'}],
  //     });
  //   };
}

module.exports = WelcomeScreen;
