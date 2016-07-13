import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  AlertIOS
} from 'react-native';
import Button from 'react-native-button';

class myReactNativeProject extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  onPressButtonGET(userZip) {
    fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + userZip + '&key=' + GOOGLE_API_KEY, {method: "GET"})
    .then((response) => response.json())
    .then((responseData) => {
      AlertIOS.alert(
        "You are in " + responseData.results[0].formatted_address
      )
    })
    .done();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Are you lost but somehow still know your zip code?
        </Text>
        <TextInput
          style={{height: 40, textAlign: 'center'}}
          placeholder="Type it here!"
          onChangeText={(text) => this.setState({text})}
        />
        <TouchableHighlight onPress={()=>this.onPressButtonGET(this.state.text)} style={styles.button}>
          <Text style={styles.button}>Find Me!</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 200,
    alignItems: 'center',
    backgroundColor: '#87CEFA',
  },
  welcome: {
    fontSize: 14,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    backgroundColor: 'white',
    padding: 3
  }
});

AppRegistry.registerComponent('myReactNativeProject', () => myReactNativeProject);
