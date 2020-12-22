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
export default class HardSoft extends Component{
    render(){
        return(
        <View>
            <Button
                style={styles.buttonContainer}
                title={"Hard Documents"}
                onPress={() => this.props.navigation.navigate("Document Details")}
            />
            { <Button
                style={styles.buttonContainer}
                title={"Soft Documents"}
                onPress={() => this.props.navigation.navigate("Select Document Type")}
            /> }
        </View>
        )
    }
}

const styles = StyleSheet.create({
    
    buttonContainer: {
      backgroundColor: "#ffffff",
    },
    
  });