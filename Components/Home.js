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

import { FontAwesome5 } from "@expo/vector-icons";
//import Header from "./Header";
//import { getConnection, ARRAY } from 'oracledb';
//import Select from '../Database/Select';
export default class Login extends Component {
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
              color="#5a66c5"
            />
          </TouchableOpacity>
        </SafeAreaView>
        <View>
          <Text style={styles.textb}>Announcements</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.box}>
            <Text style={styles.text}>
              Offce will be remained Close Tomorrow
            </Text>
            <Text style={styles.text}>11-June-2020</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>
              Vice Chancellor briefs Governor about initiatives taken by Income
              Tax Department in fight against Coronavirus
            </Text>
            <Text style={styles.text}>11-June-2020</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>
              Tomorrow Department will be celebrating international womens day.
            </Text>
            <Text style={styles.text}>11-June-2020</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>Eid Mubarak </Text>
            <Text style={styles.text}>11-June-2020</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>
              This year our department has been voted as the best working
              department of Pakistan
            </Text>
            <Text style={styles.text}>11-June-2020</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>Offce will remail Close Tomorrow</Text>
            <Text style={styles.text}>11-June-2020</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>Eid Mubarak </Text>
            <Text style={styles.text}>11-June-2020</Text>
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
});

/*backgroundColor: "#5a66c5",
alignItems: "center",
justifyContent: "center",*/
