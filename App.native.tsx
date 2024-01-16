// For Application Development
import React from 'react';
import { WebView } from 'react-native-webview';


const App = () => {

  return (
    // Webview with the url of your expo metro server & the localhost port, this will display the website in the app
    <WebView
      source={{ uri: 'http://192.168.0.117:8081' }}
    />
  );
};

export default App;
