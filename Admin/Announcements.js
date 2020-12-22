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
  check() {
    console.log(this.state);
    const { announcements = ""} = this.state;
    if (announcements != null ) {
      try {
        this.props.navigation.navigate("Confirmation");
      } catch (err) {
        console.log(err);
      }
    }
    else {
      Alert.alert("Error. announcements/Password incorrect", ""[{ text: "okey" }]);
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
                        <Text>{item.announcements}</Text>
                    </View>
                }
            />*/
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Header />
        </View>
        <View style={styles.formContainer}>
          <TextInput
            placeholder="Announcement"
            onChangeText={(announce) => this.setState({ announcements: announce })}
            style={styles.input}
          />
          <View style={styles.applicant}>
          <Button
            style={styles.buttonContainer}
            title={"Publish Announcement"}
            onPress={() => this.check()}
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
    alignItems:"stretch",
  },
  title: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
    paddingTop: 40,
  },
});
