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
var user = "manager";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  /*state={
        data:[]
    }

    fetchData=async()=>{
        const response=await fetch('http://192.168.2.8:4545/users');
        const users=await response.json();
        this.setState({data: users});
    }*/
  varify() {
    console.log(this.state);
    const { opassword = "", npassword = "",rnpassword = "" } = this.state;
    if (opassword=="admin1" && npassword==rnpassword) {
      try {
        this.props.navigation.navigate("Confirmation");
      } catch (err) {
        console.log(err);
      }
    } 
    else {
      Alert.alert("Incorrenct Field/s", ""[{ text: "okey" }]);
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
            placeholder="Enter Current Password"
            onChangeText={(opass) => this.setState({ opassword: opass })}
            keyboardType="numeric"
            style={styles.input}
          />
          <TextInput
            placeholder="Enter New Password"
            onChangeText={(npass) => this.setState({ npassword: npass })}
            secureTextEntry
            style={styles.input}
          />
           <TextInput
            placeholder="Re-Enter New Password"
            onChangeText={(rnpass) => this.setState({ rnpassword: rnpass })}
            secureTextEntry
            style={styles.input}
          />

          <Button
            style={styles.buttonContainer}
            title={"Change Password"}
            onPress={() => this.varify()}
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
