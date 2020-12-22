import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View, ScrollView} from "react-native";

export default class Tracking extends Component {
  constructor(props) {
    super(props);
    this.state={
      q:"",
      searchResults:[],
      results:[],
    }
  }
  componentDidMount() {
    fetch('https://5b927fd14c818e001456e967.mockapi.io/branches')
    .then(res => res.json())
    .then(res => this.setState({results:res}));
  }
  render() {
    console.log(this.state.searchResults)
    return (
      <View style={styles.autocompletesContainer}>
        <SafeAreaView>
        <View style={styles.formContainer}>
          <TextInput
            placeholder="Search"
            onChangeText={(q) => {
              if(this.state.results.length){
                this.setState({
                  q,
                  searchResults:this.state.results.filter(item => item.name.includes(q)),
                })
              }
            }}
            style={styles.input}
            defaultValue={this.state.q}
          />
        </View>
          
        </SafeAreaView>
        <ScrollView>
          <View style={styles.tableRow}>
            <View style={styles.tableColumn}>
                <Text style={styles.tableHeading}>
                    ID
                </Text>
            </View>
            <View style={styles.tableColumn}>
                <Text>
                   Name
                </Text>
            </View>
            <View style={styles.tableColumn}>
                <Text>
                   Address
                </Text>
            </View>
          </View>
        { this.state.searchResults.length > 0 && this.state.searchResults.map(item => {
          return (    
            <View style={styles.tableRow}>
                <View style={styles.tableColumn}>
                    <Text style={styles.tableHeading}>
                        {item.id}
                    </Text>
                </View>
                <View style={styles.tableColumn}>
                    <Text>
                        {item.name}
                    </Text>
                </View>
                <View style={styles.tableColumn}>
                    <Text>
                        {item.address}
                    </Text>
                </View>
            </View>
          )
        })}
        { this.state.searchResults.length === 0 && this.state.results.length > 0 && this.state.results.map(item => {
          return (    
            <View style={styles.tableRow}>
                <View style={styles.tableColumn}>
                    <Text style={styles.tableHeading}>
                        {item.id}
                    </Text>
                </View>
                <View style={styles.tableColumn}>
                    <Text>
                        {item.name}
                    </Text>
                </View>
                <View style={styles.tableColumn}>
                    <Text>
                        {item.address}
                    </Text>
                </View>
            </View>
          )
        })}
        </ScrollView>
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
    backgroundColor: "#000",
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
      flex: 0.3,
  },
  tableHeading: {
      fontSize: 24,
  },
  formContainer: {
    paddingBottom: 20,
    padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: "rgba(255,255,255,0.3)",
    marginBottom: 20,
    color: "#000",
    paddingHorizontal: 10,
  },
});
