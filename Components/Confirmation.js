import React,{Component} from 'react';
import { StyleSheet, Text, View,Button, CheckBox } from 'react-native';
var user = "manager";
export default class Confirmation extends Component {

  check(){
    if(user=="manager"){
      this.props.navigation.navigate("HomeM")
    }
    else if(user=="officer"){
      this.props.navgation.navigate("Home")
    }
    else if(user=="applicant"){
      this.props.navigation.navigate("HomeA")
    }
    else if(user=="admin"){
      this.props.navigation.navigate("HomeAd")
    }
  }
    render(){
         return (
            <View style={styles.container}>
                <Text style={styles.title}>Record has been entered. </Text>
                <Text style={styles.title}> Select HOME to go back </Text>
                <Text style={styles.title}>to home screen </Text>
                <View style={styles.buttonContainer}>
                <Button  title={'HOME'} 
                onPress={()=> this.check()}
                    />
                </View>
                <Text style={styles.title}>to return to home screen</Text>

                
                    
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex:1, backgroundColor:'#5a66c5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color:'#FFF',
    textAlign:'center',
    fontWeight:'bold',
    
  },
  buttonContainer:{
    padding:20
  },
  
});
