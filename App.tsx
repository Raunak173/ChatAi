import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Chat from './Chat';
import steps from './data';
import data2 from './data2';
import Chat2 from './Chat2';

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'grey'}}>
      <FlatList data={steps} renderItem={item => <Chat2 item={item} />} />
    </View>
    // <View style={{flex: 1, backgroundColor: 'grey'}}>
    //   <FlatList data={data2} renderItem={item => <Chat2 item={item} />} />
    // </View>
    // <View>
    //   <Chat2 />
    // </View>
  );
};

export default App;
