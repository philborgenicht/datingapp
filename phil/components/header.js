import React, {Component} from 'react'



import {AppRegistry, StyleSheet, View, Text, TextInput, Switch, Button} from 'react-native'

export default class Header extends Component{
  constructor(){
    super();
    this.state={}

  }

  render(){
    return(
      <View>

      <Text style={{color:'white'}}>
      Find the Glow
      </Text>



      </View>
    )
  }
}


AppRegistry.registerComponent('Header', ()=>Header);
