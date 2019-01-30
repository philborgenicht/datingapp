import React, {Component} from 'react'
import Signup from './signup.js'
import Profile from './profile.js'
import Values from './values.js'

import {AppRegistry, StyleSheet, View, Text, TextInput, Switch, Button} from 'react-native'

export default class ValueQuiz extends Component{
  constructor(){
    super();
    this.state={
      showQuiz: true,
    }
  }
  hideQuiz=()=>{
    this.setState({showQuiz:false})
  }

  render(){
    if(this.state.showQuiz){

    return(
      <View>
      <Text style={{color: 'white'}}>LOVE VALUES QUIZ:
      </Text>

      <Text style={{color:'white'}}>if you need help selecting your top love values, please take this quiz, if you do not wish to do so, please proceed to the love value selection.
      </Text>

      <Text style={{color:'red'}}>
      quiz questions
      </Text>

      <Text style={{color:'red'}}> click below to dismiss the quiz and proceed
      </Text>

      <Button
        title="dismiss"
        onPress={this.hideQuiz}/>

      </View>
    )
  }
  else if (!this.state.showQuiz){
    return(
      <View>

      <Text style={{color:'white'}}>
      Select Your Top 3 Love Values Below
      </Text>
      <Values />


      </View>
    )
  }
  }
  }


AppRegistry.registerComponent('ValueQuiz', ()=>ValueQuiz);
