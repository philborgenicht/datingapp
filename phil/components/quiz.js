import React, {Component} from 'react'
import Signup from './signup.js'
import Profile from './profile.js'
import Questions from './questions.js'

import {AppRegistry, StyleSheet, View, Text, TextInput, Switch, Button} from 'react-native'

export default class Quiz extends Component{
  constructor(){
    super();
    this.state={
      showQuiz: false,
    }
  }


showQuiz=()=>{
  this.setState({showQuiz:true})
}

  render(){
    if(!this.state.showQuiz){
    return(
      <View>
      <Text style={{color: 'white'}}>PERSONALITY QUIZ:
      </Text>

      <Text style={{color:'white'}}>if you need help selecting your top love values, please take this quiz, if you do not wish to do so, please proceed to the love value selection.
      </Text>
      <Button
        title="take quiz"
        onPress={this.showQuiz}/>
      </View>
    )
  }
  else if (this.state.showQuiz){
    return(
      <View>
      <Text style={{color:'white'}}>If you prefer to select your top three love values on your own, please do so here.
      </Text>
      <Text style={{color:'white'}}>
        Love Values Quiz
      </Text>

      <Questions />
      </View>
    )

  }
  }
}


AppRegistry.registerComponent('Quiz', ()=>Quiz);
