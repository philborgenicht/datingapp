import React, {Component} from 'react'
import Login from './login.js'


import {AppRegistry, StyleSheet, View, Text, TextInput, Switch, Button} from 'react-native'

export default class Values extends Component{
  constructor(){
    super();
    this.state={
      hasConfirmed:false
    }
  }

  Confirm=()=>{
    this.setState({hasConfirmed:true})
  }

  render(){
    if(!this.state.hasConfirmed){
    return(
      <View>

      <Text style={{color:'red'}}>
      love values  love values  love values  love values  love values  love values  love values  love values  love values  love values
      </Text>


      <Button
        title="confirm"
        onPress={this.Confirm}
        />
      </View>
    )
  }
  else if (this.state.hasConfirmed){
    return(
      <View>

      <Login/>


      </View>
    )
  }
  }
}


AppRegistry.registerComponent('Values', ()=>Values);
