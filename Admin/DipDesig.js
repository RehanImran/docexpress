import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import SearchableDropdown from "react-native-searchable-dropdown";

import { FontAwesome5 } from "@expo/vector-icons";

var items = [
    { id: 1, name: "Director" },
    { id: 2, name: "Manager" },
    { id: 3, name: "Officer" },
    { id: 4, name: "PA" },
];
var itemsss = [
    { id: 1, name: "Kachahri Road Islmabad" },
    { id: 2, name: "Walten Road Lahore" },
    { id: 3, name: "Halal Road Karachi" },
];
var itemss = [
    { id: 1, name: "Human Resources" },
    { id: 2, name: "Front Desk" },

];

export default class DocumentDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            designation:"",
        }
    }
  render() {
    return (
      <View style={{ flex: 1, marginTop: 30, paddingTop: 0 }}>
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
          onTextChange={(text) => this.setState({designation:text})}
          onItemSelect={(item) => this.setState({designation:item.name})}
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
          placeholder="Designation"
          resetValue={false}
          underlineColorAndroid="transparent"
        />
        {
            this.state.designation === 'Director' && (
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
                    items={itemsss}
                    //defaultIndex={2}
                    placeholder="Select Branch"
                    resetValue={false}
                    underlineColorAndroid="transparent"
                    />
            )
        }
        {
            this.state.designation === 'Manager' && (
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
                    items={itemss}
                    //defaultIndex={2}
                    placeholder="Department"
                    resetValue={false}
                    underlineColorAndroid="transparent"
                    />
                    
            )
        }        
        {
            this.state.designation === 'officer' && (
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
                    items={itemss}
                    //defaultIndex={2}
                    placeholder="Department"
                    resetValue={false}
                    underlineColorAndroid="transparent"
                    />
                    
            )
        }        
        {
            this.state.designation === 'PA' && (
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
                    items={itemss}
                    //defaultIndex={2}
                    placeholder="Department"
                    resetValue={false}
                    underlineColorAndroid="transparent"
                    />
                    
            )
        }        
        <View style={styles.buttoncontainerr}>
          <Button
            style={styles.buttonContainer}
            title={"Next"}
            onPress={() => this.props.navigation.navigate("Confirmation")}
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
  input: {
    alignItems: "flex-end",
     margin: 16,
     paddingLeft:10,
     paddingRight:10,
  },
});
