import React from 'react';
import {
  SafeAreaView,
  View,
  Platform,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {WebView} from 'react-native-webview';

export default function DemoEchartScreen() {
  const webRef = React.useRef();
  const fetchData = () => {
    let data = [820, 932, 901, 934, 1290, 1330, 1320]; //模拟获取数据
    let run = `showChart(${JSON.stringify(data)})`;
    webRef.current.injectJavaScript(run);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardContainer}>
        <WebView
          ref={(r) => (webRef.current = r)}
          allowFileAccess={true}
          style={styles.webview}
          originWhitelist={['*']}
          source={
            Platform.OS === 'ios'
              ? require('../../../ios/assets/html/chart.html')
              : {uri: 'file:///android_asset/html/chart.html'}
          }
          javaScriptEnabled={true}
          domStorageEnabled={true}
          useWebKit={false}
          startInLoadingState={true}
          onLoadEnd={() => {
            fetchData();
          }}
        />
      </View>
    </SafeAreaView>
  );
}
const win = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    // borderWidth: 1,
    borderRadius: 4,
    //android
    elevation: 4,
    //ios
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: '#ddd',
  },
  webview: {
    width: win.width - 50,
    height: 300,
    margin: 5,
  },
});
