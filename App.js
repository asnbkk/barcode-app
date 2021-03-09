/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {RNCamera} from 'react-native-camera';

const App = () => {
  // const [readBarcode, setReadBarcode] = useState(true);
  const barcodeRecognized = (barcode) => {
    // barcodes.forEach((barcode) => console.warn(barcode.data));
    // setReadBarcode(false);
    alert(barcode.data);
  };
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <RNCamera
        style={{
          flex: 1,
          width: '100%',
        }}
        onBarCodeRead={barcodeRecognized}></RNCamera>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
