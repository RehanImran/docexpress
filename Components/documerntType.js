/*import React,{Component} from 'react';
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
});*/

import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import SearchableDropdown from "react-native-searchable-dropdown";

import { FontAwesome5 } from "@expo/vector-icons";

var items = [
  { id: 1, name: "Appeal" },
  { id: 2, name: "Transfer" },
  { id: 3, name: "Appearence" },
  
];

export default class ForwardDocument extends Component {
  render() {
    return (
      <View style={{ flex: 1, marginTop: 30, paddingTop: 20 }}>
        <SafeAreaView style={{ flex: 1 }}>
          <TouchableOpacity
            style={{ alignItems: "flex-end", margin: 16 }}
            onPress={this.props.navigation.openDrawer}
          >
            <FontAwesome5
              style={{ paddingTop: 20 }}
              name="bars"
              size={24}
              color="#5a66c5"
            />
          </TouchableOpacity>
        </SafeAreaView>
        <SearchableDropdown
          onTextChange={(text) => console.log(text)}
          onItemSelect={(item) => alert(JSON.stringify(item))}
          containerStyle={{ padding: 20 }}
          textInputStyle={{
            padding: 12,
            borderWidth: 1,
            borderColor: "#ccc",
            backgroundColor: "#FAF7F6",
          }}
          itemStyle={{
            padding: 10,
            marginTop: 2,
            backgroundColor: "#FAF9F8",
            borderColor: "#bbb",
            borderWidth: 1,
          }}
          itemTextStyle={{
            color: "#222",
          }}
          itemsContainerStyle={{
            maxHeight: "60%",
          }}
          items={items}
          //defaultIndex={2}
          placeholder="Send To"
          resetValue={false}
          underlineColorAndroid="transparent"
        />
        <View style={styles.buttoncontainerr}>
          <Button
            style={styles.buttonContainer}
            title={"Next"}
            onPress={() => this.props.navigation.navigate("Through")}
          />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
 
  buttonContainer: {
    backgroundColor: "#ffffff",
    
  },
  buttoncontainerr:{
    paddingBottom:300,
    paddingLeft:20,
    paddingRight:20,
  },
  
});
