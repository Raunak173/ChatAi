import {StyleSheet, View, useWindowDimensions} from 'react-native';
import React, {useState} from 'react';
import WebView from 'react-native-webview';

const Chat2 = ({item}: any) => {
  let md = require('markdown-it')(),
    mathjax3 = require('markdown-it-mathjax3');

  md.use(mathjax3);
  const markdownContent = item?.item;
  const htmlContent = `
    <html>
      <head>
        <style>
          body { font-size: 20px; }
          p{
            font-size: 40px;
          }
          mjx-container { font-size: 30px; }
        </style>
      </head>
      <body>
      <p>
        ${md.render(markdownContent)}
      </p>
      </body>
    </html>
  `;
  console.log(htmlContent);

  return (
    <View style={[styles.chat, {width: useWindowDimensions().width * 0.8}]}>
      <WebView
        originWhitelist={['*']}
        source={{html: htmlContent}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </View>
  );
};

export default Chat2;

const styles = StyleSheet.create({
  chat: {
    marginVertical: 20,
    backgroundColor: '#fff',
    height: 250,
    padding: 10,
    borderRadius: 20,
    alignSelf: 'flex-end',
    marginRight: 10,
  },
});
