import React,{Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function EnterRecord(){

    return (
      <View style={styles.container}>
        <Text>Forward Document</Text>
      </View>
        );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
