import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Button,
  Alert,
  FlatList,
} from "react-native";
import Header from "./Header";
//var server=require('../Server/Server')
//var user='officer';
var user = "officer";
export default class Login extends Component {
  /*state={
        data:[]
    }

    fetchData=async()=>{
        const response=await fetch('http://192.168.2.8:4545/users');
        const users=await response.json();
        this.setState({data: users});
    }*/
  checkLogin() {
    const { username = "", password = "" } = this.state;
    if (username == "12345678" && password == "admin" && user == "officer") {
      this.props.navigation.navigate("Home");
    } else {
      Alert.alert("Error. Username/Password incorrect", ""[{ text: "okey" }]);
    }
  }

  /* componentDidMount(){
        this.fetchData();
    }*/

  render() {
    return (
      /*<Flatlist
                data={this.state.data}
                renderItem={
                    ({item})=>
                    <View>
                        <Text>{item.username}</Text>
                    </View>
                }
            />*/
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Header />
        </View>
        <View style={styles.formContainer}>
          <TextInput
            placeholder="Enter ID"
            onChangeText={(uname) => this.setState({ username: uname })}
            keyboardType="numeric"
            style={styles.input}
          />
          <TextInput
            placeholder="Enter Password"
            onChangeText={(pass) => this.setState({ password: pass })}
            secureTextEntry
            style={styles.input}
          />

          <Button
            style={styles.buttonContainer}
            title={"LOGIN"}
            onPress={() => this.checkLogin()}
          />

          <View style={styles.messageContainer}>
            <Text style={styles.title}>
              To reset password please contact Admin
            </Text>
          </View>
        </View>
      </View>
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
