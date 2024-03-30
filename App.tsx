import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Chat from './Chat';
import steps from './data';
import data2 from './data2';

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'grey'}}>
      <FlatList data={steps} renderItem={item => <Chat item={item} />} />
    </View>
    // <View style={{flex: 1, backgroundColor: 'grey'}}>
    //   <FlatList data={data2} renderItem={item => <Chat item={item} />} />
    // </View>
  );
};

export default App;
