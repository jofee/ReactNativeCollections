import React from 'react';
import {View, StatusBar} from 'react-native';
/**
 * 欢迎页
 */
function WelcomeScreen() {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="default" />
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
