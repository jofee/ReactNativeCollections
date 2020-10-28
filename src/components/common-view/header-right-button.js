import React from 'react';
import {Text, StyleSheet, TouchableHighlight} from 'react-native';
import I18n from '../../i18n/i18n';

export default function HeaderRightButton({onPress}) {
  return (
    <TouchableHighlight style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{I18n.t('common.save')}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    padding: 10,
    height: 30,
    borderRadius: 5,
    backgroundColor: '#2ecc71',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
});
