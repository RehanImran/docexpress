import React, {Component, useEffect, useState} from "react";
import {StyleSheet, View, SafeAreaView, Button, ActivityIndicator, FlatList, Text} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import shortid from "shortid";
import {Autocomplete, withKeyboardAwareScrollView} from "react-native-dropdown-autocomplete";
 


class HomeScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedApplicant: null,
        };
    }
  handleSelectItem(item, index) {
    const {onDropdownClose} = this.props;
    onDropdownClose();
    this.setState({selectedApplicant: item});

  }
 
  render() {
    const autocompletes = [...Array(1).keys()];
 
    const apiUrl = "https://5b927fd14c818e001456e967.mockapi.io/branches";
 
    const {scrollToInput, onDropdownClose, onDropdownShow} = this.props;
 
    return (
      <View style={styles.autocompletesContainer}>
        <SafeAreaView>
          {autocompletes.map(() => (
            <Autocomplete
            placeholder="Enter Applicant Name"
              key={shortid.generate()}
              style={styles.input}
              scrollToInput={ev => scrollToInput(ev)}
              handleSelectItem={(item, id) => this.handleSelectItem(item, id)}
              onDropdownClose={() => onDropdownClose()}
              onDropdownShow={() => onDropdownShow()}
              renderIcon={() => (
                <Ionicons name="ios-add-circle-outline" size={20} color="#c7c6c1" style={styles.plus} />
              )}
              fetchDataUrl={apiUrl}
              minimumCharactersCount={2}
              highlightText
              valueExtractor={item => item.name}
              //valueExtractor={item => `${item.name} : ${item.id}`}
              rightContent
              rightTextExtractor={item => item.id}
              
            />
          ))}
          
        </SafeAreaView>
        { this.state.selectedApplicant ? (
            <View>
                <View style={styles.tableRow}>
                    <View style={styles.tableColumn}>
                        <Text style={styles.tableHeading}>
                            ID
                        </Text>
                    </View>
                    <View style={styles.tableColumn}>
                        <Text>
                            {this.state.selectedApplicant.id}
                        </Text>
                    </View>
                </View>
                <View style={styles.tableRow}>
                    <View style={styles.tableColumn}>
                        <Text style={styles.tableHeading}>
                            Name
                        </Text>
                    </View>
                    <View style={styles.tableColumn}>
                        <Text>
                            {this.state.selectedApplicant.name}
                        </Text>
                    </View>
                </View>
                <View style={styles.tableRow}>
                    <View style={styles.tableColumn}>
                        <Text style={styles.tableHeading}>
                            Address
                        </Text>
                    </View>
                    <View style={styles.tableColumn}>
                        <Text>
                            {this.state.selectedApplicant.address}
                        </Text>
                    </View>
                </View>
                <View style={styles.tableRow}>
                    <View style={styles.tableColumn}>
                        <Text style={styles.tableHeading}>
                            Properties
                        </Text>
                    </View>
                    <View style={styles.tableColumn}>
                        <Text>
                            {this.state.selectedApplicant.properties}
                        </Text>
                    </View>
                </View>
            </View>
        ) : null }
        <View>
        <Button
            style={styles.buttonContainer}
            title={"Reset Password"}
            onPress={() => this.props.navigation.navigate("Confirmation")}
          />
        </View>
      </View>
      
    );
  }
}
const styles = StyleSheet.create({
  autocompletesContainer: {
    paddingTop: 100,
    zIndex: 1,
    width: "100%",
    paddingHorizontal: 8,
  },
  buttonContainer: {
    backgroundColor: "#ffffff",
  },
  input: {maxHeight: 40},
  inputContainer: {
    display: "flex",
    flexShrink: 0,
    flexGrow: 0,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#c7c6c1",
    paddingVertical: 13,
    paddingLeft: 12,
    paddingRight: "5%",
    width: "100%",
    justifyContent: "flex-start",
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  plus: {
    position: "absolute",
    left: 15,
    top: 10,
  },
  tableRow: {
      flexDirection: 'row',
      borderWidth:1,
      borderColor: "black",
  },
  tableColumn: {
      flex: 0.5,
  },
  tableHeading: {
      fontSize: 24,
  }
});
 
export default withKeyboardAwareScrollView(HomeScreen);