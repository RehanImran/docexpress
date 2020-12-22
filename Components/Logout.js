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
import Header from "../Components/Header";

//var server=require('../Server/Server')
//var user='officer';
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
          <Text style={styles.textContainer}>
          Are You Sure You Want to LOGOUT
          </Text>
          <View style={styles.applicant}>
          <Button
            style={styles.buttonContainer}
            title={"Yes"}
            onPress={() => this.props.navigation.navigate("Login")}
          />
          </View>
          <View style={styles.applicant}>
          <Button
            style={styles.buttonContainer}
            title={"No"}
            onPress={() => this.props.navigation.navigate("Home")}
          />
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
  textContainer:{
    color: '#fff',
    textAlign:"center",
  },
  applicant:{
    paddingTop:20,
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
