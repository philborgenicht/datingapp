import React, {Component} from 'react'
import ValueQuiz from './valuequiz'

import {AppRegistry, StyleSheet, View, Text, TextInput, Switch, Button} from 'react-native'

export default class Questions extends Component{
  constructor(){
    super();
    this.state={}

  }

  render(){
    return(
      <View>

      <Text style={{color:'red'}}>
      questions
      </Text>
      <ValueQuiz />


      </View>
    )
  }
}


AppRegistry.registerComponent('Questions', ()=>Questions);
