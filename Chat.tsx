import {StyleSheet, View, useWindowDimensions} from 'react-native';
import React, {useState} from 'react';
import WebView from 'react-native-webview';

const Chat = ({item}: any) => {
  // const [webViewHeight, setWebViewHeight] = useState(0);

  // const injectedScript = `
  //   (function() {
  //     var height = document.documentElement.scrollHeight;
  //     window.ReactNativeWebView.postMessage(JSON.stringify({ height: height }));
  //   })();
  // `;

  // const handleWebViewMessage = (event: any) => {
  //   const {height} = JSON.parse(event.nativeEvent.data);
  //   setWebViewHeight(height);
  // };

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Markdown to HTML</title>
      <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
      <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
      <style>
        body {
          font-family: Arial, sans-serif;
          padding: 5px;
        }
        strong {
          font-weight: bold;
        }
        p {
          font-size: 38px;
          margin: 0; 
        }
      </style>
    </head>
    <body>
      <p>
        ${item?.item
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .replace(/\n/g, '<br>')
          .replace(/\$([0-9]+)\\%\$/g, '$1%')
          .replace(
            /\$\\frac{(\d+)}{(\d+)}\$/g,
            (match: any, p1: any, p2: any) => `${p1}/${p2}`,
          )
          .replace('"_"', '-')}
      </p>
      <script>
        document.body.style.height = document.documentElement.scrollHeight + 'px';
        window.ReactNativeWebView.postMessage(document.documentElement.scrollHeight);
      </script>
    </body>
    </html>
  `;

  return (
    <View style={[styles.chat, {width: useWindowDimensions().width * 0.8}]}>
      <WebView
        originWhitelist={['*']}
        source={{html: htmlContent}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        // style={{
        //   heght: webViewHeight,
        //   width: '100%',
        // }}
        // injectedJavascript={injectedScript}
        // onMessage={handleWebViewMessage}
      />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  chat: {
    marginVertical: 20,
    backgroundColor: '#fff',
    height: 300,
    // height: 100,
    padding: 10,
    borderRadius: 20,
    alignSelf: 'flex-end',
    marginRight: 10,
  },
});
