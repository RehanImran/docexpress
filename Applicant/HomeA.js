import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Header from "../Components/Header";

import { FontAwesome5 } from "@expo/vector-icons";
//import Header from "./Header";
//import { getConnection, ARRAY } from 'oracledb';
//import Select from '../Database/Select';
export default class Home extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollContainer}>
        <SafeAreaView style={{ flex: 1 }}>
          <TouchableOpacity
            style={{ alignItems: "flex-end", margin: 16 }}
            onPress={this.props.navigation.openDrawer}
          >
            <FontAwesome5
              style={{ paddingTop: 20 }}
              name="bars"
              size={24}
              color="#fff"
            />
          </TouchableOpacity>
        </SafeAreaView>
        <View style={styles.container}>
          
        <View style={styles.logoContainer}>
          <Header />
        </View>
        <View style={styles.welcome}>
            <Text style={styles.title}>
                Welcome 
            </Text>
            <Text style={styles.titles}>
                Rehan Imran
            </Text>
        </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 2,
    paddingTop: 30,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor:"#5a66c5",
  },
  box: {
    margin: 2,
    height: 100,
    width: Dimensions.get("window").width / 1 - 6,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5a66c5",
  },
  text: {
    color: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 25,
    paddingLeft: 25,
  },
  textb: {
    color: "#000",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 110,
    fontSize: 20,
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "flex-start",
    paddingTop: 30,
  },
  title: {
    color: "#FFF",
    textAlign: "left",
    fontWeight: "bold",
    fontSize:40,
  },
  titles: {
    color: "#FFF",
    textAlign: "left",
    fontWeight: "bold",
    fontSize:20,
    paddingLeft:3,

  },
  welcome:{
    paddingBottom:200,
    paddingLeft:80,
    paddingTop:50,
  },
});

/*backgroundColor: "#5a66c5",
alignItems: "center",
justifyContent: "center",*/

////////////////////////////////////////////


