import React from "react";
import { WebView } from 'react-native-webview';

export default function GameScreen() {
  return (
    <WebView
      originWhitelist={['*']}
      source={{ uri: 'http://dopeass.monster' }} />  
    );
}