import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  Text,
  Button,
  Alert,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Header from "./Header";
import { FontAwesome5 } from "@expo/vector-icons";
//import { getConnection, ARRAY } from 'oracledb';
//import Select from '../Database/Select';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  registerapplicant() {
    const {
      CNIC = "",
      CONTACT = "",
      FNAME = "",
      LNAme = "",
      EMAIL = "",
      ADDRESS = "",
    } = this.state;
    if (CNIC.length != 13 || CONTACT.length != 11) {
      if (CNIC.length != 13 && CONTACT.length == 11) {
        Alert.alert("Incorrect CNIC", ""[{ text: "okey" }]);
      } else if (CNIC.length == 13 && CONTACT.length != 11) {
        Alert.alert("Incorrect Contact", ""[{ text: "okey" }]);
      } else {
        Alert.alert("Incorrect CNIC and Contact", ""[{ text: "okey" }]);
      }
    } else {
      this.props.navigation.navigate("Make Choice");
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <SafeAreaView style={{ flex: 1 }}>
          <TouchableOpacity
            style={{ alignItems: "flex-end", margin: 16 }}
            onPress={this.props.navigation.openDrawer}
          >
            <FontAwesome5
              style={{ paddingTop: 20 }}
              name="bars"
              size={24}
              color="#ffffff"
            />
          </TouchableOpacity>
        </SafeAreaView>
        <View style={styles.logoContainer}>
          <Header />
        </View>
        <View style={styles.formContainer}>
          <TextInput
            placeholder="First Name"
            onChangeText={(fname) => this.setState({ FNAME: fname })}
            style={styles.input}
          />
          <TextInput
            placeholder="Last Name"
            onChangeText={(lname) => this.setState({ LNAME: lname })}
            style={styles.input}
          />
          <TextInput
            placeholder="Email"
            onChangeText={(email) => this.setState({ EMAIL: email })}
            style={styles.input}
          />
          <TextInput
            placeholder="Address"
            onChangeText={(address) => this.setState({ ADDRESS: address })}
            style={styles.input}
          />
          <TextInput
            placeholder="CNIC"
            onChangeText={(cnic) => this.setState({ CNIC: cnic })}
            keyboardType="numeric"
            style={styles.input}
          />
          <TextInput
            placeholder="Contact Number"
            onChangeText={(contact) => this.setState({ CONTACT: contact })}
            keyboardType="numeric"
            style={styles.input}
          />

          <Button
            style={styles.buttonContainer}
            title={"Register Applicant"}
            onPress={() => this.registerapplicant()}
          />

          <View style={styles.messageContainer}>
            <Text style={styles.title}>
              To reset password please contact Admin
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
    backgroundColor: "#5a66c5",
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "flex-start",
    paddingTop: 60,
  },
  buttonContainer: {
    backgroundColor: "#ffffff",
  },
  formContainer: {
    paddingBottom: 350,
    padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: "rgba(255,255,255,0.3)",
    marginBottom: 20,
    color: "#FFF",
    paddingHorizontal: 10,
  },
  title: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
    paddingTop: 40,
  },
});
